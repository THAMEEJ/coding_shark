import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <h1>CONTACT</h1>
      <div className="contact-inner">

        <form action="">
          <div className='form-group'>
            <label htmlFor="">Full name</label>
            <input type="text" placeholder='full name'/>
          </div>
          <div className="form-group">
            <label htmlFor="">email</label>
            <input type="text" placeholder='enter email' />
          </div>
          <div className="form-group">
            <label htmlFor="">phone</label>
            <input type="text"  placeholder='enter the phone'/>
          </div>
          <div className="form-group">
            <label htmlFor="">any queris</label>
            <input type="text" placeholder='tell us abount' />
          </div>
          <div className="form-submit">
            <button type='submit'>Send </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Contact
