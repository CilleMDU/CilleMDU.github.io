import styles from './Navbar.module.css';
import { useEffect, useRef, useState } from 'react';
import Logo from '../../img/logo.svg';
import Night from '../../img/header/night.svg';
import Contact from '../../img/header/contact.svg';
import Languages from '../../img/header/languages.svg';
import { NavLink, useLocation } from 'react-router';
import Home from '../../img/clouds/navbarClouds/inactive/home.svg';
import HomeActive from '../../img/clouds/navbarClouds/active/homeActive.svg';
import Projects from '../../img/clouds/navbarClouds/inactive/projects.svg';
import ProjectsActive from '../../img/clouds/navbarClouds/active/projectsActive.svg';
import BTS from '../../img/clouds/navbarClouds/inactive/bts.svg';
import BTSActive from '../../img/clouds/navbarClouds/active/btsActive.svg';
import About from '../../img/clouds/navbarClouds/inactive/about.svg';
import AboutActive from '../../img/clouds/navbarClouds/active/aboutActive.svg';
import ContactCloud from '../../img/clouds/navbarClouds/inactive/contactCloud.svg';
import ContactCloudActive from '../../img/clouds/navbarClouds/active/contactCloudActive.svg';

export default function Navbar() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();
    const headerRef = useRef(null);

    // header is position:fixed (out of flow), so expose its real height as a CSS
    // variable that main uses to avoid content starting underneath it
    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const updateHeight = () => {
            document.documentElement.style.setProperty('--navbar-height', `${header.offsetHeight}px`);
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);
        observer.observe(header);

        return () => observer.disconnect();
    }, []);

    const handleHomeClick = () => {
        window.location.href = '/';
    }

    const isLinkActive = (path) => {
        return location.pathname === path;
    }

    const getLinkImage = (linkName, linkPath, inactiveImg, activeImg) => {
        return hoveredLink === linkName || isLinkActive(linkPath) ? activeImg : inactiveImg;
    }

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.headerBackground}>
                <div className={styles.headerFlex}>
                <div className={styles.headerLogo}>
                    <img src={Logo} alt="CilleMDU logo" onClick={handleHomeClick}/>
                </div>
                <div className={styles.headerName}>
                    <h1>Cecilie Schmidt</h1>
                </div>
                <div className={styles.headerIcons}>
                    <div className={styles.darkMode}>
                        <img src={Night} alt="Dark mode icon" />
                    </div>
                    <div className={styles.contact}>
                        <img src={Contact} alt="Contact icon" />
                    </div>
                    <div className={styles.languages}>
                        <img src={Languages} alt="Languages icon" />
                    </div>
                </div>
                </div>
            </div>

            <div className={styles.navbar}>
                <NavLink 
                    to="/" 
                    className={styles.navLink}
                    onMouseEnter={() => setHoveredLink('home')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <img src={getLinkImage('home', '/', Home, HomeActive)} alt="Home page" className={styles.home}/>
                </NavLink>
                <NavLink 
                    to="/projects" 
                    className={styles.navLink}
                    onMouseEnter={() => setHoveredLink('projects')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <img src={getLinkImage('projects', '/projects', Projects, ProjectsActive)} alt="Projects page" className={styles.projects}/>
                </NavLink>
                <NavLink 
                    to="/bts" 
                    className={styles.navLink}
                    onMouseEnter={() => setHoveredLink('bts')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <img src={getLinkImage('bts', '/bts', BTS, BTSActive)} alt="BTS page" className={styles.bts}/>
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={styles.navLink}
                    onMouseEnter={() => setHoveredLink('about')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <img src={getLinkImage('about', '/about', About, AboutActive)} alt="About page" className={styles.about}/>
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={styles.navLink}
                    onMouseEnter={() => setHoveredLink('contact')}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <img src={getLinkImage('contact', '/contact', ContactCloud, ContactCloudActive)} alt="Contact page" className={styles.contactCloud}/>
                </NavLink>
            </div>
        </header>
    );
}