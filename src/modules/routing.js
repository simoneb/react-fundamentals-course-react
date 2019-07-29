import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

export const name = 'routing'

export function BasicRouting() {
  const Home = () => 'Home'
  const About = () => 'About'
  const Users = () => 'Users'

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        {/* exact behavior! */}
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  )
}

export function NestedRouting() {
  function Header() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
    )
  }

  const Home = () => 'Home'
  const About = () => 'About'

  function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>
  }

  function Topics({ match }) {
    return (
      <div>
        <h2>Topics</h2>

        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    )
  }

  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}

export function BrowsingSwapi() {
  class Categories extends React.Component {
    state = { categories: {} }

    async componentDidMount() {
      const { data } = await axios('https://swapi.co/api/')

      this.setState({ categories: data })
    }
    render() {
      const { categories } = this.state

      if (Object.keys(categories).length === 0) {
        return <span>Loading...</span>
      }

      return (
        <>
          <h2>Categories</h2>
          <ul>
            {Object.keys(categories).map(key => (
              <li key={key}>
                <Link to={`/category/${key}`}>{key}</Link>
              </li>
            ))}
          </ul>
        </>
      )
    }
  }

  class Category extends React.Component {
    state = { items: [] }

    async fetchData(categoryName) {
      const {
        data: { results },
      } = await axios.get(`https://swapi.co/api/${categoryName}`)

      this.setState({ items: results })
    }

    componentDidMount() {
      this.fetchData(this.props.match.params.categoryName)
    }

    componentWillReceiveProps(newProps) {
      this.fetchData(newProps.match.params.categoryName)
    }

    getItemId(item) {
      const [, id] = /\/(\d+)\/$/.exec(item.url)
      return id
    }

    render() {
      const {
        match: {
          params: { categoryName },
        },
      } = this.props
      const { items } = this.state

      return (
        <>
          <h2>{categoryName}</h2>
          <ul>
            {items.map(item => {
              const id = this.getItemId(item)
              return (
                <li key={item.name || item.title}>
                  <Link to={`/item/${categoryName}/${id}`}>
                    {item.name || item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      )
    }
  }

  class Item extends React.Component {
    state = {}

    async fetchData(categoryName, itemId) {
      const { data } = await axios.get(
        `https://swapi.co/api/${categoryName}/${itemId}`
      )

      this.setState({ data })
    }

    componentDidMount() {
      const {
        match: {
          params: { categoryName, itemId },
        },
      } = this.props
      this.fetchData(categoryName, itemId)
    }

    componentWillReceiveProps(newProps) {
      const {
        match: {
          params: { categoryName, itemId },
        },
      } = newProps
      this.fetchData(categoryName, itemId)
    }

    render() {
      const { data } = this.state

      if (!data) {
        return <span>Loading...</span>
      }

      return (
        <>
          <h2>{data.name || data.title}</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )
    }
  }

  class App extends React.Component {
    render() {
      return (
        <Router>
          <Route path="/" exact component={Categories} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/item/:categoryName/:itemId" component={Item} />
        </Router>
      )
    }
  }

  return <App />
}
