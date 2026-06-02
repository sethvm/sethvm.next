import Head from '../components/SEO';
import Link from 'next/link';
import Section from '../components/Content/Section';
import IndentInner from '../components/Content/IndentInner';
import Details from '../components/Content/Details';
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
import Strong from '../components/Typography/Strong';
import Banner from '../components/Content/Banner';
import Stat from '../components/Content/Stat';

const Checkout = () => (
    <>
        <Head
            title='Payment Portal'
            description='Enhanced scalability of a customer-facing checkout that processes over $300 million daily'
            url='https://sethvm.com/payment-portal'
        />
        <Section>
            <Heading type={2} anchor='overview' navLabel='Overview'>
                Payment Portal
            </Heading>
            <SubHeading>Intuit QuickBooks</SubHeading>
            <Paragraph>
                Moving over $300 million <abbr>USD</abbr> every day, the QuickBooks online payment
                portal is a crucial component of Intuit's technology platform. With two designers,
                three engineers, a product manager and a business analyst, I led multiple rounds of
                contextual inquiry, rapid explorations and usability testing on the checkout
                experience.
            </Paragraph>
            <Details
                details={[
                    { label: 'Role', value: 'Lead product designer' },
                    { label: 'Platform', value: 'Desktop' },
                    {
                        label: 'Duration',
                        value: '3 months',
                    },
                ]}
            />
        </Section>

        <Banner img='/intuit/intuit_banner.png' alt='Banner depicting the QuickBooks checkout' />

        <Section ends>
            <Heading type={3} anchor='outcomes'>
                Outcomes
            </Heading>
            <IndentInner>
                <Strong>PayPal and Venmo integration</Strong>
            </IndentInner>
            <IndentInner>
                <Strong>Higher adoption of payment automation features</Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3} anchor='the-challenge'>
                The Challenge
            </Heading>
            <Paragraph>
                Intuit's 2022 business objectives included the integration of new transaction
                channels. This entailed revisiting how interface elements within the checkout portal
                were organized as well as leveraging analytics to uncover challenges with
                discoverability.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How can we provide small and medium business owners more ways to get paid?
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3} anchor='reflection'>
                Reflection
            </Heading>
            <IndentInner>
                <Strong>Introducing without interfering</Strong>
            </IndentInner>
            <Paragraph>
                Customer-facing platforms such as QuickBooks are in a constant state of evolution,
                resulting in frequent design changes that must be approached with care. New features
                should be incorporated into an experience without interrupting the completion of its
                most critical tasks.
            </Paragraph>
            <IndentInner>
                <Strong>Balancing education and interaction cost</Strong>
            </IndentInner>
            <Paragraph>
                Another implication of continuous refinement is the unfamiliarity of new features to
                even the most seasoned users. In the context of the QuickBooks checkout journey,
                there was a compromise to be made between preserving workflow simplicity and
                surfacing important information about what payment automation entails.
            </Paragraph>
            {/*<Strong>
                Want to learn more? Don't hesitate to{' '}
                <Link href='mailto:sethvm64@gmail.com' className='activeLink inBodyLink bold'>
                    get in touch↗&#xFE0E;
                </Link>
            </Strong>*/}
        </Section>

        <Section ends gap>
            <Heading type={4}>
                Want to learn more about my work with this team? Don't hesitate to{' '}
                <Link href='mailto:sethvm64@gmail.com' className='activeLink inBodyLink bold'>
                    get in touch↗&#xFE0E;
                </Link>
            </Heading>
        </Section>
    </>
);

export default Checkout;
