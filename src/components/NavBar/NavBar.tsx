import Link from 'next/link';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => (
    <header id='header' className={styleNavBar.navbar} aria-label='navbar'>
        <Link href='/' passHref legacyBehavior>
            <a className={styleNavBar.brand} aria-label='Seth Morenos'>
                <span className={styleNavBar.firstName}>SETH</span>&nbsp;
                <span className={styleNavBar.lastName}>MORENOS</span>
            </a>
        </Link>
        <Link href='/about' passHref legacyBehavior>
            <a className={styleNavBar.route} aria-label='About'>
                ABOUT
            </a>
        </Link>
    </header>
);

export default NavBar;
