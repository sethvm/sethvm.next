import { memo, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import styleQuickLinks from './QuickLinks.module.scss';
import projects from '../../projects';

const RenderQuickLinks = () => {
    // check current path
    const currentURL = useRouter().pathname;
    const onHomePage = currentURL === '/';
    const onAboutPage = currentURL === '/about';

    return (
        <>
            {!onHomePage && (
                <>
                    <div className={styleQuickLinks.prompt}>
                        <h3 className={styleQuickLinks.promptText}>
                            Thanks for reading!
                            <br />
                            <br />
                            Check out&nbsp;
                            {onAboutPage ? <>some</> : <>more</>}
                            &nbsp;of my work ↓
                        </h3>
                    </div>
                    <nav
                        id='quickLinks'
                        className={styleQuickLinks.outerContainer}
                        aria-label='project links'
                    >
                        <div className={styleQuickLinks.container}>
                            <MemoizedQuickLinks currentURL={currentURL} />
                        </div>
                    </nav>
                </>
            )}
        </>
    );
};

interface Props {
    currentURL: string;
}

const MemoizedQuickLinks = memo(({ currentURL }: Props) => {
    return (
        <>
            {projects.map((project) => {
                // checks if link leads to the current page
                const isCurrentPage =
                    currentURL === project.url ? styleQuickLinks.currentLink : 'heavy activeLink';

                return (
                    <Fragment key={nanoid()}>
                        {project.quickLinkLabel && (
                            <Link href={project.url} passHref>
                                <a className={`${styleQuickLinks.link} ${isCurrentPage}`}>
                                    {project.quickLinkLabel}
                                </a>
                            </Link>
                        )}
                    </Fragment>
                );
            })}
        </>
    );
});

export default RenderQuickLinks;
