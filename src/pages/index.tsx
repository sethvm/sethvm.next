import { memo } from 'react';
import Link from 'next/link';
import Head from '../components/SEO';
import homePageStyle from '../styles/Home.module.scss';
// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
// project cards
import Card from '../components/Card/Card';
import projects from '../projects';

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
                    experiences that <span className='bold'>empower everyone to do more</span>.
                </Paragraph>
                <Paragraph>Currently working on invoicing for small businesses.</Paragraph>
                <div className={homePageStyle.jumpContainer}>
                    <Link href='/#projects' className={homePageStyle.jump} aria-current='page'>
                        <img
                            className={homePageStyle.jumpBtn}
                            src='/down-arrow.svg'
                            alt='Scroll down to check out my work!'
                        />
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
                    key={project.url}
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
