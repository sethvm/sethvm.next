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
                As a product designer, I love enabling people to live their best lives and put forth
                their best work. Previous initiatives I've led encompass problem spaces within
                fintech, e-commerce, and healthcare.
            </Paragraph>
            <Paragraph>
                I'm also entering the final year of my Systems Design Engineering undergrad at the
                University of Waterloo in Ontario, Canada.
            </Paragraph>
            <Paragraph>
                Outside of design and studying, there's a good chance I'll be amping up for a
                powerlifting session in the weight room, swinging between holds in a climbing gym,
                or whipping up a batch of soufflé.
            </Paragraph>
            <Paragraph>
                Occasionally, I jump out of flying aircraft — with a parachute strapped to my back,
                of course.
            </Paragraph>
            <br />
            <h3 className={aboutPageStyle.subHeading}>Keen to collab? Let's chat!</h3>
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
                        Toss over an
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
