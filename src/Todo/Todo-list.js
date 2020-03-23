import React, { useState } from 'react'

import UpdatePopup from '../components/update-popup'
import TodoItem from './todo-item'

export default function TodoList({ todo, getTodo }) {
  const [popupTodo, setPopupTodo] = useState(undefined)

  return (
    <>
      {todo.map((todoItem, index) => (
        <TodoItem
          getTodo={getTodo}
          setPopupTodo={setPopupTodo}
          todoItem={todoItem}
          index={index}
        />
      ))}
      <UpdatePopup
        todo={popupTodo}
        getTodo={() => {
          getTodo()
          setPopupTodo(undefined)
        }}
      />
    </>
  )
}