import React from 'react'
import './Nav.css'
import { ReactComponent as Logo } from '../../svgs/logo.svg'
import { ReactComponent as HomeIcon } from '../../svgs/icon-nav-home.svg'
import { ReactComponent as BookmarkIcon } from '../../svgs/icon-nav-bookmark.svg'
import { ReactComponent as MoviesIcon } from '../../svgs/icon-nav-movies.svg'
import { ReactComponent as TVSeriesIcon } from '../../svgs/icon-nav-tv-series.svg'
import ProfilePic from './ProfilePic'

// TODO: create hover styles for icons.
function Nav() {
  return (
    <div className='Nav'>
      <Logo className='Nav-logo' />
      <div className='Nav-links'>
        <HomeIcon />
        <MoviesIcon />
        <TVSeriesIcon />
        <BookmarkIcon />
      </div>

      <ProfilePic />
    </div>
  )
}

export default Nav
