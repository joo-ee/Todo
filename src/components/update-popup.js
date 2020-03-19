import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { updateTodo, getTodo } from '../services/todo'

export default function UpdatePopup({ todo, setTodo }) {
  const [inputTodo, setInputTodo] = useState('')

  useEffect(() => {
    setInputTodo(todo ? todo.todo : '')
  }, [todo])

  const updateNewTodo = async () => {
    //수정하기
    const newTodo = todo
    newTodo.todo = inputTodo

    if (await updateTodo(newTodo)) {
      setTodo()
    }
  }

  return (
    <>
      <Popup open={todo} position="right center">
        <div>
          <input
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                updateNewTodo()
              }
            }}
          />
          <button onClick={updateNewTodo}>수정하기</button>
        </div>
      </Popup>
    </>
  )
}
