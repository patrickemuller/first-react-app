import React, { useReducer } from 'react'
import TodosContext from './Context'
import todosReducer from './reducer'

function Provider({ children }) {
  const [todo, dispatchToTodos] = useReducer(todosReducer, [])
  return (
    <TodosContext.Provider value={{ todo, dispatchToTodos }}>
      { children }
    </TodosContext.Provider>
  )
}

export default Provider
