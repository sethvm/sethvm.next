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
            description='Generated 18% lift in purchase conversion rate'
            url='https://sethvm.com/is-paywall-redesign'
        />
        <Section ends>
            <Heading type={2}>Mobile Paywall</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                <br />
                Subscription paywalls serve a key role in establishing trust with software as a
                service (<abbr>SaaS</abbr>) buyers by outlining crucial information such as feature
                packages, pricing and promotions. Every new Invoice Simple subscriber begins their
                journey here.
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
                &nbsp;2024
            </Paragraph>
            <Paragraph>
                <span className='bold'>Result:</span>
                &nbsp;Grew purchase conversion by 18% and annual recurring revenue by over $300K
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
                journey. A funnel study identified a “paywall to purchase” drop-off as a key area of
                opportunity.
            </Paragraph>
            <IndentInner>
                <Strong>
                    80% of new users who landed on the paywall left without onboarding onto a
                    subscription plan.
                </Strong>
            </IndentInner>
            <Paragraph>
                Working with a product manager and five engineers, I led a redesign of the Invoice
                Simple paywall to streamline our buyer experience.
            </Paragraph>
        </Section>

        <Section>
            <Heading type={3}>Business Bottlenecks</Heading>
            <Paragraph>
                Prior to the redesign, the paywall emphasized introducing new users to Invoice
                Simple rather than presenting subscription plan details.
            </Paragraph>
            <IndentInner>
                <Strong>The previous paywall was designed to sell rather than inform.</Strong>
            </IndentInner>
            <IndentInner>
                <Strong>Moreover, 85% of visits come from a feature gate.</Strong>
            </IndentInner>
            <Paragraph>
                Consequently, we hypothesized that space was being put to waste by “reselling” the
                product to users already familiar with it.
            </Paragraph>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Scrolling, not Seeing
                </Heading>
                <Paragraph>
                    Users needed to scroll past a value proposition section followed by testimonials
                    before seeing any information about paid plans.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/is_paywall_prev-design.svg'
                    alt='Scroll-through of old Invoice Simple paywall'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Inefficient Presentation
                </Heading>
                <Paragraph>
                    The previous organization of subscription plans and their respective feature
                    lists made it difficult to make comparisons between different tiers.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/is_paywall_plan-comparison.svg'
                    alt='Image showing plan card locations on paywall'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section>
            <Heading type={3}>Design Solution</Heading>
            <Paragraph>
                By reworking visual design and restructuring information hierarchy, we sought to
                deliver an experience that helps users decide which Invoice Simple plan best
                fulfills their business needs.
            </Paragraph>
            <Paragraph>
                The new paywall design is grounded upon three following principles:
            </Paragraph>
            <List numbered>
                <li>
                    <span className='bold'>Simplicity</span>
                    <br />
                    <Paragraph>Avoid using large bodies of text</Paragraph>
                </li>
                <li>
                    <span className='bold'>Progressive disclosure</span>
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
                    Layout Organization
                </Heading>
                <Paragraph>
                    Refinements were driven primarily by two variables: plan type, and plan
                    duration. Paginating by duration enables users to compare all subscription types
                    side-by-side.
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
                    Surfacing critical information while minimizing bloat proved to be a delicate
                    balance to attain. Collapsible cards display a short summary of each plan and
                    provide the option for users to see its associated features.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/is_paywall_collapsible-cards.svg'
                    alt="Image showcasing the new paywall's card states"
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Tracked Selection
                </Heading>
                <Paragraph>
                    A bottom-fixed call-to-action (<abbr>CTA</abbr>) enables users to scroll through
                    the paywall without losing track of their selected subscription plan.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/is_paywall_sticky-cta.svg'
                    alt="Image showing the new paywall's call-to-action"
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends>
            <Heading type={3}>Results</Heading>
            <Paragraph>
                The launch of the new paywall design addressed the user funnel drop-off by growing
                key business metrics and uncovered further opportunities.
            </Paragraph>
            <IndentInner>
                <Strong>Generated 18% lift in free-to-paid conversion</Strong>
            </IndentInner>
            <IndentInner>
                <Strong>Increased annual recurring revenue by over $300K</Strong>
            </IndentInner>
            <IndentInner>
                <Strong>Subscription tier-based optimizations added to product roadmap</Strong>
            </IndentInner>
        </Section>
    </>
);

export default Paywall;
