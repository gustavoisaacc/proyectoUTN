//import React from 'react'

export default function Button(props) {
  return (
    <button className= {`border px-5 py-2 rounded-md ${props.className}`}>{props.nombre}</button>
  )
}
