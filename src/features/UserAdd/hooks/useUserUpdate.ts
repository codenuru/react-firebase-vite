import {
  DocumentData,
  DocumentReference,
  FirestoreError,
  SetOptions,
  WithFieldValue,
  setDoc,
} from '@firebase/firestore'
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'

export function useUserUpdate<T = DocumentData>(
  ref: DocumentReference<T>,
  options?: SetOptions,
  useMutationOptions?: UseMutationOptions<void, FirestoreError, WithFieldValue<T>>,
): UseMutationResult<void, FirestoreError, WithFieldValue<T>> {
  return useMutation<void, FirestoreError, WithFieldValue<T>>((data) => {
    if (options) {
      return setDoc<T>(ref, data, options)
    }

    return setDoc<T>(ref, data)
  }, useMutationOptions)
}
