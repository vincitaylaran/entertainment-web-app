import React from 'react'
import './Input.css'

function Input({ placeholder, className }) {
  return (
    <input className={`Input ${className || ''}`} placeholder={placeholder} />
  )
}

export default Input
