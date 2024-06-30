import React from 'react';
import './Popup.css';
import  g from'../g.svg'


const Popup = ({ show, onClose }) => {
  if (!show) return null;

  return (

   <div className="popup-overlay">
        <div className="popup-content">
            <h1 className="name">Naved Khan</h1>
            <span className="close" onClick={onClose}>&times;</span>
            <div className="profile-image">

            </div>
            <span className="designation">Front-End Web Developer</span>
            <div className="foot-grid">
            <p className="bio">Restless web developer, passionate about coding, technology, and innovation. 
                Always eager to dive into new projects and create groundbreaking solutions. <br/>Let's collaborate and bring crazy ideas to life!</p>
            <div className="links">
                <a href="https://vcard.link/card/D3IK">Save Contact &#x2197;</a>
                <a href="https://linkedin.com/in/navedkabirkhan">LinkedIn &#x2197;</a>
                <a href="https://x.com/hi_navedkhan">Twitter &#x2197;</a>
            </div>
        </div>
        <div className="shapes">
            <img src={g} alt="" />
        </div>
        </div>
    </div>

  );
};

export default Popup;
