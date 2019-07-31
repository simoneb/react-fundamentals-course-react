import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import isNumber from 'lodash/isNumber'
import 'normalize.css'

import './styles.css'

import * as jsx from './modules/jsx'
import * as renderingElements from './modules/rendering-elements'
import * as components from './modules/components'
import * as properties from './modules/properties-validation'
import * as stateLifecycle from './modules/state-lifecycle'
import * as events from './modules/events'
import * as workingWithState from './modules/working-with-state'
import * as conditionalRendering from './modules/conditional-rendering'
import * as lists from './modules/lists'
import * as forms from './modules/forms'
import * as formik from './modules/formik'
import * as composition from './modules/composition'
import * as styling from './modules/styling'
import * as http from './modules/http'
import * as routing from './modules/routing'
import * as hooks from './modules/hooks'
import * as context from './modules/context'
import * as customHooks from './modules/custom-hooks'
import * as testing from './modules/testing'

const modules = [
  jsx,
  renderingElements,
  components,
  properties,
  stateLifecycle,
  events,
  workingWithState,
  conditionalRendering,
  lists,
  forms,
  formik,
  composition,
  styling,
  http,
  routing,
  hooks,
  context,
  customHooks,
  testing
]

function firstFunctionNameOfModule(module) {
  return Object.values(module).find(v => typeof v === 'function').name
}

function getDefaultFunctionName(storedFunctionName, selectedModuleIndex) {
  return storedFunctionName && modules[selectedModuleIndex][storedFunctionName]
    ? storedFunctionName
    : firstFunctionNameOfModule(modules[selectedModuleIndex])
}

function getDefaultModuleIndex(storedModuledIndex) {
  const numericStoredModuleIndex = +storedModuledIndex
  return isNumber(numericStoredModuleIndex) &&
    storedModuledIndex < modules.length
    ? numericStoredModuleIndex
    : 0
}

function App() {
  const storedModuledIndex = sessionStorage.getItem('selectedReactModuleIndex')
  const storedFunctionName = sessionStorage.getItem('selectedReactFunctionName')

  const [selectedModuleIndex, setSelectedModule] = useState(
    getDefaultModuleIndex(storedModuledIndex)
  )

  const [selectedFunctionName, setSelectedFunction] = useState(
    getDefaultFunctionName(storedFunctionName, selectedModuleIndex)
  )

  const Component = modules[selectedModuleIndex][selectedFunctionName]

  console.debug(storedModuledIndex, storedFunctionName, modules.length)
  console.debug(selectedModuleIndex, selectedFunctionName)

  const handleSelectedModule = index => {
    sessionStorage.setItem('selectedReactModuleIndex', index)
    setSelectedModule(index)
    handleSelectedFunction(firstFunctionNameOfModule(modules[index]))
    console.clear()
  }

  const handleSelectedFunction = name => {
    sessionStorage.setItem('selectedReactFunctionName', name)
    setSelectedFunction(name)
    console.clear()
  }

  return (
    <div className="App">
      <div className="selects">
        <select
          value={selectedModuleIndex}
          onChange={e => handleSelectedModule(e.target.value)}
        >
          {modules.map((module, index) => (
            <option value={index} key={index}>
              {module.name.split(/(?=[A-Z])/).join(' ')}
            </option>
          ))}
        </select>
        <select
          value={selectedFunctionName}
          onChange={e => handleSelectedFunction(e.target.value)}
        >
          {Object.values(modules[selectedModuleIndex])
            .filter(v => typeof v === 'function')
            .map((f, index) => (
              <option value={f.name} key={index}>
                {f.name.split(/(?=[A-Z])/).join(' ')}
              </option>
            ))}
        </select>
      </div>
      <div>
        <Component />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
