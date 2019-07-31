import React from 'react'

export const name = 'working with state'

export function UpdatingStateFromNestedComponents() {
  function ChildComponent({ counter, onIncrement }) {
    return (
      <div>
        <h2>Child component</h2>
        <p>Current value: {counter}</p>
        <button onClick={onIncrement}>Increment</button>
      </div>
    )
  }

  class ParentComponent extends React.Component {
    state = { counter: 0 }

    increment = () => this.setState(state => ({ counter: state.counter + 1 }))

    render() {
      const { counter } = this.state

      return (
        <div>
          <h1>Parent component</h1>
          <p>Current value: {counter}</p>
          <ChildComponent onIncrement={this.increment} counter={counter} />
        </div>
      )
    }
  }

  return <ParentComponent />
}
