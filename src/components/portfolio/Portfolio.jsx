import "./portfolio.css";
import IMG1 from "../../assets/proshop.png";
import IMG2 from "../../assets/houseMarketPlace.png";
import IMG3 from "../../assets/restApi.png";
import IMG4 from "../../assets/darkShades.png";
import IMG5 from "../../assets/hypeAI.jpg";

const data = [
  {
    id: 1,
    image: IMG5,
    title: "Hype AI",
    demo: "https://www.gethype.ai/",
    description:
      "AI Designed By Marketers, For Marketers. Transform your brand with a next generation suite of marketing solutions.",
  },
  {
    id: 2,
    image: IMG1,
    title: "ProShop",
    github: "https://github.com/Ismail-butt/proshop",
    description:
      "An E-commerce store for digital items like Camera, Wireless headphones, PlayStation etc with PayPal integration.",
  },
  {
    id: 3,
    image: IMG2,
    title: "House MarketPlace",
    github: "https://github.com/Ismail-butt/house-marketplace",
    demo: "https://house-marketplace-alpha-six.vercel.app/",
    description:
      "A property listing site where new places can be added for renting and sale after registration.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Dark Shades",
    github: "https://github.com/Ismail-butt/Dark-Shades",
    demo: "https://ismail-butt.github.io/Dark-Shades/",
    description:
      "Multiple static websites where I created a Landing Page, Barber Shop, A Laptop & A Travel Website.",
  },
  {
    id: 5,
    image: IMG3,
    title: "Rest Api",
    github: "https://github.com/Ismail-butt/rest-api",
    description:
      "REST API Build with Node.js, Express, TypeScript, MongoDB &amp; Zod. Testing Express REST API With Jest & Supertest.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <p>{description}</p>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className={github ? "btn" : "btn disabled"}
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className={
                    demo ? "btn btn-primary" : "btn btn-primary disabled"
                  }
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
