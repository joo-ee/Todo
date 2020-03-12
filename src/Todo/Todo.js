import React from 'react'
import styled from 'styled-components'
import TodoItem from './Todo-item';


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
  `;

const TodoTitle = styled.div`
    text-align: center;
    color: white;
    padding: 10px;
    background: #E5BB4B;
`

export default function Todo() {

    return(
            <TodoTemplate>
            <TodoTitle>Todo List</TodoTitle>
                <TodoItem/>
            </TodoTemplate>
    )
}