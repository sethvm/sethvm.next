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
            title='QuickBooks Payment Portal'
            description='Reconstructing online invoice checkouts for payors.'
            url='https://sethvm.com/qb-payment-portal'
        />
        <Section ends>
            <Heading type={2}>QuickBooks Payment Portal</Heading>
            <SubHeading>Intuit</SubHeading>
            <Paragraph>
                <br />
                QuickBooks' online payment portal facilitates transactions between customers and
                merchants. Moving over $300 million USD every day, it is a crucial component of
                Intuit's technology platform.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Teammates:</span>
                &nbsp;2 product designers, 1 content designer, 3 software engineers, 2 product
                managers, and 1 data analyst
            </Paragraph>
            <Paragraph>
                <span className='bold'>Timeline:</span>
                &nbsp;4 weeks
            </Paragraph>
            <Paragraph>
                <span className='bold'>Status:</span>
                &nbsp;Shipped {'\u{1F6A2}'}
                <br />
                <br />
            </Paragraph>
        </Section>

        <Banner img='/intuit/intuit_banner.svg' alt='Banner depicting Intuit QuickBooks logo' />

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                Under Intuit's Small Business and Self-Employed Group (<abbr>SBSEG</abbr>), I took
                on a project centered around refining the QuickBooks invoice checkout experience. My
                responsibilities covered the entire design process — uncovering context, outlining
                scope, executing interaction design, validating solutions, and facilitating
                workshops.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Working cross-functionally within a team distributed across three time zones, I
                    led an end-to-end redesign of the QuickBooks Payment Portal's customer-facing
                    experience.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                The QuickBooks product roadmap saw the introduction of payment automation and new
                transaction channels for invoice checkouts. Analytics displayed subpar conversion
                rates for automation setup, which might indicate poor discoverability or low
                receptiveness from users.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How can we better surface the QuickBooks Payment Portal's new automation
                    services and transaction options?
                </Strong>
            </IndentInner>
            <Paragraph>
                Due to an <abbr>NDA</abbr>, I can't go through an in-depth discussion of this
                initiative at the moment. If you'd like to learn more, please don't hesitate to{' '}
                <Link href='mailto:sethvm64@gmail.com?cc=svmoreno@uwaterloo.ca' legacyBehavior>
                    <a className='activeLink inBodyLink'>get in touch</a>
                </Link>
                .
            </Paragraph>
        </Section>

        <Section ends>
            <Heading type={3}>Reflection</Heading>
            <br />
            <IndentInner>
                <Heading type={4}>Introduce without interfering</Heading>
            </IndentInner>
            <Paragraph>
                Customer-facing platforms such as QuickBooks are in a constant state of evolution,
                resulting in frequent design changes that must be approached with care. New features
                should be incorporated into an experience without interrupting the completion of its
                most critical tasks.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Balance education and interaction cost</Heading>
            </IndentInner>
            <Paragraph>
                Another implication of continuous refinement is the unfamiliarity of new features to
                even the most seasoned users. In the context of the QuickBooks payment journey,
                there was a compromise to be made between preserving the simplicity of the checkout
                workflow and surfacing important information about what AutoPay entails.
            </Paragraph>
        </Section>
    </>
);

export default Intuit;
