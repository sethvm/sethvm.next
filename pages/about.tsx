import Head from '../src/components/SEO';
import aboutPageStyle from '../styles/About.module.scss';
// analytics
import ReactGA4 from 'react-ga4';
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
                At the moment, my endeavours revolve around supporting small businesses in
                overcoming their day-to-day challenges. Previous spaces I've explored include open
                banking, online grocery fulfillment, and healthcare record administration.
            </Paragraph>
            <Paragraph>
                I'm also finishing up my bachelor's degree in Systems Design Engineering at the
                University of Waterloo. My studies focused on the application of human-centred
                design on the interconnections between computer, socio-economic, and physical
                systems.
            </Paragraph>
            <Paragraph>
                On the side, you'll probably find me amping up for a powerlifting session,{' '}
                <OutboundLink href='https://vsco.co/sthvm/gallery' label='vsco'>
                    running around with a camera↗&#xFE0E;
                </OutboundLink>
                , or falling off a climbing wall. Occasionally, I jump out of flying aircraft—with a
                parachute strapped to my back, of course.
            </Paragraph>
            <br />
            <br />
            <h3 className={aboutPageStyle.subHeading}>Keen to collab? Let's connect!</h3>
            <br />
            <Paragraph>
                Say hi on{' '}
                <OutboundLink href='https://www.linkedin.com/in/sethvm' label='linkedin'>
                    LinkedIn↗&#xFE0E;
                </OutboundLink>
                , toss over an{' '}
                <OutboundLink
                    href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'
                    label='email'
                >
                    email↗&#xFE0E;
                </OutboundLink>
                , skim through my{' '}
                <OutboundLink href='/sethvm_resume.pdf' label='résumé'>
                    résumé↗&#xFE0E;
                </OutboundLink>
                , or do any combination of the three :)
            </Paragraph>
        </Section>
    </>
);

interface OutboundLinkProps {
    href: string;
    label?: string;
    children: string;
}

const OutboundLink = ({ href, label, children }: OutboundLinkProps) => (
    <a
        rel='noopener noreferrer'
        href={href}
        target='_blank'
        onClick={() => {
            ReactGA4.event({
                category: 'about page link',
                action: 'click',
                label: label,
            });
        }}
    >
        <span className='activeLink inBodyLink'>{children}</span>
    </a>
);

export default About;
