import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TodoList from './Todo-list'
import TodoInput from './Todo-input'
import fetch from 'isomorphic-fetch'
import { getTodo } from '../services/todo'

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

export default function Todo() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    async function FetchData() {
      setTodo(await getTodo())
    }
    FetchData()
  }, [])

  return (
    <TodoTemplate>
      <TodoTitle>Todo List</TodoTitle>
      <TodoInput afterInsert={getTodo} />
      <TodoList todo={todo} afterDelete={getTodo} />
      {/* {todo.map((todo, index) => (<TodoList key={index} index={index} todo={todo.todo}/>))} */}
    </TodoTemplate>
  )
}
