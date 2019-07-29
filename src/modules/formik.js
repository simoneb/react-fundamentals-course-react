import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export const name = 'formik'

export function SimpleFormikForm() {
  const handleSubmit = values => console.info(JSON.stringify(values))

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <Field name="name" placeholder="name" />
        <button type="submit">submit</button>
      </Form>
    </Formik>
  )
}

export function SimpleValidation() {
  const handleSubmit = values => console.info(JSON.stringify(values))

  const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'required'
    }

    return errors
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validate}
      render={({ isValid, errors }) => (
        <Form>
          <Field autoFocus name="name" placeholder="please provide a name" />
          {errors.name && <span>{errors.name}</span>}
          <button type="submit" disabled={!isValid}>
            submit
          </button>
        </Form>
      )}
    />
  )
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
})

export function ValidationSchema() {
  const handleSubmit = values => console.info(JSON.stringify(values))

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      render={({ isValid, errors }) => (
        <Form>
          <Field autoFocus name="name" placeholder="please provide a name" />
          {errors.name && <span>{errors.name}</span>}
          <button type="submit" disabled={!isValid}>
            submit
          </button>
        </Form>
      )}
    />
  )
}
