import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import IndentInner from '../src/components/Content/IndentInner';
import List from '../src/components/Content/List';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';

const Paywall = () => (
    <>
        <Head
            title='Paywall Redesign'
            description='Generated 18% lift in subscription conversion rate'
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
                &nbsp;18% lift in signup-to-paid conversion
            </Paragraph>
        </Section>

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <IndentInner>
                <Strong>
                    Invoice Simple aims to be the most convenient invoicing solution for small
                    business owners.
                </Strong>
            </IndentInner>
            <Paragraph>
                In collaboration with a product manager, a product designer, five engineers and a
                marketing manager, I redesigned the Invoice Simple paywall to streamline our buyer
                experience.
            </Paragraph>
        </Section>

        <Section ends>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Invoice Simple's 2024 business objectives included optimizing the new user journey
                and increasing subscription revenue. A funnel study identified a “paywall to
                purchase” drop-off as a key area of opportunity, in which a low percentage of users
                who land on the paywall onboard onto a subscription plan.
            </Paragraph>
            <IndentInner>
                <Strong>
                    We hypothesized that reimagining content hierarchy, reducing noise and making
                    packaging information more easily consumable are key to driving paywall
                    conversion.
                </Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3}>Design Solution</Heading>
            <Paragraph>
                Most users encounter the paywall after becoming acquainted with using Invoice
                Simple. For each of the three subscription plans we offer, we emphasized
                transparency around:
            </Paragraph>
            <List numbered>
                <li>
                    <Paragraph>Monthly and yearly pricing</Paragraph>
                </li>
                <li>
                    <Paragraph>Included features</Paragraph>
                </li>
                <li>
                    <Paragraph>Applicable savings</Paragraph>
                </li>
            </List>
        </Section>
    </>
);

export default Paywall;
