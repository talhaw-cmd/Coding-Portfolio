import React from 'react';
import './Projects.css';
import Footer from '../components/Footer';
import dev5 from './dev5.png'
import meteorology from './meteorology.png'
import restaurant from './restaurant.png'
import quiz from './quiz.png'


const Projects = () => {
const allProjects = [
  { 
    id: "01", 
    title: "QUIZ APP", 
    cat: "Education", 
    year: "2026", 
    tech: "React, CSS3", 
    featured: true, 
    desc: "A dynamic quiz platform featuring random question generation and an integrated countdown timer for an engaging user experience.", 
    outcome: "Built with optimized state management for zero-lag question transitions.",
    live: "https://react-quiz-app-wine-two.vercel.app/",
    code: "https://github.com/talhaw-cmd/react-quiz-app",
    image: quiz
  },
  { 
    id: "02", 
    title: "FOOD RECIPE APP", 
    cat: "Lifestyle", 
    year: "2025", 
    tech: "React, Fetch API", 
    featured: true, 
    desc: "A comprehensive recipe finder that allows users to explore diverse cuisines with detailed ingredient lists and cooking instructions.", 
    outcome: "Integrated a high-speed search algorithm to filter through thousands of recipes instantly.",
    live: "https://react-food-cravings.vercel.app/",
    code: "https://github.com/talhaw-cmd/react-food-cravings",
    image: restaurant
  },
  { 
id: "03", 
    title: "WEATHER APP", 
    cat: "Utility", 
    year: "2025", 
    tech: "React, API", 
    featured: true, 
    desc: "A real-time weather forecasting application providing accurate meteorological data, dynamic background changes based on climate.", 
    outcome: "Successfully implemented complex API asynchronous calls and geolocation services.",
    live: "https://react-weather-app-six-rho.vercel.app/",
    code: "https://github.com/talhaw-cmd/react-weather-app",
    image: meteorology
  },
  { id: "04", title: "HADITH APP", cat: "Religious Tech", year: "2025", tech: "React, JSON API", featured: false },
  { id: "05", title: "QURAN APP", cat: "Religious Tech", year: "2025", tech: "React, API", featured: false },
  { id: "06", title: "IMAGE FINDER", cat: "Utility", year: "2025", tech: "React,s API", featured: false },
  { id: "07", title: "TODO APP", cat: "Productivity", year: "2025", tech: "React, Local Storage", featured: false },
  { id: "08", title: "PORTFOLIO", cat: "Personal", year: "2025", tech: "HTML, CSS, JS", featured: false },
];

  const featured = allProjects.filter(p => p.featured);
  const archive = allProjects.filter(p => !p.featured);

  return (
    <>
    <div className="projects-page">
      <div className="container">
        <header className="projects-hero">
          <div className="intro-label">01 / ARCHIVE / 2022 — 2026</div>
          <h1 className="page-title">WORKS <br/> GALLERY</h1>
        </header>

        {/* FEATURED SECTION */}
        <div className="featured-list">
          {featured.map((p, i) => (
            <div key={i} className="case-study">
              <div className="case-header">
                <span className="case-number">{p.id}</span>
                <h2 className="case-title">{p.title}</h2>
              </div>
              <div className="case-grid">
                <div className="case-visual">
                  <div className="image-placeholder"><img src={p.image} alt="" /></div>
                </div>
                <div className="case-info">
                  <div className="info-block">
                    <h4 className="info-label">Concept</h4>
                    <p>{p.desc}</p>
                  </div>
                  <div className="info-block">
                    <h4 className="info-label">Stack</h4>
                    <span className="pill">{p.tech}</span>
                  </div>
                  <div className="case-cta">
                    <a target='blank' href={p.live}><button className="btn btn-primary">Live</button></a>
                    <a target='blank' href={p.code}><button className="btn btn-outline">Code</button></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARCHIVE TABLE SECTION */}
        <section className="archive-section">
          <div className="intro-label">02 / FULL ARCHIVE</div>
          <div className="archive-table">
            <div className="table-header">
              <span>Project</span>
              <span className="hide-mobile">Category</span>
              <span className="hide-mobile">Stack</span>
              <span>Year</span>
            </div>
            {archive.map((p, i) => (
              <div key={i} className="table-row">
                <span className="row-title">{p.title}</span>
                <span className="row-cat hide-mobile">{p.cat}</span>
                <span className="row-tech hide-mobile">{p.tech}</span>
                <span className="row-year">{p.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
            <Footer/>
    </>
  );
};

export default Projects;