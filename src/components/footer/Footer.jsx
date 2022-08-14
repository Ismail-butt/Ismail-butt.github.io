import './footer.css'
import { FiLinkedin } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='# ' className='footer__logo'>
        IS
      </a>

      <ul className='permalinks'>
        <li>
          <a href='# '>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/mismaildev/'
          rel='noreferrer'
          target='_blank'
        >
          <FiLinkedin />
        </a>
        <a
          href='https://www.instagram.com/ismailbutt_/'
          rel='noreferrer'
          target='_blank'
        >
          <FiInstagram />
        </a>
        <a
          href='https://twitter.com/ismailbutt2001'
          rel='noreferrer'
          target='_blank'
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Jangos. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
