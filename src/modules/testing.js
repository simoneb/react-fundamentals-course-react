import React from 'react'

export const name = 'testing'

export function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = React.useState(false)
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>{' '}
      <input
        id="toggle"
        type="checkbox"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      <p>{showMessage ? children : null}</p>
    </div>
  )
}

HiddenMessage.defaultProps = {
  children: 'hello world'
}
