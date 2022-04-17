import React from 'react'
import './ProfilePic.css'

function ProfilePic({ className }) {
  return (
    <img
      className={`ProfilePic ${className || ''}`}
      src='./assets/image-avatar.png'
      alt='Profile pic'
    />
  )
}

export default ProfilePic
