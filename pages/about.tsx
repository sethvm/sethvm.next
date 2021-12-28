import Head from '../src/components/SEO'
import aboutPageStyle from '../styles/About.module.scss'
// layout
import Section from '../src/components/Content/Section'
// typography
import Paragraph from '../src/components/Typography/Paragraph'

const About = () => (
    <>
    <Head
    title='About'
    url='https://sethvm.com/about' />
    <Section>
        <h2 className={aboutPageStyle.heading}>
            I push pixels, barbells, and boundaries — sometimes changes to git.
        </h2>
        <br />
        <Paragraph>
            As a product designer, I strive to improve the quality of life for others — previous initiatives I've
            led encompass problem spaces within e-commerce, fintech, and healthcare. I love tackling challenges
            associated with the delivery of large-scale services. I'm also a current Systems Design Engineering
            (<abbr>SYDE</abbr>) undergrad at the University of Waterloo in Ontario, Canada.
        </Paragraph>
        <Paragraph>
            My pursuit of outdoing myself is never-ending. Besides designing and studying, there's a good chance I'll
            be amping up to hit deadlifts in the weight room, working on dynos at the bouldering gym, or hiking up
            a mountain somewhere. I occasionally enjoy jumping out of aircraft — with a parachute strapped to my
            back, of course.
        </Paragraph>
    </Section>

    <Section>
        <h3 className={aboutPageStyle.subHeading}>
            Keen to collab? Let's chat!
            I'm looking for a Summer 2022 internship!
        </h3>
        <br />
        <ul className={aboutPageStyle.contactPromptList}>
            <li>
                <h4 className={aboutPageStyle.contactPrompt}>
                    Say hi on
                    <OutboundLink
                    href='https://www.linkedin.com/in/sethvm'>
                        LinkedIn →
                    </OutboundLink>
                    <br />
                    <br />
                </h4>
            </li>
            <li>
                <h4 className={aboutPageStyle.contactPrompt}>
                    Toss over an
                    <OutboundLink
                    href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                        email →
                    </OutboundLink>
                    <br />
                    <br />
                </h4>
            </li>
            <li>
                <h4 className={aboutPageStyle.contactPrompt}>
                    Skim through my
                    <OutboundLink
                    href='/sethvm_resume.pdf'>
                        résumé →
                    </OutboundLink>
                </h4>
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

interface OutboundLinkProps {
    href: string,
    children: string
}

const OutboundLink = ({
    href,
    children
}: OutboundLinkProps) => (
    <a
    rel='noopener noreferrer'
    href={href}
    target='_blank'>
        &nbsp;<span className='activeLink bold'>{children}</span>
    </a>
);

export default About
