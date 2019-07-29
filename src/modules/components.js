import React from 'react'

export const name = 'components'

export function ComponentsAsFunctions() {
  const Welcome = props => <h1>hello, {props.name}</h1>
}

export function FunctionComponent() {
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
  }

  return <Welcome name="John Doe" />
}

export function ClassComponent() {
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }
  }

  return <Welcome name="John Doe" />
}

export function Composition() {
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
  }

  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}

export function ExtractingComponents() {
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">{props.author.name}</div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
    )
  }

  // extracting avatar
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    )
  }

  // extracting user info
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    )
  }

  function FinalComment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date}</div>
      </div>
    )
  }

  return (
    <FinalComment
      author={{
        avatarUrl:
          'http://files.softicons.com/download/toolbar-icons/24x24-free-button-icons-by-aha-soft/ico/user-admin.ico',
        name: 'John Doe',
      }}
      text="Some comment text"
      date={new Date().toLocaleDateString()}
    />
  )
}
