import React, { useRef, useState } from 'react'
import "./contact.css";
import emailjs from 'emailjs-com';
import { FaMailBulk, FaFacebookMessenger } from 'react-icons/fa';

const Contact = () => {

  const [status, setStatus] = useState('');
  const [forms, setForm] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i4btig6', 'template_4dvbpro', form.current, '9LAV9ravXnLMkV_a1')
      .then((result) => {
        if (result.text === "OK") {
          setStatus(true);
          setForm("form");
        }
      }, (error) => {
        setStatus(false);
        setForm("form");

      });
    e.target.reset();
  };
  return (

    <section id="contact">
      <h2>Contact me</h2>
      <div className="container contact">
        <div className="contact-types">
          <div className="contact-type">
            <FaMailBulk className='contact-icon' />
            <h5>angngima47@gmail.com</h5>
            <a href="mailto:angngima47@gmail.com" target="_blank">Send Message</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className={forms}>

          <input type="text" name='Name' placeholder='Enter your Name' required />
          <input type="text" name='Email' placeholder='Your Email' required />
          <textarea name='Info' rows='6' placeholder='Information You like to send' required />
          <button className='btn btn-primary sending'>Send</button>

          {status === true ? <div className="status true">The message was sent successfully.</div>
            : status === false ? <div className='status false'>Sorry! There was a problem</div>
              : ''}
        </form>
      </div>
    </section>
  )
}


export default Contact;
