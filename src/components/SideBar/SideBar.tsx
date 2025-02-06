import { nanoid } from 'nanoid';
import styleSideBar from './SideBar.module.scss';
// analytics
import ReactGA4 from 'react-ga4';

// items
const sideBarItems = [
    {
        href: 'https://www.linkedin.com/in/sethvm',
        img: '/linkedin-logo.svg',
        alt: 'linkedin.com/in/sethvm',
        label: 'linkedin',
    },
    {
        href: 'mailto:sethvm64@gmail.com',
        img: '/contact-logo.svg',
        alt: 'sethvm64@gmail.com',
        label: 'email',
    },
];

// sidebar component
const SideBar = () => (
    <address id='sideBar' className={styleSideBar.container} aria-label='contact links'>
        {sideBarItems.map((sideBarItem) => (
            <a
                key={nanoid()}
                href={sideBarItem.href}
                rel='noopener noreferrer'
                target='_blank'
                onClick={() => {
                    ReactGA4.event({
                        category: 'sidebar link',
                        action: 'click',
                        label: sideBarItem.label,
                    });
                }}
            >
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
