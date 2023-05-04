import { Loading } from '@/components/Loading'
import { useUsers } from '@/features/UserList/hooks/useUsers'
import { type UserWithID } from '@/features/UserXApp/'

import { Table } from './Table'

export const ListContainer = () => {
  const { data: users, error, isLoading, refetch } = useUsers<UserWithID>()
  if (isLoading) {
    return <Loading />
  }
  if (error)
    return (
      <div>
        <div>Something went wrong.</div>
        <button onClick={() => refetch()}>Try again.</button>
      </div>
    )

  return (
    <div>
      <h1>Users</h1>
      <Table users={users} />
    </div>
  )
}
