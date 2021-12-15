import Head from '../src/components/SEO'
import aboutPageStyle from '../styles/About.module.css'
// layout
import Section from '../src/components/Content/Section'
// typography
import Paragraph from '../src/components/Typography/Paragraph'

const About = () => {

    return (
        <>
        <Head
        title='About'
        url='https://sethvm.com/about' />
        <Section>
            <h2 className={aboutPageStyle.heading}>
                Thanks for dropping by! I am...
                <br />
                <br />
            </h2>
            <h3 className={aboutPageStyle.subHeading}>
                ... a student in Human-centred Design
            </h3>
            <Paragraph>
                I’m a Systems Design Engineering (SYDE) undergrad at the University of Waterloo in Ontario, Canada.
                As a product designer, I strive to improve the quality of life for others — currently exploring
                the fintech space, I’ve previously led initiatives within e-commerce and healthcare. I love
                tackling challenges associated with the delivery of large-scale services.
                <br />
                <br />
            </Paragraph>
            <h3 className={aboutPageStyle.subHeading}>
                ... an avid adrenaline junkie
            </h3>
            <Paragraph>
                Outside of moving pixels, there’s a good chance I’ll be moving barbells in the weight room, working
                on dynos at the bouldering gym, or hiking up a mountain somewhere. I occasionally enjoy jumping out of
                aircraft — with a parachute strapped to my back, of course.
                <br />
                <br />
            </Paragraph>
            <h3 className={aboutPageStyle.subHeading}>
                ... a — once professional — baker
            </h3>
            <Paragraph>
                I worked full-time as a baker prior to entering university and still spend time
                keeping my pastry craft sharp. Lately, I've been working towards perfecting my
                soufflé texture.
            </Paragraph>
        </Section>

        <Section>
            <h2 className={aboutPageStyle.heading}>
                Keen to collab? Let's chat!
                I’m looking for a Summer 2022 internship!
                <br />
                <br />
            </h2>
            <ul className={aboutPageStyle.contactPromptList}>
                <li>
                    <h3 className={aboutPageStyle.contactPrompt}>
                        Say hi on
                        <ExternalLink
                        href='https://www.linkedin.com/in/sethvm'>
                            LinkedIn ↗
                        </ExternalLink>
                        <br />
                        <br />
                    </h3>
                </li>
                <li>
                    <h3 className={aboutPageStyle.contactPrompt}>
                        Toss over an
                        <ExternalLink
                        href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                            email ↗
                        </ExternalLink>
                        <br />
                        <br />
                    </h3>
                </li>
                <li>
                    <h3 className={aboutPageStyle.contactPrompt}>
                        Check out my
                        <ExternalLink
                        href='/sethvm_resume.pdf'>
                            résumé ↗
                        </ExternalLink>
                    </h3>
                </li>
            </ul>
        </Section>

        <div className={aboutPageStyle.clearFrostedGlass}>
            <div className={aboutPageStyle.imgFlexBox}>
                <img
                className={aboutPageStyle.imgItem}
                src='/about/skydive.png'
                alt='Skydiving at Hamilton' />
                <img
                className={aboutPageStyle.imgItem}
                src='/about/gondola.png'
                alt='Hiking up Sulphur Mountain in Banff' />
            </div>
        </div>
        </>
    );
}

interface Props {
    href: string,
    children: string
}

const ExternalLink = ({
    href,
    children
}: Props) => {
    return (
        <a
        rel='noopener noreferrer'
        href={href}
        target='_blank'>
            &nbsp;<span className='activeLink bold'>{children}</span>
        </a>
    );
}

export default About
