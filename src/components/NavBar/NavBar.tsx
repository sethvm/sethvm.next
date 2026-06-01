import Link from 'next/link';
import { useRouter } from 'next/router';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => {
    // Home (wide block) and About (right-edge stripe) both have a navy BlueBlock behind the
    // nav link, so the route stays light (white). Other pages have no navy backdrop, so the
    // route must be dark to stay visible.
    const { pathname } = useRouter();
    const hasBlueBackdrop = pathname === '/' || pathname === '/about';
    const routeClass = hasBlueBackdrop
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
