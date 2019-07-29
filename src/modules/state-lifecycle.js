import React from 'react'
import ReactDOM from 'react-dom'

export const name = 'state and lifecycle'

export function PreviousTickExample() {
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
    ReactDOM.render(element, document.getElementById('test-bed'))
  }

  setInterval(tick, 1000)

  return null
}

export function ClockComponent() {
  function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('test-bed')
    )
  }

  setInterval(tick, 1000)

  return null
}

export function ClockAsClassComponent() {
  class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }

  return <Clock date={new Date()} />
}

export function ClockWithState() {
  class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        date: new Date(),
      }
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }

  return <Clock />
}

export function LifecycleMethods() {
  class Clock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        date: new Date(),
      }
    }

    componentDidMount() {
      console.info('Clock mounted')
    }

    componentWillUnmount() {
      console.info('Clock unmounting')
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }

  return <Clock />
}

export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export class AsyncStateUpdate extends React.Component {
  state = { counter1: 0, counter2: 0 }

  incrementCounterUnsafe = () =>
    this.setState({ counter1: this.state.counter1 + 1 })
  incrementCounterSafe = () =>
    this.setState(state => ({ counter2: state.counter2 + 1 }))

  handleClick = () => {
    this.incrementCounterUnsafe()
    this.incrementCounterUnsafe()
    this.incrementCounterSafe()
    this.incrementCounterSafe()
  }

  render() {
    return (
      <div>
        <p>counter1: {this.state.counter1}</p>
        <p>counter2: {this.state.counter2}</p>
        <button onClick={this.handleClick}>increment</button>
      </div>
    )
  }
}

export function StateIsLocal() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}
