import React from 'react'
import CV from "../../assets/resume.pdf";
const btns = () => {
  return (
      <div className="btns header">
        <a href={CV} download="Ang Ngima Resume" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>
  )
}

export default btns;