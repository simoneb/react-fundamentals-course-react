import React from 'react'
import T from 'prop-types'

export const name = 'properties and validation'

export function DefaultProperties(props) {
  function ComponentWithDefaultProperties(props) {
    return <h1>Hello, {props.name}!</h1>
  }

  ComponentWithDefaultProperties.defaultProps = {
    name: 'John Doe',
  }

  return <ComponentWithDefaultProperties />
}

// see browser's console
export function Validation() {
  function ComponentWithValidation(props) {
    return <h1>Hello, {props.name}!</h1>
  }

  ComponentWithValidation.propTypes = {
    name: T.string.isRequired,
  }

  return <ComponentWithValidation name={1} />
}
