import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { updateTodo } from '../services/todo-services'
import styled from 'styled-components'

const PopupInput = styled.input`
  flex: 1;
  padding: 7px;
  outline: none;
  border: none;
  border-bottom: solid 1px rgb(226, 226, 226);
`
const PopupButton = styled.button`
  padding: 10px;
  border: none;
  background: none;
  color: #498eaf;
  float: center;
`

export default function UpdatePopup({ todo, getTodo }) {
  const [inputTodo, setInputTodo] = useState('')

  useEffect(() => {
    setInputTodo(todo ? todo.todo : '')
  }, [todo])

  const updateNewTodo = async () => {
    //수정하기
    const newTodo = todo
    newTodo.todo = inputTodo

    if (await updateTodo(newTodo)) {
      getTodo()
    }
  }

  return (
    <>
      <Popup open={todo} position="right center">
        <div>
          <PopupInput
            value={inputTodo}
            onChange={(e) => setInputTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                updateNewTodo()
              }
            }}
          />
        </div>
        <div>
          <PopupButton onClick={updateNewTodo}>완료</PopupButton>
        </div>
      </Popup>
    </>
  )
}
