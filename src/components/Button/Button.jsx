import React from 'react'
import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from 'react-icons/hi'

function Button({isOutline, icon, text}) {

  return (
    <div className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </div>
  )
}

export default Button
