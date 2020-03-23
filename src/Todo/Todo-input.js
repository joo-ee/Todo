import React, { useState } from 'react'
import styled from 'styled-components'
import { saveTodo } from '../services/todo-services'

const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: solid 1px rgb(226, 226, 226);
  ::placeholder {
    color: rgb(150, 150, 150);
  }
`

export default function TodoInput({ afterInsert }) {
  const [text, setText] = useState(
    '',
  ) /*text 값은 state의 값, setText는 state 값 바꿀 때 쓰는 함수, useState(기본값)*/

  const onChange = (e) => setText(e.target.value)

  const onEnter = async (e) => {
    if (e.key === 'Enter') {
      const enterValue = e.target.value
      if (enterValue.trim()) {
        /*enterValue.trim()이 " " => "" , "" => "" 이기 때문 ("" falsy)*/
        /*저장을 한다!*/
        // console.log(enterValue)
        const result = await saveTodo(enterValue)
        if (result) {
          await afterInsert()
          /*afterInsert() 질문하기*/

          setText('') /*setText로 초기화해야 함*/
        }
      }
    }
  }

  return (
    <Input
      type="text"
      placeholder="오늘은 무엇을 해야 하나요?"
      value={text}
      onChange={onChange}
      onKeyPress={onEnter}
    />
  ) /*value와 onChange 꼭꼭 넣어주기(입력이 됨)*/
}
