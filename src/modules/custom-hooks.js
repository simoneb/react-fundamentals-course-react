import React, { useState, useEffect } from 'react'
import useAxios from 'axios-hooks'

export const name = 'custom hooks'

export function UseAxiosSimple() {
  const [{ data }] = useAxios('https://swapi.co/api/people/1')

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export function UseAxiosComplex() {
  const [search, setSearch] = useState('Luke Skywalker')
  const [{ data }] = useAxios(`https://swapi.co/api/people/?search=${search}`)

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {((data && data.results) || []).map(result => (
          <li>{result.name}</li>
        ))}
      </ul>
    </div>
  )
}

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount(c => c + 1)
  }

  return [count, increment]
}

export function CustomHookSimple() {
  const [count, increment] = useCounter()

  return (
    <div>
      <p>Current count is {count}</p>
      <button onClick={increment}>click me</button>
    </div>
  )
}

function useStockTicker(pair = 'XBT/EUR') {
  const [data, setData] = useState()

  useEffect(() => {
    const ws = new WebSocket('wss://ws.kraken.com')

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          event: 'subscribe',
          pair: [pair],
          subscription: {
            name: 'book'
          }
        })
      )
    }

    ws.onmessage = e => {
      const data = JSON.parse(e.data)

      if (!data.event) setData(data)
    }

    return () => ws.close()
  }, [pair])

  return data
}

export function CustomHookComplex() {
  const [pair, setPair] = useState(SUPPORTED_PAIRS[0])
  const trade = useStockTicker(pair)

  return (
    <div>
      <h1>stock ticker</h1>
      <select value={pair} onChange={e => setPair(e.target.value)}>
        {SUPPORTED_PAIRS.map(pair => (
          <option key={pair} value={pair}>
            {pair}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify(trade, null, 2)}</pre>
    </div>
  )
}

const SUPPORTED_PAIRS = ['BTC/CAD', 'BTC/EUR', 'BTC/GBP', 'BTC/JPY', 'BTC/USD']
