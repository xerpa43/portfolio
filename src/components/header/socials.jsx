import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const socials = () => {
  return (
    <>
      <div className="header-socials">
        <a target='_blank' href="https://github.com/xerpa43"><FaGithub /></a>
        <a target='_blank' href="https://www.linkedin.com/in/xerpa43/"><FaLinkedin /></a>
      </div>
    </>
  )
}

export default socials;
