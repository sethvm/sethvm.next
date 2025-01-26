import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import IndentInner from '../src/components/Content/IndentInner';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';

const Paywall = () => (
    <>
        <Head
            title='Paywall Redesign'
            description='Generated 18% lift in subscription conversions'
            url='https://sethvm.com/is-paywall-redesign'
        />
        <Section ends>
            <Heading type={2}>Paywall Redesign</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                <br />
                Subscription paywalls serve a key role in building trust with software as a service
                (<abbr>SaaS</abbr>) buyers by outlining crucial information such as feature
                packages, pricing and promotions.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platform:</span>
                &nbsp;Mobile & Web
            </Paragraph>
            <Paragraph>
                <span className='bold'>Launched:</span>
                &nbsp;September 2024
            </Paragraph>
            <Paragraph>
                <span className='bold'>Result:</span>
                &nbsp;18% lift in free-to-paid conversions
            </Paragraph>
        </Section>

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <IndentInner>
                <Strong>
                    Invoice Simple aims to provide small business owners a simple way to invoice
                    customers from anywhere.
                </Strong>
            </IndentInner>
            <Paragraph>
                In collaboration with a product manager and an engineer, I redesigned our paywall to
                streamline our buyer experience and in turn increase subscription revenue.
            </Paragraph>
        </Section>
    </>
);

export default Paywall;
