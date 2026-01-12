import React from 'react';
import './Contact.css';
import Footer from '../components/Footer.jsx'

const Contact = () => {
  return (
    <>
    <div className="contact-page">
      <div className="container">
        <header className="contact-hero">
          <div className="intro-label">06 / CONTACT</div>
          <h1 className="page-title">LET'S START <br/> A <span className="outline-text">PROJECT</span></h1>
        </header>

        <div className="contact-grid">
          {/* LEFT SIDE: INFO */}
          <div className="contact-info">
            <div className="info-group">
              <h3 className="info-label">Contact Details</h3>
              <p>123mtalha789@gmail.com</p>
              {/* <p>+1 (555) 000-1234</p> */}
            </div>

            <div className="info-group">
              <h3 className="info-label">Social</h3>
              <ul className="social-links">
                <li><a target='blank' href="">LinkedIn</a></li>
                <li><a target='blank' href="https://github.com/talhaw-cmd/">GitHub</a></li>
                <li><a target='blank' href="https://www.threads.com/@talhadevs">Twitter</a></li>
                <li><a target='blank' href="https://www.instagram.com/talhadevs">Instagram</a></li>
              </ul>
            </div>

            <div className="info-group">
              <h3 className="info-label">Location</h3>
              <p>RawalPindi, Pakistan — <br/>Available Worldwide</p>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="input-row">
                <div className="input-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="input-group">
                <label>Subject</label>
                <select>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;