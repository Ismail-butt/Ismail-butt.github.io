import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/mismaildev/'
        rel='noreferrer'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/Ismail-butt' rel='noreferrer' target='_blank'>
        <FaGithub />
      </a>
      <a
        href='https://twitter.com/ismailbutt2001'
        rel='noreferrer'
        target='_blank'
      >
        <FaTwitter />
      </a>
    </div>
  )
}

export default HeaderSocials
