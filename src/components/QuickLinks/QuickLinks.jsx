import { 
    memo,
    Fragment
} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import styleQuickLinks from './QuickLinks.module.css'
import { projects } from '../../projects'

const RenderQuickLinks = () => {

    // check current path
    const currentURL = (useRouter().pathname);
    const onHomePage = (currentURL === '/');
    const onAboutPage = (currentURL === '/about');

    return (
        <>
        {!onHomePage &&
            <>
            <div className={styleQuickLinks.prompt}>
                <h3 className={styleQuickLinks.promptText}>
                    Cheers for reading — or scrolling — this far!
                    <br />
                    <br />Check out&nbsp;
                    {!onAboutPage &&
                        <>more</>
                    }
                    {onAboutPage &&
                        <>some</>
                    }
                    &nbsp;of my work ↓
                </h3>
            </div>
            <nav
            id='quickLinks'
            className={styleQuickLinks.outerContainer}
            aria-label='project links'>
                <div className={styleQuickLinks.container}>
                    <MemoizedQuickLinks currentURL={currentURL}/>
                </div>
            </nav>
            </>
        }
        </>
    );
}

const MemoizedQuickLinks = memo(({ currentURL }) => {

    return (
        <>
        {projects.map(project => {

            // checks if link leads to the current page
            // styles accordingly
            const isCurrentPage = (currentURL === project.url)
            ? styleQuickLinks.currentLink
            : 'heavy activeLink';

            return (
                <Fragment key={uuidv4()}>
                    {project.quickLinkLabel &&
                        <Link
                        href={project.url}
                        passHref>
                            <a className={`${styleQuickLinks.link} ${isCurrentPage}`}>
                                {project.quickLinkLabel}
                            </a>
                        </Link>
                    }
                </Fragment>
            );
        })}
        </>
    );
})

export default RenderQuickLinks
