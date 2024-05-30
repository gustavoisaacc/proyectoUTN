import React from 'react'

function Button(props) {
  return (
   <button className={`px-2 py-5  ${props.className}`}>{props.name}</button>
  )
}

export default Button