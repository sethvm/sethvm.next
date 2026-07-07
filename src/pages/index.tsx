import { memo } from 'react';
import Link from 'next/link';
import Head from '../components/SEO';
import homePageStyle from '../styles/Home.module.scss';
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
import Card from '../components/Card/Card';
import projects from '../projects';

const Home = () => (
    <>
        <Head url='https://sethvm.com' />
        <section id='intro' className={homePageStyle.intro} aria-label='Introduction'>
            <div>
                <Heading type={1} className={`heavy ${homePageStyle.greeting}`}>
                    G'day,
                    <br />
                    I'm <span className={homePageStyle.greetingAccent}>Seth.</span>
                </Heading>
                <Paragraph className={homePageStyle.introBody}>
                    I design products that <span className='bold'>empower everyone to do more</span>
                    .
                </Paragraph>
                <Paragraph className={homePageStyle.introBody}>
                    Currently at EverCommerce, previously Intuit, Interac and Loblaw Digital.
                </Paragraph>
            </div>
            {/* Mobile-only jump arrow — on >=768 the hero yields height instead, so the
                "Selected work" divider peeks above the fold as the cue that work follows. */}
            <Link
                href='/#projects'
                className={homePageStyle.jumpMobile}
                aria-label='Scroll to my work'
            >
                <img src='/down-arrow.svg' />
            </Link>
        </section>
        <section id='projects' className={homePageStyle.projects} aria-labelledby='work-heading'>
            <div className={homePageStyle.divider} aria-label='See my selected work'>
                <h2 id='work-heading' className={homePageStyle.dividerLabel}>
                    Selected work
                </h2>
                <span className={homePageStyle.dividerRule} />
                <img src='/chevron.svg' alt='See my selected work' />
            </div>
            <MemoizedCards />
        </section>
    </>
);

const MemoizedCards = memo(() => {
    return (
        <>
            {projects.map((project, i) => (
                <Card
                    key={project.url}
                    heading={project.title}
                    description={project.description}
                    img={project.img}
                    link={project.cardLink}
                    url={project.url}
                    eager={i === 0}
                >
                    <SubHeading>{project.company}</SubHeading>
                </Card>
            ))}
        </>
    );
});

export default Home;
