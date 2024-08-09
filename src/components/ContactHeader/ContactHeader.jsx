import React from 'react'
import styles from './ContactHeader.module.css'

function ContactHeader() {
  return (
    <div className={` container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero! Quasi enim reprehenderit, voluptates eum dolorum voluptatem ex culpa expedita quod veritatis labore praesentium.</p>
    </div>
  )
}

export default ContactHeader
