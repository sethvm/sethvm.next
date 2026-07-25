import Link from 'next/link';
import { useRouter } from 'next/router';
import styleQuickLinks from './QuickLinks.module.scss';
import SubHeading from '../Typography/SubHeading';
import projects from '../../projects';

const CONTACT_HREF = 'mailto:sethvm64@gmail.com';

const QuickLinks = () => {
    const currentURL = useRouter().pathname;

    // Case-study exclusive: the end-cap renders only on pages that live in
    // projects.ts — Home, About, 404 and culled studies all skip it.
    const currentIndex = projects.findIndex((project) => project.url === currentURL);
    if (currentIndex === -1) return null;

    // The next two studies in reading order, wrapping past the end of the list.
    const visibleProjects = [1, 2].map(
        (offset) => projects[(currentIndex + offset) % projects.length]
    );

    return (
        <div className={styleQuickLinks.outer}>
            <div className={styleQuickLinks.inner}>
                <aside>
                    <p className={`${styleQuickLinks.signOff} bold`}>
                        Want to learn more? Don't hesitate to{' '}
                        <Link
                            href={CONTACT_HREF}
                            className={`${styleQuickLinks.signOffLink} activeLink bold`}
                        >
                            get in touch↗&#xFE0E;
                        </Link>
                    </p>
                </aside>
                <p className={styleQuickLinks.label}>See more of my work</p>
                <nav id='quickLinks' aria-label='More projects'>
                    <ul className={styleQuickLinks.cards}>
                        {visibleProjects.map((project) => (
                            <li key={project.url} className={styleQuickLinks.card}>
                                <Link
                                    href={project.url}
                                    className={styleQuickLinks.plateLink}
                                    tabIndex={-1}
                                    aria-hidden='true'
                                >
                                    <img
                                        className={styleQuickLinks.plate}
                                        src={project.img}
                                        alt=''
                                        loading='lazy'
                                        decoding='async'
                                    />
                                </Link>
                                <div className={styleQuickLinks.text}>
                                    <div className={styleQuickLinks.company}>
                                        <SubHeading>{project.company}</SubHeading>
                                    </div>
                                    <p className={styleQuickLinks.title}>{project.title}</p>
                                    <p className={styleQuickLinks.description}>
                                        {project.description}
                                    </p>
                                    <Link
                                        href={project.url}
                                        className={`${styleQuickLinks.link} activeLink`}
                                        aria-label={`${project.title}: Read more`}
                                    >
                                        <span className='heavy'>Read more →&#xFE0E;</span>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default QuickLinks;
