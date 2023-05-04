import { type DataWithID } from '@/types/commonPropTypes'

type User = {
  firstName: string
  lastName: string
}

type UserWithID = DataWithID<User>

export type { User, UserWithID }
