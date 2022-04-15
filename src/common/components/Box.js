import React from 'react'
import './Box.css'

function Box({ children, className }) {
  return <div className={`Box ${className || ''}`}>{children}</div>
}

export default Box
