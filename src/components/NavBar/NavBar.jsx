import Link from 'next/link'
import styleNavBar from './NavBar.module.css'

const NavBar = () => {

    return (
        <nav
        id='navbar'
        className={`${styleNavBar.navbar} animate__animated animate__fadeIn`}
        aria-label='navbar'>
            <Link
            href='/'
            passHref>
                <a
                className={styleNavBar.brand}
                aria-label='Seth Morenos'>
                    <span style={{ color: '#004080' }}>SETH</span>&nbsp;
                    <span style={{ color: '#1A1A1A' }}>MORENOS</span>
                </a>
            </Link>
            <Link
            href='/about'
            passHref>
                <a
                className={styleNavBar.route}
                aria-label='About'>
                    ABOUT
                </a>
            </Link>
        </nav>
    );
}

export default NavBar
