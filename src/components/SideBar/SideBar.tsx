import { nanoid } from 'nanoid';
import styleSideBar from './SideBar.module.scss';

// items
const sideBarItems = [
    {
        href: 'https://www.linkedin.com/in/sethvm',
        img: '/linkedin-logo.svg',
        alt: 'linkedin.com/in/sethvm',
    },
    {
        href: 'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca',
        img: '/contact-logo.svg',
        alt: 'sethvm64@gmail.com',
    },
];

// sidebar component
const SideBar = () => (
    <address id='sideBar' className={styleSideBar.container} aria-label='contact links'>
        {sideBarItems.map((sideBarItem) => (
            <a key={nanoid()} href={sideBarItem.href} rel='noopener noreferrer' target='_blank'>
                <img
                    className={styleSideBar.itemLogo}
                    src={sideBarItem.img}
                    alt={sideBarItem.alt}
                />
            </a>
        ))}
    </address>
);

export default SideBar;
