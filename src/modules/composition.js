import React from 'react'

export const name = 'composition'

export function RenderingChildren() {
  function Container({ children }) {
    return <div className="red-container">{children}</div>
  }

  return (
    <Container>
      <h1>hello world!</h1>
    </Container>
  )
}

export function Specialization() {
  function Greeting({ greeting }) {
    return <h1>{greeting}</h1>
  }

  function HelloWorldGreeting() {
    return <Greeting greeting="hello world" />
  }

  return <HelloWorldGreeting />
}

export function RenderingMultipleChildren() {
  function Container({ left, right }) {
    return (
      <div className="red-container" style={{ display: 'flex' }}>
        <div>{left}</div>
        <div>{right}</div>
      </div>
    )
  }

  return <Container left={<h1>hello</h1>} right={<h3>world</h3>} />
}

export function RenderProps() {
  function Container({ render }) {
    const greeting = 'hello world'

    return <div className="red-container">{render(greeting)}</div>
  }

  return <Container render={greeting => <h1>{greeting}</h1>} />
}

export function ChildrenRenderProp() {
  function Container({ children }) {
    const greeting = 'hello world'

    return <div className="red-container">{children(greeting)}</div>
  }

  return <Container>{greeting => <h1>{greeting}</h1>}</Container>
}
