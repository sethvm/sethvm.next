import Link from 'next/link';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => (
    <header id='header' className={styleNavBar.navbar} aria-label='navbar'>
        <Link href='/' className={styleNavBar.brand} aria-label='Seth Morenos'>
            <span className={styleNavBar.firstName}>SETH</span>&nbsp;
            <span className={styleNavBar.lastName}>MORENOS</span>
        </Link>
        <Link href='/about' className={styleNavBar.route} aria-label='About'>
            ABOUT
        </Link>
    </header>
);

export default NavBar;
