import Head from '../src/components/SEO';
import Link from 'next/link';
// layout
import Section from '../src/components/Content/Section';
import IndentInner from '../src/components/Content/IndentInner';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';
// images
import Banner from '../src/components/Content/Banner';

const Intuit = () => (
    <>
        <Head
            title='CP Portal'
            description='Enhancing the versatility of online invoice checkouts for payors.'
            url='https://sethvm.com/qb-counterpart-portal'
        />
        <Section ends>
            <Heading type={2}>QuickBooks CP Portal</Heading>
            <SubHeading>Intuit</SubHeading>
            <Paragraph>
                <br />
                The Counterpart (<abbr>CP</abbr>) Portal is QuickBooks' online payment portal,
                facilitating transactions between customers and merchants. Moving over $300 million{' '}
                <abbr>USD</abbr> every day, it is a crucial component of Intuit's technology
                platform.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Teammates:</span>
                &nbsp;2 product designers, 1 content designer, 2 developers, 2 product managers, and
                1 data analyst
            </Paragraph>
            <Paragraph>
                <span className='bold'>Timeline:</span>
                &nbsp;6 weeks
            </Paragraph>
            <Paragraph>
                <span className='bold'>Status:</span>
                &nbsp;Shipped {'\u{1F6A2}'}
                <br />
                <br />
            </Paragraph>
            <IndentInner>
                <Paragraph>
                    Due to a non-disclosure agreement, I can't discuss certain aspects of this
                    initiative here at the moment. To learn more, don't hesitate to{' '}
                    <Link href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca'>
                        <a className='activeLink'>get in touch</a>
                    </Link>
                    .
                </Paragraph>
            </IndentInner>
        </Section>

        <Banner img='/intuit/intuit_banner.svg' alt='Banner depicting Intuit QuickBooks logo' />

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                I joined Intuit's Small Business and Self-Employed Group (<abbr>SBSEG</abbr>) during
                the summer of 2022, working on initiatives under the Money Design Team. Towards the
                final month of my 4-month internship, I took on a project centered around the
                reconstruction of the <abbr>CP</abbr> Portal. My responsibilities covered the entire
                design process — setting context, defining problems, outlining scope, executing
                interaction design, validating solutions, and facilitating workshops.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Working cross-functionally within a team distributed across three time zones, I
                    led an end-to-end redesign of the CP Portal's front-facing experience.
                </Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Our product roadmap saw the introduction of a plethora of payment options within the{' '}
                <abbr>CP</abbr> Portal — we wanted to avoid overwhelming users yet ensure that they
                are made aware of these new ways to conduct transactions with their merchants.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How can we surface new payment services without disrupting the CP Portal's
                    existing checkout journey?
                </Strong>
            </IndentInner>
        </Section>
    </>
);

export default Intuit;
