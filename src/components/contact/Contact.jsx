import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sfevg33',
        'template_b3ob13k',
        form.current,
        'aM0DlFN4JdAfsM36h'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ismailbutt89@gmail.com</h5>
            <a
              href='mailto:ismailbutt89@gmail.com'
              rel='noreferrer'
              target='_blank'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>Linkedln</h4>
            <h5>Muhammad Ismail</h5>
            <a
              href='https://www.linkedin.com/in/mismaildev/'
              rel='noreferrer'
              target='_blank'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+923117650048</h5>
            <a
              href='https://api.whatsapp.com/send?phone=923117650048'
              rel='noreferrer'
              target='_blank'
            >
              Send a message
            </a>
          </article>
        </div>
        {/*End of Contact Section*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
