import React from 'react'
import styled from 'styled-components'
import { updateTodo, deleteTodo } from '../services/todo-services'
import Moment from 'react-moment'

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

const TimeSpan = styled.span`
  font-size: x-small;
  color: rgb(150, 150, 150);
  float: right;
  margin-right: 1rem;
`

export default function TodoItem({ getTodo, setPopupTodo, todoItem, index }) {
  const finishTodo = async (todoItem) => {
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

  function convertDateTime(date) {
    console.log(date)
    return new Date(date).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
  }

  return (
    <TodoItemTemplate key={index}>
      <NumberSpan status={todoItem.status}>{index + 1}.</NumberSpan>
      <TodoSpan
        status={todoItem.status}
        onClick={async () => await finishTodo(todoItem)}
      >
        {todoItem.todo}
      </TodoSpan>
      <DeleteButton
        onClick={() => {
          if (window.confirm(`${index + 1}번 할일을 삭제하시겠습니까?`))
            onDeleteClick(todoItem._id)
        }}
      >
        삭제
      </DeleteButton>
      <UpdateButton onClick={() => setPopupTodo(todoItem)}>수정</UpdateButton>
      <TimeSpan>
        <Moment format="HH:mm:ss">
          {convertDateTime(todoItem._updatedOn)
            ? convertDateTime(todoItem._updatedOn)
            : convertDateTime(todoItem._createdOn)}
        </Moment>
      </TimeSpan>
    </TodoItemTemplate>
  )
}
