import React from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

import './styles.scss'

export const name = 'styling'

export function InlineStyles() {
  return <div style={{ border: '1px solid red' }}>hello world</div>
}

export function Classes() {
  return <div className="red-container">hello world</div>
}

export function DynamicClassesManually() {
  function Container({ isEnabled }) {
    return (
      <div className={isEnabled ? 'blue-container' : 'red-container'}>
        hello world
      </div>
    )
  }

  return <Container isEnabled />
}

export function DynamicClassesWithClassnames() {
  function Container({ isEnabled }) {
    return (
      <div
        className={classnames('some-class', 'another-class', {
          'red-container': !isEnabled,
          'blue-container': isEnabled,
        })}
      >
        hello world
      </div>
    )
  }

  return <Container isEnabled />
}

export function Scss() {
  return <div className={classnames('red-box', 'green-on-hover')} />
}

export function StyledComponents() {
  const StyledDiv = styled.div`
    border: 1px solid red;
    color: ${props => props.textColor};
  `

  return <StyledDiv textColor="blue">hello world</StyledDiv>
}
