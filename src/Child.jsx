import React, { memo } from 'react'

function Child({Learning}) {
    console.log('child')
  return (
    <h1>Child Component</h1>
  )
}

export default memo(Child);