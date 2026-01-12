import React from 'react';
import './About.css';
import Footer from '../components/Footer';
import myphoto from '../pages/dev5.png'
const About = () => {
  const values = [
    { title: "Clean Code", desc: "Writing maintainable, readable code that scales." },
    { title: "User Centric", desc: "Designing with the end-user's needs at the forefront." },
    { title: "Performance", desc: "Optimizing every byte for the fastest load times." },
    { title: "Lifelong Evolution", desc: "Embracing new technologies to build." },
    { title: "Future-Proofing", desc: "Writing clean code today for the growth of tomorrow." },
    { title: "Intentional Design", desc: "Less is more. Focusing only on features that truly matter." }
  ];

  const timeline = [
    { year: "2026", event: "Senior Developer at TechFlow", details: "Leading the frontend architectural shift to Next.js." },
    { year: "2024", event: "Full Stack Engineer at CreativeCo", details: "Delivered 15+ high-traffic web applications." },
    { year: "2022", event: "Freelance Developer", details: "Partnered with startups to build MVPs from scratch." }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* SECTION 1: BIG BIO */}
        <section className="about-hero">
          <div className="intro-label">01 / WHO I AM</div>
          <h1 className="about-statement">
            I AM A DEVELOPER WHO BELIEVES <span className="outline-text">DESIGN</span> IS AS IMPORTANT AS THE <span className="outline-text">LOGIC</span> BEHIND IT.
          </h1>
        </section>

        {/* SECTION 2: DETAILED STORY */}
        <section className="about-story">
          <div className="story-grid">
            <div className="story-image">
              <div className="placeholder-box">
                <span>
                  <img src={myphoto} height={500}/>
                </span>
              </div>
            </div>
            <div className="story-text">
              <p className="lead-p">
                My journey started with a curiosity for how things work on the web. 
                Over the last 3+ years, I've evolved into a developer who bridges 
                the gap between complex backend logic and pixel-perfect frontend design.
              </p>
              <p>
                I don't just "write code." I solve business problems. Whether it's 
                automating a workflow or creating a sleek interface, my goal is 
                to create digital products that feel natural and perform flawlessly.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MY PHILOSOPHY / VALUES */}
        <section className="values-section">
          <div className="intro-label">02 / CORE PHILOSOPHY</div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE JOURNEY (TIMELINE) */}
        {/* <section className="timeline-section">
          <div className="intro-label">03 / THE JOURNEY</div>
          <div className="timeline-list">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-row">
                <div className="time-year">{item.year}</div>
                <div className="time-event">
                  <h3>{item.event}</h3>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <Footer/>
      </div>
    </div>
  );
};

export default About;