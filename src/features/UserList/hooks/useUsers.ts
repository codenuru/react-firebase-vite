import { getDocs } from '@firebase/firestore/lite'
import { type DocumentData } from '@firebase/firestore/lite'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

import { type User } from '@/features/UserXApp/'
import { getCollection, getCollectionData } from '@/lib/firebase/utils'
import { type DataWithID } from '@/types/commonPropTypes'

const USERS_QUERY_KEY = 'usersQuery'
const getUsersQueryKey = () => [USERS_QUERY_KEY]

const queryFn = async () => {
  return getCollectionData<DataWithID<User>>(await getDocs<User>(getCollection('users')))
}

function useUsers<T = DocumentData>(options?: UseQueryOptions<unknown, Error, DataWithID<T>[]>) {
  return useQuery({
    queryFn,
    queryKey: getUsersQueryKey(),
    ...options,
  })
}

export { useUsers, getUsersQueryKey }
