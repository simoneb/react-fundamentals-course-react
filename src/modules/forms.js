import React from 'react'

export const name = 'forms'

export function PlainForm() {
  return (
    <form>
      <label>
        Name:
        {/* uncontrolled component */}
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export class ControlledComponents extends React.Component {
  state = { value: '' }

  handleChange = e => this.setState({ value: e.target.value })

  handleSubmit = e => {
    alert('A name was submitted: ' + this.state.value)
    e.preventDefault()
  }

  render() {
    const { value } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export class SelectForm extends React.Component {
  state = { value: 'coconut' }

  handleChange = e => this.setState({ value: e.target.value })

  handleSubmit = e => {
    alert('Your favorite flavor is: ' + this.state.value)
    e.preventDefault()
  }

  render() {
    const { value } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export class MultipleInputs extends React.Component {
  state = {
    isGoing: true,
    numberOfGuests: 2,
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    alert('You submitted: ' + JSON.stringify(this.state))
    e.preventDefault()
  }

  render() {
    const { isGoing, numberOfGuests } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    )
  }
}

export class UncontrolledComponentsAndDefaultValues extends React.Component {
  input = React.createRef()

  handleSubmit = e => {
    alert('A name was submitted: ' + this.input.current.value)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} defaultValue="John Doe" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
