import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import SectionInner from '../src/components/Content/SectionInner';
import IndentInner from '../src/components/Content/IndentInner';
import List from '../src/components/Content/List';
import Banner from '../src/components/Content/Banner';
import FrostedGlass from '../src/components/Content/FrostedGlass';
import ImageFluid from '../src/components/Content/ImageFluid';
import ImageCaption from '../src/components/Content/ImageCaption';
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
            <Heading type={3}>Context</Heading>
            <Paragraph>
                Invoice Simple's 2024 business objectives included optimizations to the new user
                journey. An onboarding funnel study identified a “paywall to purchase” drop-off as a
                key area of opportunity.
            </Paragraph>
            <IndentInner>
                <Strong>
                    80% of new users who landed on the paywall left without onboarding onto a
                    subscription plan.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Bottleneck to Address</Heading>
            <Paragraph>
                Prior to the redesign, the paywall was designed primarily to introduce users to
                Invoice Simple rather than present subscription plan details. 85% of visits come
                from a feature gate, implying that space was being put to waste by “reselling” to
                users who are already familiar with the product.
            </Paragraph>
            <IndentInner>
                <Strong>The previous paywall was designed to sell rather than inform.</Strong>
            </IndentInner>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Poor Usage of Space
                </Heading>
            </SectionInner>
            <ImageCaption>
                Users needed to scroll past a value proposition section followed by testimonials
                before seeing any information about paid plans.
            </ImageCaption>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Cumbersome Interactions
                </Heading>
            </SectionInner>
            <ImageCaption>
                Vertical space taken up by each plan's payment options and feature lists made it
                difficult to compare different subscription tiers.
            </ImageCaption>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Design Solution</Heading>
            <Paragraph>The new paywall design is grounded upon the following principles:</Paragraph>
            <List numbered>
                <li>
                    <span className='bold'>Simplicity</span>
                    <br />
                    <Paragraph>Avoid using large bodies of text</Paragraph>
                </li>
                <li>
                    <span className='bold'>Progressive Disclosure</span>
                    <br />
                    <Paragraph>Introduce details incrementally</Paragraph>
                </li>
                <li>
                    <span className='bold'>Transparency</span>
                    <br />
                    <Paragraph>Arrange information for easy consumption</Paragraph>
                </li>
            </List>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Layout Iterations
                </Heading>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/is_paywall_iterations.svg'
                    alt='Diagram showing and explaining paywall design iterations'
                />
            </ImageFluid>
            <ImageCaption>
                Refinements were driven primarily by two variables: plan type, and plan duration.
                Organizing by duration enables users to compare all subscription types side-by-side.
            </ImageCaption>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Collapsible Plan Cards
                </Heading>
            </SectionInner>
            <ImageCaption>
                Surfacing critical information while minimizing bloat proved to be a delicate
                balance to attain. Collapsible cards display a short summary of each plan and
                provide the option for users to see its associated features.
            </ImageCaption>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Sticky Call-to-Action Button
                </Heading>
            </SectionInner>
            <ImageCaption>
                Fixing the call-to-action (CTA) button to the bottom of the viewport enables users
                to scroll through the paywall without losing track of their selected subscription
                plan.
            </ImageCaption>
        </FrostedGlass>

        <Section ends>
            <Heading type={3}>Results</Heading>
            <Paragraph>
                By improving messaging clarity and restructuring the paywall's layout, we aimed to
                deliver an experience that helps users decide which subscription plan best suits
                their needs.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The launch of the new design resulted in an 18% lift in purchase conversion and
                    grew annual recurring revenue by over $300K
                </Strong>
            </IndentInner>
        </Section>
    </>
);

export default Paywall;
