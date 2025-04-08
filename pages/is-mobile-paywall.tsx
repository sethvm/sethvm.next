import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import SectionInner from '../src/components/Content/SectionInner';
import IndentInner from '../src/components/Content/IndentInner';
import List from '../src/components/Content/List';
import Banner from '../src/components/Content/Banner';
import FrostedGlass from '../src/components/Content/FrostedGlass';
import ImageFluid from '../src/components/Content/ImageFluid';
import Image from '../src/components/Content/Image';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';

const Paywall = () => (
    <>
        <Head
            title='Mobile Paywall'
            description='Generated 18% lift in subscription conversion rate'
            url='https://sethvm.com/is-paywall-redesign'
        />
        <Section ends>
            <Heading type={2}>Mobile Paywall</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                <br />
                Subscription paywalls serve a key role in establishing trust with software as a
                service (<abbr>SaaS</abbr>) buyers by outlining crucial information such as feature
                packages, pricing and promotions. Working with a product manager and five engineers,
                I led a redesign of the Invoice Simple paywall to streamline our buyer experience.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platform:</span>
                &nbsp;Mobile
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

        <Banner
            img='/is/is_banner.svg'
            alt='Screenshots of the final mobile subscription paywall'
        />

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                Invoice Simple's 2024 business objectives included optimizing the new user journey
                and increasing subscription revenue. An onboarding funnel study identified a
                “paywall to purchase” drop-off as a key area of opportunity.
            </Paragraph>
            <IndentInner>
                <Strong>
                    80% of new users who land on the paywall leave without onboarding onto a
                    subscription plan.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Prior to the redesign, the Invoice Simple paywall was designed primarily to
                introduce users to the app rather than present subscription plan details. 85% of
                visits come from a feature gate, implying that space was being put to waste by
                “reselling” to users who are already familiar with the product.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The previous paywall was designed to sell rather than inform.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Design Solution</Heading>
            <Paragraph>The new paywall design is grounded upon the following principles:</Paragraph>
            <List numbered>
                <li>
                    <span className='bold'>Progressive disclosure</span>
                    <br />
                    <Paragraph>
                        Avoid overwhelming users while facilitating access to in-depth information
                    </Paragraph>
                </li>
                <li>
                    <span className='bold'>Intentional transparency</span>
                    <br />
                    <Paragraph>
                        Ensure that users know exactly what they would be paying for and how much
                    </Paragraph>
                </li>
                <li>
                    <span className='bold'>Laddered discounts</span>
                    <br />
                    <Paragraph>
                        Highlight the monthly difference saved by purchasing annual plans over their
                        monthly counterparts
                    </Paragraph>
                </li>
            </List>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Layout Iterations
                </Heading>
                <Paragraph>
                    Refinements to the layout was driven primarily by two variables: plan type, and
                    plan duration. Organizing by duration enables users to compare all subscription
                    types side-by-side.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/is_paywall_iterations.svg'
                    alt='Diagram showing and explaining paywall design iterations'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Collapsible Cards
                </Heading>
                <Paragraph>
                    Surfacing critical information while minimizing bloat proved to be a challenge.
                    Collapsible cards display a short blurb of each plan and provides the option for
                    users to see additional features.
                </Paragraph>
            </SectionInner>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Sticky Call-to-Action Button
                </Heading>
                <Paragraph>
                    Fixing the location of “Buy now” onto the viewport enables users to freely
                    scroll through the paywall without losing track of their selected subscription
                    plan.
                </Paragraph>
            </SectionInner>
        </FrostedGlass>
    </>
);

export default Paywall;
