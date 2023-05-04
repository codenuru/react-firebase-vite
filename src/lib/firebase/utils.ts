import { collection } from '@firebase/firestore/lite'
import {
  type CollectionReference,
  type DocumentData,
  type DocumentSnapshot,
  type QuerySnapshot,
} from '@firebase/firestore/lite'

import { type DataWithID } from '@/types/commonPropTypes'

import { firestore } from '.'

// Get doc data and merge doc.id
function getDocData<T = DocumentSnapshot, R = DataWithID<T>>(doc: DocumentSnapshot) {
  return doc.exists() === true ? ({ id: doc.id, ...doc.data() } as R) : null
}
// Get array of doc data from collection
function getCollectionData<T>(collection: QuerySnapshot) {
  return collection.docs.map((doc) => getDocData<T>(doc))
}

// This is just a helper to add the type to the db responses
function getCollection<T = DocumentData>(collectionName: string) {
  return collection(firestore, collectionName) as CollectionReference<T>
}

export { getDocData, getCollection, getCollectionData }
