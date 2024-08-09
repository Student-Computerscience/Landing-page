import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <div>
      <nav className={`${styles.navigation} container`}>

      <div className='logo'>
        <img src="public/images/logo.png" alt="logo" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

      </nav>
    </div>
  )
}

export default Navigation
