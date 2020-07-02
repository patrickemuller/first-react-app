import React, { useContext, useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'

function TodoCreator() {
  const { todos, dispatchToTodos } = useContext(TodosContext)

  useEffect(() => {
      console.log(todos)
    }, [todos]
  )

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    onSubmit: (values) => {
      dispatchToTodos(todosActions.addTodo(values.title))
    }
  })

  const inputTitle = useRef(null)

  return(
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="Nova Tarefa"
        autoComplete="off"
        ref={inputTitle}
        { ... formik.getFieldProps('title') }
      />
      <button type="submit">Criar Tarefa</button>
    </form>
  )
}

export default TodoCreator
