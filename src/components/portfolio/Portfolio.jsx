import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ProShop',
    github: 'https://github.com/Ismail-butt/proshop',
    demo: 'https://prostore101.herokuapp.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'House Market Place',
    github: 'https://github.com/Ismail-butt/house-marketplace',
    demo: 'https://house-marketplace-alpha-six.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'ProShop',
    github: 'https://github.com/Ismail-butt/proshop',
    demo: 'https://prostore101.herokuapp.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'ProShop',
    github: 'https://github.com/Ismail-butt/proshop',
    demo: 'https://prostore101.herokuapp.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'ProShop',
    github: 'https://github.com/Ismail-butt/proshop',
    demo: 'https://prostore101.herokuapp.com/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'ProShop',
    github: 'https://github.com/Ismail-butt/proshop',
    demo: 'https://prostore101.herokuapp.com/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  rel='noreferrer'
                  target='_blank'
                >
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  rel='noreferrer'
                  target='_blank'
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
