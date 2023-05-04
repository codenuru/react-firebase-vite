import { deleteDoc, doc } from '@firebase/firestore/lite'
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'

import { getUsersQueryKey } from '@/features/UserList/hooks/useUsers'
import { type UserWithID } from '@/features/UserXApp/'
import { firestore } from '@/lib/firebase'

type UserDeleteVariables = UserWithID['id']

const mutationFn = (id: UserDeleteVariables) => {
  return deleteDoc(doc(firestore, 'users', id))
}

export function useUserDelete(options?: UseMutationOptions<unknown, Error, UserDeleteVariables>) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn,
    onSuccess(_, id) {
      queryClient.setQueryData(getUsersQueryKey(), (usersData: UserWithID[] | undefined) => {
        if (!usersData) return
        return usersData.filter((user) => user.id !== id)
      })
    },
    ...options,
  })
}
