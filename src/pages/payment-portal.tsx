import Head from '../components/SEO';
import Link from 'next/link';
// layout
import Section from '../components/Content/Section';
import IndentInner from '../components/Content/IndentInner';
// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
import Strong from '../components/Typography/Strong';
// images
import Banner from '../components/Content/Banner';

const Checkout = () => (
    <>
        <Head
            title='Payment Portal'
            description="Enhancing scalability of Intuit QuickBooks' payment portal interface."
            url='https://sethvm.com/payment-portal'
        />
        <Section ends>
            <Heading type={2}>Payment Portal</Heading>
            <SubHeading>Intuit QuickBooks</SubHeading>
            <Paragraph>
                Moving over $300 million <abbr>USD</abbr> every day, QuickBooks' online payment
                portal is a cruical component to Intuit's technology platform. With 2 designers, 3
                engineers, a product manager and a business analyst, I led an iteration of the
                checkout experience to improve discoverability of existing features and scalability
                for novel payment options.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platform:</span>
                &nbsp;Desktop Web
            </Paragraph>
            <Paragraph>
                <span className='bold'>Result:</span>
                &nbsp;Facilitation of 2 new payment channels and streamlined automation workflow
            </Paragraph>
        </Section>

        <Banner img='/intuit/intuit_banner.svg' alt='Banner depicting Intuit QuickBooks logo' />

        <Section ends>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Intuit's 2022 business objectives included introducing new payment options and
                increasing engagement of existing automation features. This entailed revisiting how
                interface components within the checkout portal were organized as well as leveraging
                analytics to uncover challenges with discoverability.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How can we enable the QuickBooks checkout portal to elegantly facilitate new
                    elements and surface automation features?
                </Strong>
            </IndentInner>
        </Section>

        <Section ends gap>
            <Heading type={3}>Reflection</Heading>
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
                <Heading type={4}>
                    Balance maximizing education and minimizing interaction cost
                </Heading>
            </IndentInner>
            <Paragraph>
                Another implication of continuous refinement is the unfamiliarity of new features to
                even the most seasoned users. In the context of the QuickBooks checkout journey,
                there was a compromise to be made between preserving workflow simplicity and
                surfacing important information about what payment automation entails.
            </Paragraph>
            <Strong>
                Want to learn more? Don't hesistate to{' '}
                <Link href='mailto:sethvm64@gmail.com' className='activeLink inBodyLink bold'>
                    get in touch↗&#xFE0E;
                </Link>
            </Strong>
        </Section>
    </>
);

export default Checkout;
