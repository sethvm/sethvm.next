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

const FreeTrial = () => (
    <>
        <Head
            title='Free Trial'
            description='Novel post-signup experience that grew subscription purchases by 32% and document creations by 27%'
            url='https://sethvm.com/free-trial'
        />
        <Section ends>
            <Heading type={2}>Free Trial</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                A limited-time free trial enables small business owners to experience the full
                capability of Invoice Simple without the upfront pressure of committing to a
                subscription plan. Working with a product manager and five engineers, I led the
                design of this new acquisition model from conception to validation and execution.
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
                <span className='bold'>Impact:</span>
                &nbsp;Grew subscription purchases by 32% and invoice creations by 27% alongside
                downstream results
            </Paragraph>
        </Section>

        <Banner
            img='/is/free-trial/is-free-trial_banner.png'
            alt='Screenshots of key free trial interface elements'
        />

        <Section>
            <Heading type={3}>Freemium, Not Free</Heading>
            <Paragraph>
                Invoice Simple previously operated on a freemium model that limited how many
                documents can be created and which features can be used by unpaid users.
            </Paragraph>
            <IndentInner>
                <Strong>
                    New users were not able to experience the full extent of Invoice Simple's
                    functionality and in turn determine whether or not it serves their needs.
                </Strong>
            </IndentInner>
            <IndentInner>
                <Strong>
                    The product suffered from low purchase conversion as users were not experiencing
                    the “aha!” moment.
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
                    An upfront subscription purchase was required to essential functionality. This
                    included photo attachments, signatures and reminders.
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
            <Heading type={3}>Why a Free Trial?</Heading>
            <Paragraph>
                Adopting a free trial model provides exposure to Invoice Simple's entire end-to-end
                experience. We aimed to provide new users unrestricted access to our Premium package
                to better guide them towards their “aha” moment.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Less reading, more learning</Heading>
            </IndentInner>
            <Paragraph>
                Features can be better understood through usage rather than through the paywall.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Superior observability</Heading>
            </IndentInner>
            <Paragraph>
                Opening our product to unpaid users provides additional insight on user experience.
                and demand
            </Paragraph>
            <IndentInner>
                <Heading type={4}>A SaaS standard</Heading>
            </IndentInner>
            <Paragraph>
                Secondary research identified free trials as the most common acquisition strategy as
                of 2025, leveraged by an estimated 40-50% of SaaS platforms.
            </Paragraph>
            <IndentInner>
                <Strong>
                    A free trial allows small business owners to see for themselves how Invoice
                    Simple can integrate into their day-to-day work.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Show and Tell</Heading>
            <Paragraph>
                The opportunity to give new users the entire end-to-end experience of Invoice Simple
                presented equally endless opportunities to educate them about our product.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Delivering a delightful trial experience goes beyond removing the locks and
                    setting a timer.
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
                    The banner has been repurposed to house the trial countdown, educational content
                    and any active promotions.
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
                    animation
                    src='/is/free-trial/is-free-trial_editor-tour.gif'
                    alt='Animation demonstrating the invoice editor tour'
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
                    animation
                    src='/is/free-trial/is-free-trial_feature-demo.gif'
                    alt='Animation showing the start of a feature demo'
                />
            </ImageFluid>
        </FrostedGlass>

        <Section ends>
            <Heading type={3}>Validation</Heading>
            <Paragraph>
                The new user experience fundamentally changes a growth lever vital to revenue and
                activations, meaning it needed to perform well in several key areas.
            </Paragraph>
            <Heading type={4} className='heavy'>
                Success Metrics
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
                    A 90-day A/B test was run to quantitatively evaluate the free trial designs
                    against the existing freemium offering.
                </Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3}>Results</Heading>
            <Paragraph>
                The free trial experience foundationally strengthened Invoice Simple's new user
                journey.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>32% more subscription purchases</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>27% more invoices created</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>10% skew towards higher-tier subscription packages</Heading>
            </IndentInner>
            <Paragraph>
                Furthermore, engagement from free trial users who became subscribers yielded several
                downstream results.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>16% more paywall visits</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>10% more invoices sent</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>
                    17% higher payments volume processed through Invoice Simple Payments
                </Heading>
            </IndentInner>
        </Section>

        <Section ends gap>
            <Heading type={3}>Next Steps</Heading>
            <IndentInner>
                <Heading type={4}>Usability testing of feature checklist</Heading>
            </IndentInner>
            <Paragraph>
                Only 30% of free trial users are exploring at least one feature on the checklist,
                implying poor discoverability or preference towards self-paced exploration.
                Usability testing will be essential to uncovering context behind how the checklist
                contributes to the new experience.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Enhancement of post-trial journey</Heading>
            </IndentInner>
            <Paragraph>
                The success of the free trial brings opportunities to extend user delight beyond its
                final day. These areas include data continuity, customer support engagement and
                win-back promotions. In short—how can we help users who don't convert?
            </Paragraph>
        </Section>
    </>
);

export default FreeTrial;
