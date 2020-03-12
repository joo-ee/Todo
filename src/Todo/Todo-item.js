import React from 'react'
import styled from 'styled-components'

const TodoItemTemplate = styled.div`
    padding: 10px;
    float:left;
`
const UpdateButton = styled.button`
    border: none;
    background: none;
    color: #498EAF;
`
const DeleteButton = styled.button`
    border: none;
    background: none;
    color: #631F16;
`

export default function TodoItem() {
    return(
        <TodoItemTemplate>
        바보<UpdateButton> 수정 </UpdateButton><DeleteButton> 삭제 </DeleteButton>
        </TodoItemTemplate>
    )
}