import { addDoc } from '@firebase/firestore/lite'
import { type DocumentReference } from '@firebase/firestore/lite'
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { getUsersQueryKey } from '@/features/UserList/hooks/useUsers'
import { type User, type UserWithID } from '@/features/UserXApp/'
import { getCollection } from '@/lib/firebase/utils'

type UserCreateVariables = User

const mutationFn = (userData: UserCreateVariables) => {
  return addDoc(getCollection<User>('users'), userData) as unknown as Promise<
    DocumentReference<User>
  >
}

export function useUserCreate(
  options?: UseMutationOptions<DocumentReference<User>, Error, UserCreateVariables>,
) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn,
    onSuccess(data, variables) {
      queryClient.setQueryData<UserWithID[]>(getUsersQueryKey(), (usersData) => {
        return [{ id: data.id, ...variables }, ...(usersData ?? [])]
      })
    },
    ...options,
  })
}
