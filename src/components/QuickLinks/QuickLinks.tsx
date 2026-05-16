import { memo, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
                        <h3 className={styleQuickLinks.promptText}>Thanks for reading!</h3>
                        <p className={`${styleQuickLinks.promptText} ${styleQuickLinks.promptSubtext} heavy`}>
                            Check out&nbsp;
                            {onAboutPage ? <>some</> : <>more</>}
                            &nbsp;of my work ↓
                        </p>
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
                    <Fragment key={project.url}>
                        {project.quickLinkLabel && (
                            <Link
                                href={project.url}
                                className={`${styleQuickLinks.link} ${isCurrentPage}`}
                            >
                                {project.quickLinkLabel}
                            </Link>
                        )}
                    </Fragment>
                );
            })}
        </>
    );
});

export default RenderQuickLinks;
