import React from 'react';
import './App.css';
import anjiImg from './assets/images/anji.jpg';
import Navbar  from './assets/Navbar';

function App() {
  return (
    <div className="app">

      {/* navbar */}
      
       {/* <nav className="navbar">
      <div className="navbar-brand">Regoju Anjaneya Chary</div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav> */}
      
    <Navbar/>


      {/* Hero Section */}

      <section className="hero" id="hero">
        <div className="container hero-content">
          <img src={anjiImg} alt="Regoju Anjaneya" />
          
          <div className="hero-text">

            <h1>
              Hi, I'm <span>Regoju Anjaneya Chary</span>
              <br />
              <small>MERN Stack Developer</small>
            </h1>
            <p>
              I design and develop full-stack web apps using MongoDB, Express.js,
              React.js, and Node.js — delivering fast, scalable, and
              user-focused solutions.
            </p>
            <p>
              With a passion for clean UI and powerful backend logic, I craft modern applications using CSS, Firebase, Git, and the full MERN stack. Let’s build something impactful together.
            </p>
            <a href="#projects" className="hero-button">🚀 View My Projects</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>💻 My Skills</h2>
        <div className="skills-grid">
          {[

         ['MongoDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
  ['Express.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'],
  ['React.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
  ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
  ['HTML5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
  ['CSS3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
  ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
  ['Firebase', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'],
  ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'],
  ['GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
  ['SQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
  ['Redux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'],
  ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg']


          ].map(([name, icon]) => (
            <div key={name} className="skill-card">
              <img src={icon} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="FoodieGo" />
            <h3>🍽️ FoodieGo – Food Delivery App</h3>
            <p>React + Firebase app for browsing restaurants, adding to cart, and placing orders.</p>
            <a href="#">Live Demo</a>
          </div>
          <div className="project-card">
            <img src="https://images.pexels.com/photos/13553844/pexels-photo-13553844.jpeg?auto=format&fit=crop&w=800&q=80" alt="TimeTales" />
            <h3>📦 TimeTales – Time Capsule App</h3>
            <p>Create multimedia time capsules that open in the future. Built with Firebase Firestore & Auth.</p>
            <a href="https://regojuanjaneyachary.github.io/Javascript_Practice/JsProject_TimeTales/landingpage.html">Live Demo</a>
          </div>
          <div className="project-card">
            <img src="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=format&fit=crop&w=800&q=80" alt="AgriView" />
            <h3>🌾 AgriView – Agriculture Responsive CSS Website</h3>
            <p>A responsive HTML & CSS website promoting smart farming, sustainability, and rural innovation.</p>
            <a href="https://regojuanjaneyachary.github.io/Projects/css_website/website.html">Live Demo</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's Connect</h2>
        <p>Looking for internships, freelance, or full-time roles. Drop a message below!</p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/regoju-anjaneya-chary/">LinkedIn</a>
          <a href="https://github.com/RegojuAnjaneyaChary">GitHub</a>
        </div>
      </section>

      {/* Footer */}
   <footer className="footer">
  © 2025 Regoju Anjaneya Chary. Built with <span>❤️</span> using React & CSS.
</footer>
    </div>
  );
}

export default App;
