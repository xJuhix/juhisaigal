import React from 'react';
import {
  FaLinkedIn,
  FaGitHub,
  FaEnvelope,
} from 'react-icons/fa';
import logo from '../images/logo.svg';

function Footer() {
  return (
    <>
      <footer className="footer">
        <img
            src={logo}
            className="d-inline-block align-top nav__brand"
            alt="WittigNotes logo"
        />
        <div className="footer__container">
          <div className="footer__text">
            <p>&copy; 2022 Juhi Saigl</p>
          </div>
          <div className="footer__links">
            <a
              href="https://www.linkedin.com/in/juhisaigal/"
              aria-label=" Juhi Saigal LinkedIn Profile"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaLinkedIn />
              </span>
            </a>
            <a
              href="https://github.com/xJuhix"
              aria-label="Juhi Saigal Github Profile"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaGitHub />
              </span>
            </a>
            <a
              href="mailto:saigal.juhi@gmail.com"
              aria-label="Juhi Saigal Email"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaEnvelope/>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;