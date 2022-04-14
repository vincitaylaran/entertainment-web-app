import React from 'react'
import './Button.css'

function Button({ text, onClick }) {
  return (
    <button
      className='Button'
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
    >
      {text}
    </button>
  )
}

export default Button
