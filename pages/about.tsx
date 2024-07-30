import Head from '../src/components/SEO';
import aboutPageStyle from '../styles/About.module.scss';
// layout
import Section from '../src/components/Content/Section';
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
                interdisciplinary nature—it's a field that demands careful triangulation between
                engineering, art, and business.
            </Paragraph>
            <Paragraph>
                At the moment, my endeavours revolve around helping business owners conquer their
                day-to-day challenges. Previous spaces I've explored include open banking, online
                grocery fulfillment, and healthcare record administration.
            </Paragraph>
            <Paragraph>
                On the side, you'll probably find me amping up for a powerlifting session or{' '}
                <OutboundLink href='https://sethvm.studio/'>
                    walking around with a camera↗&#xFE0E;
                </OutboundLink>
                . Occasionally, I jump out of flying aircraft—with a parachute strapped to my back,
                of course.
            </Paragraph>
            <br />
            <br />
            <h3 className={aboutPageStyle.subHeading}>Keen to collab? Let's connect!</h3>
            <br />
            <Paragraph>
                Say hi on{' '}
                <OutboundLink href='https://www.linkedin.com/in/sethvm'>
                    LinkedIn↗&#xFE0E;
                </OutboundLink>
                , toss over an{' '}
                <OutboundLink href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                    email↗&#xFE0E;
                </OutboundLink>
                , skim through my{' '}
                <OutboundLink href='/sethvm_resume.pdf'>résumé↗&#xFE0E;</OutboundLink>, or do any
                combination of the three :)
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
