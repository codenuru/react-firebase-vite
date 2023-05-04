import { type ReactNode } from 'react'

import { type DocumentSnapshot } from '@firebase/firestore/lite'

type TRenderProps = {
  children: ReactNode
}

type ID = {
  id: string
}

type DataWithID<T = DocumentSnapshot> = ID & T

export type { ID, DataWithID, TRenderProps }
