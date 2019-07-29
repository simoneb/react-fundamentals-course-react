import React from 'react'

export const name = 'conditional rendering'

// sample components
function UserGreeting() {
  return <h1>Welcome back!</h1>
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return <UserGreeting />
  }

  return <GuestGreeting />
}

export function LoggedIn() {
  return <Greeting isLoggedIn />
}

export function LoggedOut() {
  return <Greeting isLoggedIn={false} />
}

// sample components
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

export class LoginControl extends React.Component {
  state = { isLoggedIn: false }

  handleLoginClick = () => this.setState({ isLoggedIn: true })

  handleLogoutClick = () => this.setState({ isLoggedIn: false })

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export function InlineIfWithLogicalOperator() {
  function Mailbox(props) {
    const unreadMessages = props.unreadMessages
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && (
          <h2>You have {unreadMessages.length} unread messages.</h2>
        )}
      </div>
    )
  }

  const messages = ['React', 'Re: React', 'Re:Re: React']

  return <Mailbox unreadMessages={messages} />
}

export class InlineIfElseWithConditionalOperator extends React.Component {
  state = { isLoggedIn: false }

  handleLoginClick = () => this.setState({ isLoggedIn: true })
  handleLogoutClick = () => this.setState({ isLoggedIn: false })

  render() {
    const isLoggedIn = this.state.isLoggedIn

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    )
  }
}

export function PreventComponentsFromRendering() {
  function WarningBanner(props) {
    if (!props.warn) {
      return null
    }

    return <div className="warning">Warning!</div>
  }

  class Page extends React.Component {
    state = { showWarning: true }

    handleToggleClick = () =>
      this.setState(({ showWarning }) => ({
        showWarning: !showWarning,
      }))

    render() {
      const { showWarning } = this.state

      return (
        <div>
          <WarningBanner warn={showWarning} />
          <button onClick={this.handleToggleClick}>
            {showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      )
    }
  }

  return <Page />
}
