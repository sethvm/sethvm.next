import Head from '../components/SEO';
import aboutPageStyle from '../styles/About.module.scss';
import Section from '../components/Content/Section';
import Paragraph from '../components/Typography/Paragraph';

const About = () => (
    <>
        <Head title='About' url='https://sethvm.com/about' />
        <div className={aboutPageStyle.offsetColumn}>
            <Section>
                <h2 className={aboutPageStyle.heading}>
                    I'm Seth, a product designer with a background in human-centred engineering.
                </h2>
                <Paragraph>
                    My interest lies in exploring how we can use technology to help people live
                    their best lives and do their best work. From fine-tuning icons to establishing
                    new workflows, I thrive on creating simplicity out of ambiguity.
                </Paragraph>
                <Paragraph>
                    I currently lead design efforts for Invoice Simple at EverCommerce, helping over
                    half a million business owners overcome their day-to-day challenges. I
                    collaborate closely with cross-functional partners in establishing direction,
                    defining scope and delivering solutions while owning the outcomes.
                </Paragraph>
                <Paragraph>
                    Outside design, I enjoy poke bowls, open world games and{' '}
                    <OutboundLink href='https://sethvm.studio/' className='activeLink inBodyLink'>
                        exploring with my cameras↗&#xFE0E;
                    </OutboundLink>
                </Paragraph>
                <h3 className={aboutPageStyle.subHeading}>Get in touch</h3>
                <ul className={aboutPageStyle.contactList}>
                    <li>
                        <Paragraph>
                            Email •{' '}
                            <OutboundLink
                                href='mailto:sethvm64@gmail.com?'
                                className='activeLink inBodyLink'
                            >
                                sethvm64@gmail.com↗&#xFE0E;
                            </OutboundLink>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            LinkedIn •{' '}
                            <OutboundLink
                                href='https://www.linkedin.com/in/sethvm'
                                className='activeLink inBodyLink'
                            >
                                sethvm↗&#xFE0E;
                            </OutboundLink>
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            <OutboundLink
                                href='/sethvm_resume.pdf'
                                className='activeLink inBodyLink'
                            >
                                Résumé↗&#xFE0E;
                            </OutboundLink>
                        </Paragraph>
                    </li>
                </ul>
            </Section>
        </div>
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
