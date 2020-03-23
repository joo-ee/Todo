import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TodoList from './todo-list'
import TodoInput from './todo-input'
import Page from 'react-page-loading'

import { getTodo } from '../services/todo-services'
import { UserContext } from '../context/user-context'
import moment from 'moment'

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

const LoadingOverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

export default function Todo() {
  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(true)

  async function FetchData() {
    setLoading(true)
    setTodo(await getTodo())
    setLoading(false)
  }

  useEffect(() => {
    FetchData()
  }, [])

  const contextValue = {
    time: moment(),
  }

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <TodoTemplate>
          <TodoTitle>Todo List</TodoTitle>
          <TodoInput getTodo={FetchData} />
          <TodoList todo={todo} getTodo={FetchData} />
        </TodoTemplate>
      </UserContext.Provider>
      {loading ? (
        <LoadingOverLay className="test">
          <Page loader={'bar'} color={'#A9A9A9'} size={4} />
        </LoadingOverLay>
      ) : null}
    </>
  )
}
