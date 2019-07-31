import React from 'react'
import ReactDOM from 'react-dom'

export const name = 'rendering elements'

export function Render() {
  const element = <h1>Hello, world</h1>
  ReactDOM.render(element, document.getElementById('test-bed'))
  return ''
}

export function UpdatingTheRenderedElement() {
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

  return ''
}
