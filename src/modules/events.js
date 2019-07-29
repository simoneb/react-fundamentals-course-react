import React from 'react'

export const name = 'events'

export function OnClick() {
  function handleClick(event) {
    console.info('button clicked!')
  }

  return <button onClick={handleClick}>Click me!</button>
}

export class OnClickClassBased extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = event => console.info('button clicked!')

  render() {
    return <button onClick={this.handleClick}>Click me!</button>
  }
}

export class EventsAndStateWithBinding extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export class EventsAndStateWithClassFieldSyntax extends React.Component {
  // could also omit the constructor and initialize state inline
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export class EventsAndStateWithArrowFunction extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    return (
      <button onClick={e => this.handleClick(e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export class PreventingDefault extends React.Component {
  handleSubmit = e => e.preventDefault()

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Submit form</button>
      </form>
    )
  }
}
