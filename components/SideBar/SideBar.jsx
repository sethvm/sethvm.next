import { v4 as uuidv4 } from 'uuid'
import styleSideBar from './SideBar.module.css'

import LinkedInLogo from './linkedin-logo.svg'
import ContactLogo from './contact-logo.svg'

// items
const sideBarItems = [
    {
        href: 'https://www.linkedin.com/in/sethvm',
        img: LinkedInLogo,
        alt: 'linkedin.com/in/sethvm'
    },
    {
        href: 'mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca',
        img: ContactLogo,
        alt: 'sethvm64@gmail.com'
    }
]

// sidebar component
const SideBar = () => {
    return (
        <address
        className={`${styleSideBar.container} animate__animated animate__fadeIn`}
        aria-label='contact links'>
            {sideBarItems.map(sideBarItem => (
                <a
                key={uuidv4()}
                href={sideBarItem.href}
                rel='noopener noreferrer'
                target='_blank'>
                    <img
                    className={styleSideBar.itemLogo}
                    src={sideBarItem.img}
                    alt={sideBarItem.alt} />
                </a>
            ))}
        </address>
    );
}

export default SideBar
