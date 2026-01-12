import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from '../components/Footer.jsx';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS credentials yahan lagayein
    emailjs.sendForm(
      'service_mxhdb12', 
      'template_3hcmkf9', 
      form.current, 
      'EOAB2RCWbgaUQTj3n'
    )
    .then((result) => {
        alert("Message Sent! I will get back to you soon. ✅");
        setIsSending(false);
        e.target.reset(); // Form clear karne ke liye
    }, (error) => {
        alert("Ops! Something went wrong. ❌");
        setIsSending(false);
    });
  };

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
            </div>

            <div className="info-group">
              <h3 className="info-label">Social</h3>
              <ul className="social-links">
                <li><a target='_blank' rel="noreferrer" href="YOUR_LINKEDIN_URL">LinkedIn</a></li>
                <li><a target='_blank' rel="noreferrer" href="https://github.com/talhaw-cmd/">GitHub</a></li>
                <li><a target='_blank' rel="noreferrer" href="https://www.threads.com/@talhadevs">Twitter</a></li>
                <li><a target='_blank' rel="noreferrer" href="https://www.instagram.com/talhadevs">Instagram</a></li>
              </ul>
            </div>

            <div className="info-group">
              <h3 className="info-label">Location</h3>
              <p>RawalPindi, Pakistan — <br/>Available Worldwide</p>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="contact-form-container">
            {/* ref aur onSubmit add kiya gaya hai */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-row">
                <div className="input-group">
                  <label>Your Name</label>
                  {/* name attribute zaroori hai */}
                  <input type="text" name="user_name" required placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" name="user_email" required placeholder="john@example.com" />
                </div>
              </div>

              <div className="input-group">
                <label>Subject</label>
                <select name="subject">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" disabled={isSending} className="btn btn-primary submit-btn">
                {isSending ? 'Sending...' : 'Send Message'} <span className="arrow">→</span>
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