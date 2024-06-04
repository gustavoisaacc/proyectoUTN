//import React from 'react'

function Button(props) {
  return (
    <button className={`border px-5 py-3 rounded-md ${props.className}`}>{props.name}</button>
  )
}

export default Button