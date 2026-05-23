import Head from '../components/SEO';
// layout
import Section from '../components/Content/Section';
import SectionInner from '../components/Content/SectionInner';
import IndentInner from '../components/Content/IndentInner';
import List from '../components/Content/List';
import Banner from '../components/Content/Banner';
import FrostedGlass from '../components/Content/FrostedGlass';
import ImageFluid from '../components/Content/ImageFluid';
import Image from '../components/Content/Image';
// typography
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
import Strong from '../components/Typography/Strong';

const Paywall = () => (
    <>
        <Head
            title='Paywall Redesign'
            description='Generated 18% lift in purchase conversion rate'
            url='https://sethvm.com/paywall-redesign'
        />
        <Section ends>
            <Heading type={2}>Paywall Redesign</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                Subscription paywalls serve a key role in establishing trust with users by outlining
                crucial information such as feature packages, pricing and promotions. Working with a
                product manager and an engineer, I led a complete redesign of the Invoice Simple
                paywall to streamline our buyer experience.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Sole product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platforms:</span>
                &nbsp;Mobile (<abbr>iOS</abbr> & Android)
            </Paragraph>
            <Paragraph>
                <span className='bold'>Result:</span>
                &nbsp;18% lift in purchase conversion
            </Paragraph>
        </Section>

        <Banner
            img='/is/paywall/is_paywall_banner.svg'
            alt='Screenshots of the final mobile subscription paywall'
        />

        <Section ends>
            <Heading type={3}>Context</Heading>
            <IndentInner>
                <Strong>
                    80% of new users who landed on the paywall left without onboarding onto a
                    subscription plan.
                </Strong>
            </IndentInner>
            <Paragraph>
                Invoice Simple's 2024-2025 business objectives included enhancements to the new
                user journey. A funnel study identified a paywall-to-purchase drop-off as a pivotal
                opportunity.
            </Paragraph>
        </Section>

        <Section>
            <Heading type={3}>Buyer Bottleneck</Heading>
            <Paragraph>
                Prior to the redesign, the paywall emphasized introducing new users to Invoice
                Simple rather than presenting subscription plan details.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The previous paywall was designed to sell rather than inform, despite 85% of
                    visits coming from a feature gate.
                </Strong>
            </IndentInner>
            <Paragraph>
                Consequently, we hypothesized that space was being put to waste by “reselling” our
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
                    src='/is/paywall/is_paywall_prev-design.svg'
                    alt='Scroll-through of old Invoice Simple paywall'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Overwhelming Presentation
                </Heading>
                <Paragraph>
                    The previous organization of subscription plans and their respective feature
                    lists made it difficult to make comparisons between different tiers.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/paywall/is_paywall_plan-comparison.svg'
                    alt='Image showing plan card locations on paywall'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends>
            <Heading type={3}>What Makes a Great Paywall?</Heading>
            <Paragraph>
                To inform the new design, I studied subscription paywalls from leading mobile apps
                and identified patterns utilized consistently across the strongest examples.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Straight to the point</Heading>
            </IndentInner>
            <Paragraph>
                Minimalism is leveraged by leading with plan details and omitting lengthy value
                propositions and testimonials.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Plans arranged as cards</Heading>
            </IndentInner>
            <Paragraph>Cards make it easy to identify and compare tiered subscriptions.</Paragraph>
            <IndentInner>
                <Heading type={4}>What you see is what you get</Heading>
            </IndentInner>
            <Paragraph>
                Laying out plan options at a glance minimizes the navigation required to make
                comparisons between offerings.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Through competitor research, I outlined elements essential to mobile paywall
                    designs and adapted them to our user and strategic needs.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Design Solution</Heading>
            <Paragraph>
                By reworking visual design and information hierarchy, I sought to deliver an
                experience that helps users decide which Invoice Simple plan best fulfills their
                business needs.
            </Paragraph>
            <Paragraph>
                The new paywall design is grounded upon three following principles:
            </Paragraph>
            <List numbered>
                <li>
                    <Strong className='block'>Simplicity</Strong>
                    <Paragraph>Avoid using large bodies of text</Paragraph>
                </li>
                <li>
                    <Strong className='block'>Scannability</Strong>
                    <Paragraph>Arrange information for easy consumption</Paragraph>
                </li>
                <li>
                    <Strong className='block'>Progressive disclosure</Strong>
                    <Paragraph>Introduce details incrementally</Paragraph>
                </li>
            </List>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Reorganized Layout
                </Heading>
                <Paragraph>
                    Refinements were driven primarily by two variables: plan type, and plan
                    duration. Paginating by duration enables users to compare subscription tiers
                    side-by-side.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/paywall/is_paywall_iterations.svg'
                    alt='Diagram explaining paywall design iterations'
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
                    src='/is/paywall/is_paywall_collapsible-cards.svg'
                    alt="Image showing new paywall's card states"
                />
            </ImageFluid>
            <ImageFluid>
                <Image
                    animation
                    src='/is/paywall/is_paywall_collapsible-cards.gif'
                    alt='Animation demonstrating collapsible card interaction'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Tracked Selection
                </Heading>
                <Paragraph>
                    A bottom-fixed call-to-action (<abbr>CTA</abbr>) enables users to scroll through
                    the paywall without losing track of their selected subscription plan. This is a
                    strength of the previous paywall we opted to preserve and improve upon.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    animation
                    src='/is/paywall/is_paywall_sticky-cta.gif'
                    alt='Scroll animation demonstrating fixed call-to-action position'
                />
            </ImageFluid>
            <ImageFluid>
                <Image
                    src='/is/paywall/is_paywall_sticky-cta.svg'
                    alt='Image showing monthly and annual variants of the sticky call-to-action'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends gap>
            <Heading type={3}>Validation & Results</Heading>
            <Paragraph>
                An A/B test was run to quantitatively validate the new paywall design. We
                successfully addressed the user funnel drop-off by growing key business metrics and
                uncovering further opportunities.
            </Paragraph>
            <IndentInner>
                <Strong>18% lift in free-to-paid conversion</Strong>
            </IndentInner>
            <IndentInner>
                <Strong>Addition of growth-centred optimizations to product roadmap</Strong>
            </IndentInner>
        </Section>

        <Section ends gap>
            <Heading type={3}>Next Steps</Heading>
            <IndentInner>
                <Heading type={4}>Extend redesign to feature list</Heading>
            </IndentInner>
            <Paragraph>
                This initiative prioritized the information presented within the user's immediate
                viewport—the top of the paywall. Hence, the next opportunity entails revisiting the
                design of our feature list to serve the user need of comparing between subscription
                plans.
            </Paragraph>
        </Section>
    </>
);

export default Paywall;
