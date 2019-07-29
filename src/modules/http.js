import React from 'react'
import axios from 'axios'

export const name = 'http'

export class Axios extends React.Component {
  state = {
    people: [],
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const {
      data: { results },
    } = await axios.get('https://swapi.co/api/people/')

    this.setState({ people: results, loading: false })
  }

  render() {
    const { people, loading } = this.state

    if (loading) {
      return <span>loading...</span>
    }

    return (
      <ul>
        {people.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    )
  }
}

export class Fetch extends React.Component {
  state = {
    people: [],
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const response = await fetch('https://swapi.co/api/people/')

    const { results } = await response.json()

    this.setState({ people: results, loading: false })
  }

  render() {
    const { people, loading } = this.state

    if (loading) {
      return <span>loading...</span>
    }

    return (
      <ul>
        {people.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    )
  }
}
