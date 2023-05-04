/* eslint-disable react/prop-types */
import { FieldProps, useField } from 'formik'

import './TextInput.css'

type TextInputProps = {
  props: FieldProps
  label: string
}
export const TextInput = ({ label, ...props }: TextInputProps) => {
  // @ts-expect-error: todo
  const [field, meta] = useField(props)
  return (
    <>
      <div>
        {/* @ts-expect-error: todo */}
        <label htmlFor={props.id || props.name}>{label}</label>
        <div>
          <input className="text-input" {...field} {...props} />
        </div>
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </div>
    </>
  )
}
