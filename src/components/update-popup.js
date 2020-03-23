import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { updateTodo } from '../services/todo-services'
import styled from 'styled-components'

const PopupInput = styled.input`
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
const CloseButton = styled.a`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
`

export default function UpdatePopup({ todo, getTodo, clearTodo }) {
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

  /*수정 버튼 누르고 닫기 버튼을 눌렀을 때 다시 안 눌리는 문제*/

  return (
    <Popup open={todo} position="right center">
      <CloseButton onClick={clearTodo}>&times;</CloseButton>
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
  )
}
