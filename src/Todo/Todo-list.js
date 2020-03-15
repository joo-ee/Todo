import React from 'react'
import styled from 'styled-components'

const TodoItemTemplate = styled.div`
  padding: 1rem;
  align-items: center; /*세로 가운데 정렬*/

  :hover {
    background: #f0f0f0;
  }
`
const UpdateButton = styled.button`
  border: none;
  background: none;
  color: #498eaf;

  float: right;
  margin-right: 1rem;
`
const DeleteButton = styled.button`
  border: none;
  background: none;
  color: #631f16;

  float: right;
  margin-right: 1rem; /*이렇게 조절하는 게 맞나*/
`

export default function TodoList({ todo }) {
  console.log(todo)
  return (
    <TodoItemTemplate>
      {todo} <DeleteButton> 삭제 </DeleteButton>
      <UpdateButton> 수정 </UpdateButton>
    </TodoItemTemplate>
  )
}
