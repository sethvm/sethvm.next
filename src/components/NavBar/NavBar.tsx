import Link from 'next/link';
import { useRouter } from 'next/router';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => {
    const { pathname } = useRouter();
    // About keeps its right-edge navy stripe behind ABOUT; Home no longer has a navy block,
    // so its route must be dark (navy) to stay visible on the cream background.
    const hasBlueBackdrop = pathname === '/about';
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
