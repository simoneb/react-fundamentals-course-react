import React from 'react'

export const name = 'Jsx'

export function Element() {
  const element = <div>hello world</div>

  return element
}

export function EmbeddingExpressions() {
  const name = 'John Doe'
  const element = <h1>Hello, {name}</h1>

  return element
}

export function EmbeddingComplexEspressions() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  const user = {
    firstName: 'John',
    lastName: 'Doe'
  }

  const element = <h1>Hello, {formatName(user)}!</h1>

  return element
}

export function JsxIsAnExpressionToo() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  const user = {
    firstName: 'John',
    lastName: 'Doe'
  }

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, Stranger.</h1>
  }

  return getGreeting(user)
}

export function AttributesSimple() {
  return <input value="john doe" />
}

export function AttributesWithExpressions() {
  const name = 'john doe'

  return <input value={name} />
}

export function AttributesNaming() {
  return <div className="red-box" />
}

export function Children() {
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  )

  return element
}

export function Safety() {
  const maliciousInput =
    "<img src='https://google.com' onerror=\"alert('boom')\">"
  const element = <div>{maliciousInput}</div>

  return element
}

export function CanAlsoBeUnsafe() {
  const maliciousInput = {
    __html: "<img src='https://google.com' onerror=\"alert('boom')\">"
  }
  const element = <div dangerouslySetInnerHTML={maliciousInput} />

  return element
}
