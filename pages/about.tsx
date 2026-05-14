import Head from '../src/components/SEO';
import Link from 'next/link';
import aboutPageStyle from '../styles/About.module.scss';
// layout
import Section from '../src/components/Content/Section';
// typography
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';

const About = () => (
    <>
        <Head title='About' url='https://sethvm.com/about' />
        <Section>
            <h2 className={aboutPageStyle.heading}>I push pixels, barbells, and boundaries.</h2>
            <br />
            <Paragraph>
                As a designer with a background in human-centred engineering, my interest lies in
                exploring how we can leverage technology to help people live their best lives and
                put forth their best work. I'm drawn to design by its interdisciplinary nature—it's
                a field that demands careful triangulation between engineering, art and business.
            </Paragraph>
            <Paragraph>
                My current endeavours revolve around empowering small business owners in their
                day-to-day operations. Previously, I worked on the QuickBooks payment portal at
                Intuit, drove the adoption of design thinking at Interac's innovation lab and
                rebuilt a fulfillment validation tool at Loblaw, Canada's largest grocery retailer.
            </Paragraph>
            <Paragraph>
                On the side, you'll probably find me amping up for a powerlifting session or{' '}
                <OutboundLink href='https://sethvm.studio/'>
                    running around with a camera↗&#xFE0E;
                </OutboundLink>
                . My photography work explores visual imagery incorporating themes of geometry,
                motion and scale.
            </Paragraph>
            <br />
            <h3 className={aboutPageStyle.subHeading}>Keen to chat or collab? Let's connect!</h3>
            <br />
            <Strong>
                Say hi on{' '}
                <OutboundLink href='https://www.linkedin.com/in/sethvm'>
                    LinkedIn↗&#xFE0E;
                </OutboundLink>
            </Strong>
            <br />
            <br />
            <Strong>
                Send over an{' '}
                <OutboundLink href='mailto:sethvm64@gmail.com?'>email↗&#xFE0E;</OutboundLink>
            </Strong>
            <br />
            <br />
            <Strong>
                Skim through my{' '}
                <OutboundLink href='/sethvm_resume.pdf'>résumé↗&#xFE0E;</OutboundLink>
            </Strong>
        </Section>
    </>
);

interface OutboundLinkProps {
    href: string;
    children: string;
}

const OutboundLink = ({ href, children }: OutboundLinkProps) => (
    <a rel='noopener noreferrer' href={href} target='_blank'>
        <span className='activeLink inBodyLink bold'>{children}</span>
    </a>
);

export default About;
