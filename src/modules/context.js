import React from 'react'

export const name = 'context'

export function ConsumingContext() {
  const currentUser = { name: 'John Doe' }

  const UserContext = React.createContext()

  function App() {
    return (
      <UserContext.Provider value={currentUser}>
        <Greeting />
      </UserContext.Provider>
    )
  }

  function Greeting() {
    return (
      <UserContext.Consumer>
        {currentUser => <h1>Hello, {currentUser.name}!</h1>}
      </UserContext.Consumer>
    )
  }

  return <App />
}

export function UpdatingContext() {
  const UserContext = React.createContext()

  class App extends React.Component {
    state = {
      currentUser: null,
    }

    login = user => {
      this.setState({ currentUser: user })
    }

    render() {
      const { currentUser } = this.state

      return (
        <UserContext.Provider value={{ login: this.login, currentUser }}>
          <Greeting />
          <LoginButton />
        </UserContext.Provider>
      )
    }
  }

  function Greeting() {
    return (
      <UserContext.Consumer>
        {({ currentUser }) =>
          currentUser && <h1>Hello, {currentUser.name}!</h1>
        }
      </UserContext.Consumer>
    )
  }

  function LoginButton() {
    return (
      <UserContext.Consumer>
        {({ login }) => (
          <button onClick={() => login({ name: 'John Doe' })}>login</button>
        )}
      </UserContext.Consumer>
    )
  }

  return <App />
}
