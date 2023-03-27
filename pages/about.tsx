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
                Outside of work and school, you'll probably find me{' '}
                <OutboundLink href='https://vsco.co/sthvm/gallery'>
                    running around with a camera
                </OutboundLink>
                , amping up for a powerlifting session, or falling off a climbing wall.
            </Paragraph>
            <Paragraph>
                Occasionally, I jump out of flying aircraft — with a parachute strapped to my back,
                of course.
            </Paragraph>
            <br />
            <br />
            <h3 className={aboutPageStyle.subHeading}>Keen to collab? Let's connect!</h3>
            <br />
            <Paragraph>
                Say hi on{' '}
                <OutboundLink href='https://www.linkedin.com/in/sethvm'>LinkedIn</OutboundLink>,
                toss over an{' '}
                <OutboundLink href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                    email
                </OutboundLink>
                , skim through my <OutboundLink href='/sethvm_resume.pdf'>résumé</OutboundLink>, or
                do any combination of the three.
            </Paragraph>
        </Section>
    </>
);

interface OutboundLinkProps {
    href: string;
    children: string;
}

const OutboundLink = ({ href, children }: OutboundLinkProps) => (
    <a rel='noopener noreferrer' href={href} target='_blank'>
        <span className='activeLink inBodyLink'>{children}</span>
    </a>
);

export default About;
