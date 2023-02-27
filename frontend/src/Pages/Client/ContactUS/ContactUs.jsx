import React from 'react'
import { Helmet } from 'react-helmet'
import ContactBody from '../../../Components/Client/Contact/ContactBody/ContactBody'
import ContactEnd from '../../../Components/Client/Contact/ContactEnd/ContactEnd'
import ContactHead from '../../../Components/Client/Contact/ContactHead/ContactHead'

const ContactUs = () => {
  return (
    <div>
       <Helmet>
                <title>Contact Us</title>
            </Helmet>
      <ContactHead />
      <ContactBody />
      <ContactEnd />
    </div>
  )
}

export default ContactUs
