import { setDoc } from '@firebase/firestore/lite'
import {
  type DocumentData,
  type DocumentReference,
  type FirestoreError,
  type SetOptions,
  type WithFieldValue,
} from '@firebase/firestore/lite'
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'

export function useDocUpdate<T = DocumentData>(
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
