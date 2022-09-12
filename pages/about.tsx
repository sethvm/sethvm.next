import Head from '../src/components/SEO';
import aboutPageStyle from '../styles/About.module.scss';
// layout
import Section from '../src/components/Content/Section';
//import Photo from '../src/components/Content/Photo';
// typography
import Paragraph from '../src/components/Typography/Paragraph';

const About = () => (
    <>
        <Head title='About' url='https://sethvm.com/about' />
        <Section>
            <h2 className={aboutPageStyle.heading}>I push pixels, barbells, and boundaries.</h2>
            <br />
            <Paragraph>
                My interest lies in exploring how technology can be leveraged to help people live
                their best lives and put forth their best work. I'm drawn to design by its
                interdisciplinary nature — it's a field that demands constant triangulation between
                engineering, art, and business. Throughout my career, I've had the privilege of
                leading initiatives within the fintech, e-commerce, and healthcare spaces.
            </Paragraph>
            <Paragraph>
                I'm also a senior at the University of Waterloo, majoring in Systems Design
                Engineering. The final year of my undergrad studies focuses primarily on learning
                about how humans communicate, interact, and connect with one another.
            </Paragraph>
            <Paragraph>
                Outside of work and school, you'll probably find me amping up for a powerlifting
                session, running around with a camera, or flipping through an issue of National
                Geographic.
            </Paragraph>
            <Paragraph>
                Occasionally, I jump out of flying aircraft — with a parachute strapped to my back,
                of course.
            </Paragraph>
            <br />
            <h3 className={aboutPageStyle.subHeading}>Keen to collab? Let's connect!</h3>
            <br />
            <ul className={aboutPageStyle.contactPromptList}>
                <li>
                    <h4 className={aboutPageStyle.contactPrompt}>
                        Say hi on
                        <OutboundLink href='https://www.linkedin.com/in/sethvm'>
                            LinkedIn ↗&#xFE0E;
                        </OutboundLink>
                        <br />
                        <br />
                    </h4>
                </li>
                <li>
                    <h4 className={aboutPageStyle.contactPrompt}>
                        Send an
                        <OutboundLink href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                            email ↗&#xFE0E;
                        </OutboundLink>
                        <br />
                        <br />
                    </h4>
                </li>
                <li>
                    <h4 className={aboutPageStyle.contactPrompt}>
                        Skim through my
                        <OutboundLink href='/sethvm_resume.pdf'>résumé ↗&#xFE0E;</OutboundLink>
                    </h4>
                </li>
            </ul>
        </Section>
    </>
);

interface OutboundLinkProps {
    href: string;
    children: string;
}

const OutboundLink = ({ href, children }: OutboundLinkProps) => (
    <a rel='noopener noreferrer' href={href} target='_blank'>
        &nbsp;<span className='activeLink bold'>{children}</span>
    </a>
);

export default About;
