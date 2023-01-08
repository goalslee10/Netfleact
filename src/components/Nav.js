import React, { useState, useEffect} from 'react'
import './Nav.css' // ./ : 현재경로

const Nav = () => {
  const [ show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll')
    }
  }, []); // , []  안쓰면 무한루프를 돔. (의존성)

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img className='nav__logo' src = '/images/netflix-logo.png' alt = 'Netflix Logo' />

        <img className='nav__avatar' src = '/images/netflix-profile.jpg' alt='Netflix profile' />
    </div>
  )
}

export default Nav