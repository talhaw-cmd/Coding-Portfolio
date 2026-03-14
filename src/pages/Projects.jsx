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
    title: "Foodies APP", 
    cat: "Food", 
    year: "2026", 
    tech: "React, CSS3", 
    featured: true, 
    desc: "A dynamic clone of foodpanda app.", 
    outcome: "Built with optimized state management for zero-lag transitions.",
    live: "https://foodies-app-self-eight.vercel.app/",
    code: "https://github.com/talhaw-cmd/foodies-app",
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
    live: "https://foodies-app-self-eight.vercel.app/",
    code: "https://github.com/talhaw-cmd/foodies-app",
    image: restaurant
  },
  { 
id: "03", 
    title: "DastarKhawan", 
    cat: "Restaurant", 
    year: "2025", 
    tech: "React, API", 
    featured: true, 
    desc: "A real-time Food application providing eyecatchy website.", 
    outcome: "Successfully implemented complex API asynchronous calls.",
    live: "https://dastar-khawan-app.vercel.app/",
    code: "https://github.com/talhaw-cmd/DastarKhawan-app",
    image: meteorology
  },
  { id: "04",live: "https://react-hadith-app.vercel.app/", title: "HADITH APP", cat: "Religious Tech", year: "2025", tech: "React, JSON API", featured: false },
  { id: "05",live: "https://react-quran-app-xi.vercel.app/", title: "QURAN APP", cat: "Religious Tech", year: "2025", tech: "React, API", featured: false },
  { id: "06",live: "https://react-image-finder-nine.vercel.app/", title: "IMAGE FINDER", cat: "Utility", year: "2025", tech: "React,s API", featured: false },
  { id: "07",live: "https://react-todo-app-mu-ten.vercel.app/", title: "TODO APP", cat: "Productivity", year: "2025", tech: "React, Local Storage", featured: false },
  { id: "08",live: "https://designlab-taupe.vercel.app/", title: "PORTFOLIO", cat: "Personal", year: "2025", tech: "HTML, CSS, JS", featured: false },
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
              <a target='blank' key={i} className='a' href={p.live}>
              <div className="table-row">
                <span className="row-title">{p.title}</span>
                <span className="row-cat hide-mobile">{p.cat}</span>
                <span className="row-tech hide-mobile">{p.tech}</span>
                <span className="row-year">{p.year}</span>
              </div>
              </a>
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