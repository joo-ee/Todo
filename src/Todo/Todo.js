import React, { useState } from 'react'
import styled from 'styled-components'
import TodoItem from './Todo-list'

const TodoTemplate = styled.div`
  text-align: center;
  width: 512px;

  background: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`

const TodoTitle = styled.div`
  text-align: center;
  color: white;
  padding: 10px;
  background: #e5bb4b;
`
const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: solid 1px rgb(226, 226, 226);
  ::placeholder {
    color: rgb(150, 150, 150);
  }
`

export default function Todo() {
  const [text, setText] = useState(
    '',
  ) /*text 값은 state의 값, setText는 state 값 바꿀 때 쓰는 함수, useState(기본값)*/

  const onChange = (e) => setText(e.target.value)

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      const enterValue = e.target.value
      if (enterValue.trim()) {
        /*enterValue.trim()이 " " => "" , "" => "" 이기 때문 ("" falsy)*/
        console.log(enterValue)
        setText('') /*setText로 초기화해야 함*/
      }
    }
  }

  return (
    <TodoTemplate>
      <TodoTitle>Todo List</TodoTitle>
      <Input
        type="text"
        placeholder="오늘은 무엇을 해야 하나요?"
        value={text}
        onChange={onChange}
        onKeyPress={onEnter}
      />
      <TodoItem />
    </TodoTemplate>
  ) /*value와 onChange 꼭꼭 넣어주기(입력이 됨)*/
}
