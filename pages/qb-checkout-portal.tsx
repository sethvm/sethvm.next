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

const Checkout = () => (
    <>
        <Head
            title='Checkout Portal'
            description='Enhancing the discoverability of automation features for online invoice payments.'
            url='https://sethvm.com/qb-checkout-portal'
        />
        <Section ends>
            <Heading type={2}>Checkout Portal</Heading>
            <SubHeading>Intuit QuickBooks</SubHeading>
            <Paragraph>
                <br />
                QuickBooks' online checkout portal facilitates transactions between customers and
                merchants. Moving over $300 million USD every day, it is a crucial component of
                Intuit's technology platform.
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
                <span className='bold'>Launched:</span>
                &nbsp;September 2022
            </Paragraph>
            <Paragraph>
                <span className='bold'>Result:</span>
                &nbsp;Facilitation of 2 new payment channels
            </Paragraph>
        </Section>

        <Banner img='/intuit/intuit_banner.svg' alt='Banner depicting Intuit QuickBooks logo' />

        <Section ends>
            <Heading type={3}>Context</Heading>
            <Paragraph>
                On top of serving as an all-in-one bookkeeping package, QuickBooks streamlines
                invoicing for small and medium-sized businesses (<abbr>SMB</abbr>s) through
                monitoring cash flow and offering a wide range of payment solutions to customers.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The QuickBooks checkout portal empowers small and medium-sized business owners
                    by providing easy ways to get paid.
                </Strong>
            </IndentInner>
            <Paragraph>
                Collaborating with 2 designers, 2 product managers, 3 engineers and 1 business
                analyst, I led a design iteration of the checkout experience to improve
                discoverability of existing features and scalability for novel payment options.
            </Paragraph>
        </Section>

        <Section ends>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Analytics displayed subpar conversion rates for payment automation (Autopay), which
                might indicate poor discoverability or low receptiveness from users. The checkout
                portal's interface will also need to facilitate the introduction of two new
                transaction channels for invoice checkouts.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How can we better surface QuickBooks Autopay while incorporating new transaction
                    channels?
                </Strong>
            </IndentInner>
            <Paragraph>
                Due to an <abbr>NDA</abbr>, I can't go through an in-depth discussion of this
                initiative at the moment. If you'd like to learn more, please don't hesitate to{' '}
                <Link href='mailto:sethvm64@gmail.com' legacyBehavior>
                    <a className='activeLink inBodyLink'>get in touch↗&#xFE0E;</a>
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
                <Heading type={4}>
                    Balance maximizing education and minimizing interaction cost
                </Heading>
            </IndentInner>
            <Paragraph>
                Another implication of continuous refinement is the unfamiliarity of new features to
                even the most seasoned users. In the context of the QuickBooks checkout journey,
                there was a compromise to be made between preserving the simplicity of the checkout
                workflow and surfacing important information about what payment automation entails.
            </Paragraph>
        </Section>
    </>
);

export default Checkout;
