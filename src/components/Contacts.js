import React from 'react';

import PhoneIcon from '../icons/contacts/phone.svg';
import EmailIcon from '../icons/contacts/email.svg';
import GithubIcon from '../icons/contacts/github.svg';
import SocialmediaIcon from '../icons/contacts/socialmedia.svg';

import '../css/Contacts.css';

const Contacts = () => (
  <div>
    <h1 id="contacts-title">If You Want to Learn More</h1>
    <div id="contacts-container">
      <div className="contacts-box">
        <img className="contacts-icons" src={PhoneIcon} alt="Smart Phone" />
        <h2 className="contacts-sub-title">Let's Have a <br/> Chat.</h2>
        <a href="tel:+96176635615">
          <button className="buttons">
            Call Me
          </button>
        </a>
      </div>
      <div className="contacts-box">
        <img className="contacts-icons" src={EmailIcon} alt="Mail Envelope" />
          <h2 className="contacts-sub-title">Send Me an <br/> Email</h2>
          <a href = "mailto: jadjihadhaddad@gmail.com?subject=Hey Jad">
            <button className="buttons">
              Email Me
            </button>
          </a>
      </div>
      <div className="contacts-box">
        <img className="contacts-icons" src={GithubIcon} alt="Github Octocat" />
          <h2 className="contacts-sub-title">Check Out My <br/> Github.</h2>
          <a href="https://github.com/JadJHaddad" target="_blank" rel="noreferrer">
            <button className="buttons">
              Go to Github
            </button>
          </a>
      </div>
      <div className="contacts-box">
        <img className="contacts-icons" src={SocialmediaIcon} alt="Thumbs Up" />
          <h2 className="contacts-sub-title">Check Out My <br/> Social Media.</h2>
          <a href="https://www.instagram.com/jadjihadhaddad/" target="_blank" rel="noreferrer">
            <button className="buttons">
              Go to Instagram
            </button>
          </a>
      </div>
    </div>
  </div>
)

export default Contacts;
