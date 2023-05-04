import { doc } from '@firebase/firestore/lite'
import { Form, Formik } from 'formik'

import { validationSchema } from '@/features/UserAdd/utils/validationSchema'
import { type User } from '@/features/UserXApp/'
import { firestore } from '@/lib/firebase'
import { useDocUpdate } from '@/lib/firebase/useDocUpdate'

import { TextInput } from './TextInput'

interface UserUpdateFormProps {
  initialFirstName?: string
  initialLastName?: string
  isEditing?: boolean
  docID: string
}
export const UserUpdateForm = (props: UserUpdateFormProps) => {
  const ref = doc(firestore, 'users', props.docID)
  const { mutate: editUser, error } = useDocUpdate(ref)
  const initialValues: User = {
    firstName: props.initialFirstName || '',
    lastName: props.initialLastName || '',
  }
  return (
    <>
      {error && (
        <div className="form-error error">
          An unexpected error occurred. Please try again later!
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
          }, 500)
          editUser(values)
          setSubmitting(false)
        }}
      >
        <Form>
          {/* @ts-expect-error: todo */}
          <TextInput label="First Name" name="firstName" type="text" placeholder="Jane" />
          {/* @ts-expect-error: todo */}
          <TextInput label="Last Name" name="lastName" type="text" placeholder="Doe" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}
