import Link from 'next/link';
import { useRouter } from 'next/router';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => {
    // On Home the wide BlueBlock sits behind the nav, so the route stays light (white).
    // Elsewhere there is no navy backdrop, so the route must be dark to stay visible (#4).
    const onHomePage = useRouter().pathname === '/';
    const routeClass = onHomePage
        ? styleNavBar.route
        : `${styleNavBar.route} ${styleNavBar.routeDark}`;

    return (
        <header id='header' className={styleNavBar.navbar} aria-label='navbar'>
            <Link href='/' className={styleNavBar.brand} aria-label='Seth Morenos'>
                <span className={styleNavBar.firstName}>SETH</span>&nbsp;
                <span className={styleNavBar.lastName}>MORENOS</span>
            </Link>
            <Link href='/about' className={routeClass} aria-label='About'>
                ABOUT
            </Link>
        </header>
    );
};

export default NavBar;
