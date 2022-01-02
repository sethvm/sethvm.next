import Link from 'next/link';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => (
    <header id='header' className={styleNavBar.navbar} aria-label='navbar'>
        <Link href='/' passHref>
            <a className={styleNavBar.brand} aria-label='Seth Morenos'>
                <span style={{ color: '#004080' }}>SETH</span>&nbsp;
                <span style={{ color: '#1A1A1A' }}>MORENOS</span>
            </a>
        </Link>
        <Link href='/about' passHref>
            <a className={styleNavBar.route} aria-label='About'>
                ABOUT
            </a>
        </Link>
    </header>
);

export default NavBar;
