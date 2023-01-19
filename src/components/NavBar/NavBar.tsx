import Link from 'next/link';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => (
    <header id='header' className={styleNavBar.navbar} aria-label='navbar'>
        <Link legacyBehavior href='/' passHref>
            <a className={styleNavBar.brand} aria-label='Seth Morenos'>
                <span className={styleNavBar.firstName}>SETH</span>&nbsp;
                <span className={styleNavBar.lastName}>MORENOS</span>
            </a>
        </Link>
        <Link legacyBehavior href='/about' passHref>
            <a className={styleNavBar.route} aria-label='About'>
                ABOUT
            </a>
        </Link>
    </header>
);

export default NavBar;
