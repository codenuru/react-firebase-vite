import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is a required field')
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Nice try, nobody has a first name that long'),
  lastName: Yup.string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Nice try, nobody has a last name that long'),
})
