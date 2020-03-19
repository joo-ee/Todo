import React from 'react'
import styled from 'styled-components'
import { updateTodo, deleteTodo } from '../services/todo-services'

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
const NumberSpan = styled.span`
  float: left;
  margin-left: 1rem;
  color: ${(props) =>
    props.status === 'done' ? 'rgb(150, 150, 150)' : 'black'};
`

const TodoSpan = styled.span`
  cursor: pointer;
  color: ${(props) =>
    props.status === 'done' ? 'rgb(150, 150, 150)' : 'black'};
  text-decoration: ${(props) =>
    props.status === 'done' ? 'line-through' : 'none'};
`

export default function TodoItem({
  getTodo,
  setPopupTodo,
  todoItem,
  index,
}) {
  const clickTodo = async (todoItem) => {
    if (todoItem.status) {
      delete todoItem.status
    } else {
      todoItem['status'] = 'done'
    }
    if (await updateTodo(todoItem)) {
      getTodo()
    }
  }

  const onDeleteClick = async (id) => {
    if (await deleteTodo(id)) {
      getTodo()
    }
  }

  return (
    <TodoItemTemplate key={index}>
      <NumberSpan status={todoItem.status}>{index + 1}.</NumberSpan>
      <TodoSpan
        status={todoItem.status}
        onClick={async () => await clickTodo(todoItem)}
      >
        {todoItem.todo}
      </TodoSpan>
      <DeleteButton onClick={() => onDeleteClick(todoItem._id)}>
        삭제
      </DeleteButton>
      <UpdateButton onClick={() => setPopupTodo(todoItem)}>수정</UpdateButton>
    </TodoItemTemplate>
  )
}
