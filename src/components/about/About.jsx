import "./about.css";
import Me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <FaAws className="about__icon" />
              <h5>Interest</h5>
              <small>Web & Cloud</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            Software Engineer with 3+ years of experience in Full-Stack Web
            Development utilizing MongoDB, Express, React, Node.js (MERN Stack),
            Next.js and NestJs. Looking forward to contributing expertise to
            innovative projects and advancing professional skills.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
