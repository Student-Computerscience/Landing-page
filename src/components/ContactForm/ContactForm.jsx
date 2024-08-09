import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from 'react-icons/hi'

function ContactForm() {
  return (
    <section className={styles.container}>

      <div className={styles.contact_form}>

        <div className={styles.top_btn}>
          
        <Button
          text="VIA SUPPORT CHAT" icon={<MdMessage/>}
        />

        <Button  text="VIA CALL" icon={<FaPhoneAlt/>}
        />

        </div>
        <Button isOutline={true}  text="VIA EMAIL FORM" icon={<HiMail/>}
        />

        <form>
          
          <div className={styles.form_control}>
          <label htmlFor="name">name</label>
          <input type="text" name='name' />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="email">email</label>
          <input type="email" name='email' />
          </div>

          <div className={styles.form_control}>
          <label htmlFor="text">text</label>
          <textarea name='text' rows={7} />
          </div>

          <div style={{display: 'flex', justifyContent:'end'}}>
            <Button
          text="SUBMIT BUTTON"
        />
        </div>


        </form>

      </div>

      <div className={styles.contact_image}>
        <img src="public/images/contact.svg" alt="contactImage" /></div>
  
      
    </section>
  )
}

export default ContactForm
