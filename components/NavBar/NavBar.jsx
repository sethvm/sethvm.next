import { Link } from 'next/link'
import * as styleNavBar from './NavBar.module.css'

const NavBar = () => {

    return (
        <nav
        id='navbar'
        className={`${styleNavBar.navbar} animate__animated animate__fadeIn`}
        aria-label='navbar'>
            <Link
            className={styleNavBar.brand}
            aria-label='Seth Morenos'
            href='/'>
                <span style={{ color: '#004080' }}>SETH</span>&nbsp;
                <span style={{ color: '#1A1A1A' }}>MORENOS</span>
            </Link>
            <Link
            href='/about'
            aria-label='About'>
                <span className={styleNavBar.route}>ABOUT</span>
            </Link>
        </nav>
    );
}

export default NavBar
