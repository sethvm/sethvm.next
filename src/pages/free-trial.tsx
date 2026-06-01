import Head from '../components/SEO';
import Section from '../components/Content/Section';
import SectionInner from '../components/Content/SectionInner';
import IndentInner from '../components/Content/IndentInner';
import List from '../components/Content/List';
import Banner from '../components/Content/Banner';
import FrostedGlass from '../components/Content/FrostedGlass';
import ImageFluid from '../components/Content/ImageFluid';
import Image from '../components/Content/Image';
import Stat from '../components/Content/Stat';
import Details from '../components/Content/Details';
import Heading from '../components/Typography/Heading';
import SubHeading from '../components/Typography/SubHeading';
import Paragraph from '../components/Typography/Paragraph';
import Strong from '../components/Typography/Strong';

const FreeTrial = () => (
    <>
        <Head
            title='Free Trial'
            description='Reimagined activation journey that grew subscription purchases by 34% and document creations by 27%'
            url='https://sethvm.com/free-trial'
        />
        <Section ends>
            <Heading type={2} anchor='overview' navLabel='Overview'>
                Free Trial
            </Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                A limited-time free trial enables small business owners to experience the full
                capabilities of Invoice Simple without the upfront pressure of committing to a
                subscription plan. Working with a product manager and five engineers, I led the
                design of this new acquisition model from conception to validation and execution.
            </Paragraph>
            <Details
                details={[
                    { label: 'Role', value: 'Sole product designer' },
                    {
                        label: 'Platform',
                        value: 'Mobile',
                    },
                ]}
            />
            <Details
                details={[
                    {
                        label: 'Results',
                        value: 'Grew subscription purchases by 34% and document creations by 27%',
                    },
                ]}
            />
        </Section>

        <Banner
            img='/is/free-trial/is-free-trial_banner.png'
            alt='Screenshots of key free trial interface elements'
        />

        <Section>
            <Heading type={3} anchor='problem' navLabel='Problem'>
                Freemium, Not Free
            </Heading>
            <Paragraph>
                Invoice Simple previously operated on a freemium model that limited how many
                documents could be created and which features could be used by unpaid users.
            </Paragraph>
            <IndentInner>
                <Strong>
                    New users were not able to experience the full extent of Invoice Simple's
                    functionality and determine whether or not it served their needs.
                </Strong>
            </IndentInner>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Two Documents, One Send
                </Heading>
                <Paragraph>
                    New users were given little beyond a test document to work with and were sent to
                    the paywall upon reaching their usage limits.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_freemium-banner.svg'
                    alt="Image showing Invoice Simple's previous freemium banner"
                />
            </ImageFluid>
            <ImageFluid>
                <Image
                    animation
                    src='/is/free-trial/is-free-trial_freemium-limits.gif'
                    alt='Animation demonstrating the limitations of the Invoice Simple freemium model'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Gated Features
                </Heading>
                <Paragraph>
                    An upfront subscription purchase was required to access essential functionality.
                    This included photo attachments, signatures and reminders.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_feature-gates.png'
                    alt='Image showing feature gates within the document editor'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends>
            <Heading type={3} anchor='approach' navLabel='Approach'>
                Why a Free Trial?
            </Heading>
            <Paragraph>
                Adopting a free trial model provides exposure to Invoice Simple's entire end-to-end
                experience. We aimed to provide new users unrestricted access to our Premium package
                to better guide them towards their “aha!” moment.
            </Paragraph>
            <List numbered>
                <li>
                    <Strong className='block'>Less reading, more learning</Strong>
                    <Paragraph>
                        Features can be better understood through usage rather than through the
                        paywall.
                    </Paragraph>
                </li>
                <li>
                    <Strong className='block'>Superior observability</Strong>
                    <Paragraph>
                        Opening our product to unpaid users provides additional insight into user
                        experience.
                    </Paragraph>
                </li>
                <li>
                    <Strong className='block'>A SaaS standard</Strong>
                    <Paragraph>
                        Secondary research identified free trials as the most common SaaS
                        acquisition strategy, leveraged by an estimated 40-50% of platforms as of
                        2025.
                    </Paragraph>
                </li>
            </List>
            <IndentInner>
                <Strong>
                    A free trial allows small business owners to see for themselves how Invoice
                    Simple can integrate into their day-to-day work.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3} anchor='design solution' navLabel='Design Solution'>
                Reimagined User Journey
            </Heading>
            <Paragraph>
                Eliminating constraints imposed by the freemium model presented endless
                opportunities to educate new users about our product.
            </Paragraph>
            <IndentInner>
                <Strong>
                    I designed novel components that elevated the trial experience beyond the
                    removal of limits.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Trust through Transparency
                </Heading>
                <Paragraph>
                    A timeline of the free trial outlines what new users can expect before they
                    begin using the app.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_intro-page.png'
                    alt='Image showing the free trial intro page'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Generous Guidance
                </Heading>
                <Paragraph>
                    The limit banner has been repurposed to house the trial countdown, educational
                    content and any active promotions.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_timer-banner.png'
                    alt='Image showing the free trial banner'
                />
            </ImageFluid>
            <SectionInner>
                <Paragraph>
                    The invoice editor is where new users encounter their “aha!” moment and discover
                    the value of Invoice Simple. An optional tour serves to get them started on the
                    first document they create.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_editor-tour.png'
                    alt='Image showing the key stages of the invoice editor tour'
                />
            </ImageFluid>
            <SectionInner>
                <Paragraph>
                    Inline visuals inform users at a glance which subscription tier a paid feature
                    is packaged under.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_tier-icons.png'
                    alt='Image showing package icons within invoice editor'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Encouraging Exploration
                </Heading>
                <Paragraph>
                    A feature checklist highlights key elements of our product's core functionality
                    and encourages users to explore as much as possible. A tracker is provided to
                    instill a sense of progression.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_feature-checklist.svg'
                    alt='Image showing feature checklist page and its various elements'
                />
            </ImageFluid>
            <SectionInner>
                <Paragraph>
                    Selecting a feature within the checklist takes the user through a tutorial-style
                    demonstration of how to use it.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_feature-demo.png'
                    alt='Image showing the key stages of a feature demo'
                />
            </ImageFluid>
            <ImageFluid>
                <Image
                    animation
                    src='/is/free-trial/is-free-trial_feature-demo.gif'
                    alt='Animation showing the start of a feature demo'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends>
            <Heading type={3} anchor='validation' navLabel='Validation'>
                Measuring Success
            </Heading>
            <Paragraph>
                The new user experience fundamentally changed a growth lever vital to revenue and
                activations, meaning it needed to perform well in several key areas.
            </Paragraph>
            <Heading type={4} className='heavy'>
                Core Metrics
            </Heading>
            <List numbered>
                <li>
                    <Paragraph>
                        Are free trial users more likely to become paid subscribers?
                    </Paragraph>
                </li>
                <li>
                    <Paragraph>Are free trial users creating more invoices?</Paragraph>
                </li>
                <li>
                    <Paragraph>
                        Do free trial users tend to purchase higher-tier packages?
                    </Paragraph>
                </li>
            </List>
            <IndentInner>
                <Strong>
                    We ran a 90-day A/B test to quantitatively evaluate the free trial against the
                    existing freemium model.
                </Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3} anchor='results'>
                Results
            </Heading>
            <Paragraph>
                Users onboarded to the free trial are able to discover Invoice Simple's value
                upfront, significantly strengthening our acquisition funnel.
            </Paragraph>
            <Stat value='34%'>more subscription purchases</Stat>
            <Stat value='27%'>more invoices created</Stat>
            <Stat value='10%'>skew towards higher-tier subscription packages</Stat>
            <Paragraph>
                Engagement from trial-turned-subscriber merchants yielded several downstream
                results: 16% more paywall visits, 10% more invoices sent and 17% higher payment
                volume processed through Invoice Simple Payments.
            </Paragraph>
        </Section>

        <Section ends gap>
            <Heading type={3} anchor='next-steps'>
                Next Steps
            </Heading>
            <IndentInner>
                <Heading type={4}>Usability testing of feature checklist</Heading>
            </IndentInner>
            <Paragraph>
                Only 30% of free trial users are exploring at least one feature via the checklist,
                implying poor discoverability or preference for self-paced exploration. Usability
                testing will be crucial to uncovering context around how the checklist contributes
                to the new experience.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Enhancement of post-trial journey</Heading>
            </IndentInner>
            <Paragraph>
                The success of the free trial brings opportunities to extend user delight beyond its
                final day. These include data continuity, customer outreach and win-back promotions.
                In short—how can we help users who don't convert?
            </Paragraph>
        </Section>
    </>
);

export default FreeTrial;
