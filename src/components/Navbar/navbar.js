import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../resuable/button';
import './navbar.css';

function Navbar() {
    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);

    const toggleNavButton = () => setClick(!click);
    const closeMobileNav = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        RBMS <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={toggleNavButton}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileNav} >Hello Ritik!</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileNav} >LOGOUT</Link>
                        </li>
                    </ul>
                    {button ? <Button buttonStyle='btn--outline'>LOGOUT</Button> : null}
                </div>
            </nav>
        </>
    )
}

export default Navbar;