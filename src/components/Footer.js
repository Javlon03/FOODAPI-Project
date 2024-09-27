import React from "react";
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 TheMealDB</p>
        <p>
          Proudly built in the UK <span className="flag">🇬🇧</span>
        </p>
      </div>

      <div className="footer-middle">
        <p>Socials:</p>
        <FaFacebookF className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaDiscord className="social-icon" />
      </div>

      <div className="footer-right">
        <a
          href="https://www.thecocktaildb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <span className="highlight-orange">TheCocktailDB</span>
        </a>
        <a
          href="https://www.theaudiodb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <span className="highlight-red">TheAudioDB</span>
        </a>
        <a
          href="https://www.thesportsdb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <span className="highlight-green">TheSportsDB</span>
        </a>
      </div>

      <div className="footer-navigation">
        <a href="#about" className="footer-nav-link">
          About
        </a>
        <a href="#faq" className="footer-nav-link">
          Faq
        </a>
        <a href="#contact" className="footer-nav-link">
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
