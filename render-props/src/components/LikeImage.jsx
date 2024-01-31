import React, { useState } from 'react'

export default function LikeImage(props) {

  const count=props.count 
  const increment=props.increment
  return (
    <div>
      <button onClick={increment}>Like Image {count}</button>
    </div>
  )
}