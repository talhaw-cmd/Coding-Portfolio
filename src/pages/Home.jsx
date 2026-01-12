import React from 'react';
import './Home.css';
import Footer from '../components/Footer';

const App = () => {
    const projects = [
  {
    title: "Weather App",
    category: "Front-end Development, APIs",
    year: "2025",
    description: "A high-performance Weather App built with React.",
    link: "https://react-weather-app-six-rho.vercel.app/"
  },
  {
    title: "Todo App",
    category: "Front-end Developement",
    year: "2025",
    description: "A Todo app using local storage.",
    link: "https://react-todo-app-mu-ten.vercel.app/"
  },
  {
    title: "Quiz App",
    category: "Front-end Developement",
    year: "2025",
    description: "A simple quiz app eith a short timer and which contain random questions.",
    link: "https://react-quiz-app-wine-two.vercel.app/"
  }
];
  const skills = [
    'React.js', 'JavaScript (ES6+)', 'Node.js', 
    'CSS Grid/Flexbox', 'Python', 'C++', 
    'Git & GitHub', 'REST APIs'
  ];
  const education = [
    { year: "2023 — Present", degree: "B.Sc. in Computer Science", school: "Institute of Science & Technology" },
    { year: "2020 — 2022", degree: "College", school: "Intermediate of Computer Science" },
  ];
  const skillLevels = [
    { name: "Frontend Development", level: "95%" },
    { name: "Backend & APIs", level: "40%" },
    { name: "UI/UX Design", level: "50%" },
    { name: "Database Management", level: "85%" },
  ];

  return (
    <div className="portfolio">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Available for Hire</span>
          <h1 className="hero-title">CREATIVE <br/> DEVELOPER</h1>
          <p className="hero-subtitle">Based in RawalPindi. Crafting digital experiences with precision and minimalist design.</p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">View Projects</a>
            <a href="/contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-label">01 / ABOUT</div>
            <div className="intro-text">
              <p>
                I believe that code is poetry. My approach to development focuses on 
                <strong> scalability</strong>, <strong>performance</strong>, and 
                <strong> accessibility</strong>. I don't just build websites; I build 
                tools that help businesses grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills">
        <div className="container">
          <div className="intro-label">02 / EXPERTISE</div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-number">0{index + 1}</span>
                <h3 className="skill-name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials">
        <div className="container">
          <div className="cred-grid">
            
            {/* EDUCATION COLUMN */}
            <div className="education-column">
              <div className="intro-label">03 / EDUCATION</div>
              <div className="education-list">
                {education.map((item, index) => (
                  <div key={index} className="edu-item">
                    <span className="edu-year">{item.year}</span>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <p className="edu-school">{item.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILL LEVELS COLUMN */}
            <div className="skill-levels-column">
              <div className="intro-label">04 / PROFICIENCY</div>
              <div className="levels-list">
                {skillLevels.map((skill, index) => (
                  <div key={index} className="level-item">
                    <div className="level-info">
                      <span className="level-name">{skill.name}</span>
                      <span className="level-percent">{skill.level}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        </section>


        {/* Latest Projects */}

        <section className="projects" id="work">
  <div className="container">
    <div className="projects-header">
      <div className="intro-label">05 / SELECTED WORKS</div>
      <h2 className="section-title">Latest Projects</h2>
    </div>
    
    <div className="projects-grid">
      {projects.map((project, i) => (
        <div key={i} className="project-card">
          <a target='blank' href={project.link}>

          <div className="project-info">
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

        <Footer/>
    </div>
  );
};

export default App;