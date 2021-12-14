import { memo } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import homePageStyle from '../styles/Home.module.css'

// components
import DownArrow from '../components/down-arrow.svg'

// typography
import Heading from '../components/Typography/Heading'
import SubHeading from '../components/Typography/SubHeading'
import Paragraph from '../components/Typography/Paragraph'

// project cards
import Card from '../components/Card/Card'
import { projects } from '../data/projectData'

// page content component
const Home = () => {

    return (
        <>
        <div
        id='intro'
        className={homePageStyle.intro}>
            <div className={`${homePageStyle.introText} animate__animated animate__fadeIn`}>
                <Heading
                type={1}
                className={`heavy ${homePageStyle.greeting}`}>
                    G'day!
                    <br />I'm Seth.
                </Heading>
                <Paragraph>
                    A <span className='bold'>product designer</span> pursuing a degree
                    in <span className='bold'>Systems Design Engineering</span> —
                    passionate about building experiences that
                    help <span className='bold'>move the world forward</span>.
                </Paragraph>
                <Paragraph>
                    Currently exploring the future of digital payments
                    at <span className='bold'>Interac</span>.
                </Paragraph>
                <Paragraph>
                    Previously designed for online grocery fulfillment
                    at <span className='bold'>Loblaw Digital</span>.
                    <br />
                    <br />
                </Paragraph>
                <div className={`${homePageStyle.jumpContainer} animate__animated animate__fadeInDown animate__delay-1s`}>
                    <Link
                    href='/#projects'>
                        <div className={homePageStyle.jump}>
                            <img
                            className={homePageStyle.jumpBtn}
                            src={DownArrow}
                            alt='Scroll down to check out my work!' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <div
        id='projects'
        className={homePageStyle.projects}>
            <MemoizedCards />
        </div>
        </>
    );
}

// render projects onto page
const MemoizedCards = memo(() => {

    return (
        <>
        {projects.map(project => (
            <Card
            key={uuidv4()}
            heading={project.title}
            description={project.description}
            img={project.img}
            alt={project.alt}
            link={project.cardLink}
            url={project.url}>
                <SubHeading>{project.company}</SubHeading>
            </Card>
        ))}
        </>
    );
})

export default Home
