import React from 'react'
import styled from 'styled-components'

const TodoItemTemplate = styled.div`
    padding: 1rem;
    align-items: center; /*세로 가운데 정렬*/

    :hover {
        background: #F0F0F0;
    }
`
const UpdateButton = styled.button`
    border: none;
    background: none;
    color: #498EAF;

    padding-left: 14rem; /*이렇게 조절하는 게 맞는 건가*/
    
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