import { memo } from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import Head from '../src/components/SEO';
import homePageStyle from '../styles/Home.module.scss';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
// project cards
import Card from '../src/components/Card/Card';
import projects from '../src/projects';

// page content component
const Home = () => (
    <>
        <Head url='https://sethvm.com' />
        <div id='intro' className={homePageStyle.intro}>
            <div className={homePageStyle.introText}>
                <Heading type={1} className={`heavy ${homePageStyle.greeting}`}>
                    G'day,
                    <br />
                    I'm Seth.
                </Heading>
                <Paragraph>
                    A <span className='bold'>product designer</span> passionate about building
                    experiences that <span className='bold'>move the world forward</span>.
                </Paragraph>
                <Paragraph>
                    Currently working on invoicing for small businesses.
                    <br />
                </Paragraph>
                <div className={homePageStyle.jumpContainer}>
                    <Link href='/#projects' passHref legacyBehavior>
                        <a className={homePageStyle.jump} aria-current='page'>
                            <img
                                className={homePageStyle.jumpBtn}
                                src='/down-arrow.svg'
                                alt='Scroll down to check out my work!'
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <div id='projects' className={homePageStyle.projects}>
            <MemoizedCards />
        </div>
    </>
);

// render projects onto page
const MemoizedCards = memo(() => {
    return (
        <>
            {projects.map((project) => (
                <Card
                    key={nanoid()}
                    heading={project.title}
                    description={project.description}
                    img={project.img}
                    alt={project.alt}
                    link={project.cardLink}
                    url={project.url}
                >
                    <SubHeading>{project.company}</SubHeading>
                </Card>
            ))}
        </>
    );
});

export default Home;
