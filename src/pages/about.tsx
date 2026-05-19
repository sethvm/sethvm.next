import Head from '../components/SEO';
import aboutPageStyle from '../styles/About.module.scss';
// layout
import Section from '../components/Content/Section';
// typography
import Paragraph from '../components/Typography/Paragraph';
import Strong from '../components/Typography/Strong';

const About = () => (
    <>
        <Head title='About' url='https://sethvm.com/about' />
        <Section>
            <h2 className={aboutPageStyle.heading}>
                I'm a designer with a background in human-centered engineering.
            </h2>
            <Paragraph>
                My interest lies in exploring how we can leverage technology to help people live
                their best lives and do their best work.
            </Paragraph>
            <Paragraph>
                I currently lead design for Invoice Simple Payments at EverCommerce, helping small
                business owners get paid faster. Previously, I designed growth-focused experiences
                that today help users discover how Invoice Simple can empower them in their
                day-to-day operations. Before that, I shaped the QuickBooks checkout journey at
                Intuit, drove the adoption of design thinking at Interac's innovation lab and
                rebuilt fulfillment operation tools at Loblaw, Canada's largest grocery retailer.
            </Paragraph>
            <Paragraph>
                On the side, you'll find me amping up for a powerlifting session or{' '}
                <OutboundLink href='https://sethvm.studio/' className='activeLink inBodyLink'>
                    running around with a camera↗&#xFE0E;
                </OutboundLink>
                . My photography work explores visual imagery incorporating themes of geometry,
                motion and scale.
            </Paragraph>
            <h3 className={aboutPageStyle.subHeading}>Keen to chat or collab? Let's connect!</h3>
            <ul className={aboutPageStyle.contactList}>
                <li>
                    <Strong>
                        Say hi on{' '}
                        <OutboundLink
                            href='https://www.linkedin.com/in/sethvm'
                            className='activeLink inBodyLink bold'
                        >
                            LinkedIn↗&#xFE0E;
                        </OutboundLink>
                    </Strong>
                </li>
                <li>
                    <Strong>
                        Send over an{' '}
                        <OutboundLink
                            href='mailto:sethvm64@gmail.com?'
                            className='activeLink inBodyLink bold'
                        >
                            email↗&#xFE0E;
                        </OutboundLink>
                    </Strong>
                </li>
                <li>
                    <Strong>
                        Skim through my{' '}
                        <OutboundLink
                            href='/sethvm_resume.pdf'
                            className='activeLink inBodyLink bold'
                        >
                            résumé↗&#xFE0E;
                        </OutboundLink>
                    </Strong>
                </li>
            </ul>
        </Section>
    </>
);

interface OutboundLinkProps {
    href: string;
    children: string;
    className: string;
}

const OutboundLink = ({ href, children, className }: OutboundLinkProps) => (
    <a rel='noopener noreferrer' href={href} target='_blank'>
        <span className={className}>{children}</span>
    </a>
);

export default About;
