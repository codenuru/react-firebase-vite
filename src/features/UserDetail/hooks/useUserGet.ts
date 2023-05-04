import { doc, getDoc } from '@firebase/firestore/lite'
import { type DocumentData } from '@firebase/firestore/lite'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { type User } from '@/features/UserXApp/'
import { firestore } from '@/lib/firebase'
import { getDocData } from '@/lib/firebase/utils'
import { type DataWithID } from '@/types/commonPropTypes'

const USER_QUERY_KEY = 'userQuery'
const getUserQueryKey = (id: string) => [USER_QUERY_KEY, id]

const queryFn = async (id: string) => {
  const ref = doc(firestore, 'users', id)
  return getDocData<DataWithID<User>>(await getDoc(ref))
}
// interface ID extends string
export function useUserGet<T = DocumentData>(
  id: string,
  options?: UseQueryOptions<unknown, Error, DataWithID<T>>,
) {
  return useQuery({
    queryFn: () => queryFn(id),
    queryKey: getUserQueryKey(id),
    enabled: !!id,
    ...options,
  })
}
