import { Form, Formik } from 'formik'

import { useUserCreate } from '@/features/UserAdd/hooks/useUserCreate'
import { validationSchema } from '@/features/UserAdd/utils/validationSchema'
import { type User } from '@/features/UserXApp/'

import { TextInput } from './TextInput'

interface UserUpdateFormProps {
  initialFirstName?: string
  initialLastName?: string
}
export const UserAddForm = (props: UserUpdateFormProps) => {
  const { mutate: addUser, error } = useUserCreate()

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
          addUser(values)
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
