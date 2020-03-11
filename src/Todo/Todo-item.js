import React from 'react'
import styled from 'styled-components'

const ReWriteBtn = styled.button`
    border: none;
    background: none;
    color: #498EAF;
`
const DeleteWriteBtn = styled.button`
    border: none;
    background: none;
    color: #631F16;
`

export default function TodoItem() {
    return(
        <>
        <div>
        <ReWriteBtn> 수정 </ReWriteBtn><DeleteWriteBtn> 삭제 </DeleteWriteBtn>
        </div>
        </>
    )
}