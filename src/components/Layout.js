import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/layout.scss'; 
import Logo from './Logo';

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="layout-root">
            <header className="header">
                <Logo className="header__logo" width="210" height="68" fill="#FF6060" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
      
            <main>{children}</main>

            <footer className="footer">
                <Logo className="footer__logo" width="122" height="40" fill="#FFFFFF" />
                <p className="footer__text">© 2024 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Layout;
