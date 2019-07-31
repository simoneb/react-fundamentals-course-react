import React from 'react'
import T from 'prop-types'

export const name = 'properties and validation'

export function DefaultProperties(props) {
  class ComponentWithDefaultProperties extends React.Component {
    static defaultProps = {
      name: 'John Doe'
    }

    render() {
      return <h1>Hello, {this.props.name}!</h1>
    }
  }

  return <ComponentWithDefaultProperties name="Simone Busoli" />
}

// see browser's console
export function Validation() {
  function ComponentWithValidation(props) {
    return <h1>Hello, {props.name}!</h1>
  }

  ComponentWithValidation.propTypes = {
    name: T.string.isRequired
  }

  return <ComponentWithValidation name={1} />
}
