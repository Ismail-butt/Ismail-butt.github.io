import './about.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>

            <article className='about__card'>
              <FaAws className='about__icon' />
              <h5>Interest</h5>
              <small>Web & Cloud</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am Muhammad Ismail. A fresh graduate from FAST - NUCES. I have few
            months experience as a MERN Stack Developer and with docker.
            <br /> Want to pursue a career that will enable me to apply my
            knowledge in a competitive environment. I am eager to work in a
            challenging and stimulating workplace where there are continuous
            opportunities of learning and personal development.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
