import React from 'react'

export const name = 'lists'

export function MapRefresher() {
  const numbers = [1, 2, 3, 4, 5]
  const doubled = numbers.map(number => number * 2)

  console.info('doubled', doubled)

  return null
}

export function UnorderedList() {
  const numbers = [1, 2, 3, 4, 5]

  // warning!
  const listItems = numbers.map(number => <li>{number}</li>)

  return <ul>{listItems}</ul>
}

export function StableIdsAsKeys() {
  function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map(number => <li key={number}>{number}</li>)
    return <ul>{listItems}</ul>
  }

  const numbers = [1, 2, 3, 4, 5]

  return <NumberList numbers={numbers} />
}

export function IndexesAsKeys() {
  function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ))
    return <ul>{listItems}</ul>
  }

  const numbers = [1, 2, 3, 4, 5]

  return <NumberList numbers={numbers} />
}

export function EmbeddingMapInJsx() {
  function NumberList(props) {
    const numbers = props.numbers

    return (
      <ul>
        {numbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    )
  }

  const numbers = [1, 2, 3, 4, 5]

  return <NumberList numbers={numbers} />
}
