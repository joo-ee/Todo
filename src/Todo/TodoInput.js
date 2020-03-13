import React, { useState } from 'react'

export default function TodoInput() {
  const [text, setText] = useState(
    '',
  ) /*text 값은 state의 값, setText는 state 값 바꿀 때 쓰는 함수, useState(기본값)*/

  const onChange = (e) => setText(e.target.value)

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      const enterValue = e.target.value
      if (enterValue.trim()) {
        /*enterValue.trim()이 " " => "" , "" => "" 이기 때문 ("" falsy)*/
        console.log(enterValue)
        setText('') /*setText로 초기화해야 함*/
      }
    }
  }

  return (
    <input type="text" value={text} onChange={onChange} onKeyPress={onEnter} />
  ) /*value와 onChange 꼭꼭 넣어주기(입력이 됨)*/
}
