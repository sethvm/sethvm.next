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

const FreeTrial = () => (
    <>
        <Head
            title='Free Trial'
            description='Novel post-signup experience that grew subscription purchases by 32% and document creations by 27%'
            url='https://sethvm.com/is-free-trial'
        />
        <Section ends>
            <Heading type={2}>Free Trial</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                <br />A limited-time free trial enables small business owners to experience the full
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
                &nbsp;Increased subscription purchases by 32% and document creations by 27%
                alongside downstream results
            </Paragraph>
        </Section>

        <Banner
            img='/is/free-trial/is-free-trial_banner.svg'
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
                    The product suffered from a low purchase conversion as users were not
                    experiencing the “aha moment.”
                </Strong>
            </IndentInner>
        </Section>

        <FrostedGlass ends>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Two Documents, One Send, Paywall
                </Heading>
                <Paragraph>
                    New users were given little beyond a test document to work with.
                </Paragraph>
            </SectionInner>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Gated Features
                </Heading>
                <Paragraph>
                    An upfront subscription purchase was required to use workflow-critical
                    functionality. This included photo attachments, signatures and reminders.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_feature-gates.svg'
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
                Features can be better understood through usage rather than through the paywall
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Superior observability</Heading>
            </IndentInner>
            <Paragraph>
                Opening our product to unpaid users provides additional insight on user experience
                and demand
            </Paragraph>
            <IndentInner>
                <Heading type={4}>A SaaS standard</Heading>
            </IndentInner>
            <Paragraph>
                Secondary research identified free trials as the most common acquisition strategy as
                of 2025, leveraged by an estimated 40-50% of SaaS platforms
            </Paragraph>
            <IndentInner>
                <Strong>
                    A 14-day free trial allows small business owners to see for themselves how
                    Invoice Simple can be integrated into their day-to-day work.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Show, Don't Tell</Heading>
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
                    src='/is/free-trial/is-free-trial_intro-page.svg'
                    alt='Image showing the free trial intro page'
                />
            </ImageFluid>
            <SectionInner>
                <Heading type={4} className='heavy'>
                    Gentle Guidance
                </Heading>
                <Paragraph>
                    The banner has been repurposed to house the trial countdown, educational content
                    and any active promotions.
                </Paragraph>
            </SectionInner>
            <ImageFluid>
                <Image
                    src='/is/free-trial/is-free-trial_timer-banner.svg'
                    alt='Image showing the free trial banner'
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
                    src='/is/free-trial/is-free-trial_tier-icons.svg'
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
            <SectionInner>
                <Paragraph>
                    The invoice editor is where most new users encounter their “aha!” moment and
                    discover the value of Invoice Simple. An optional tour serves to get them
                    started on their first document as soon as they finish onboarding.
                </Paragraph>
            </SectionInner>
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
                    <span className='bold'>Subscription purchases</span>
                    <br />
                    <Paragraph>
                        Are free trial users more likely to become paid subscribers?
                    </Paragraph>
                </li>
                <li>
                    <span className='bold'>Document creations</span>
                    <br />
                    <Paragraph>
                        Are users creating more documents after the end of their trial period?
                    </Paragraph>
                </li>
                <li>
                    <span className='bold'>Subscription package mix</span>
                    <br />
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
                <Heading type={4}>27% more documents created</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>10% skew towards higher-tier subscription packages</Heading>
            </IndentInner>
            <Paragraph>
                Furthermore, engagement from free trial users who become subscribers yielded several
                downstream results.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>16% more paywall visits</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>10% more documents sent</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>
                    17% higher payments volume processed through in-house integrations
                </Heading>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3}>Reflection</Heading>
            <br />
            <IndentInner>
                <Heading type={4}>Compounding dividend of UX</Heading>
            </IndentInner>
            <Paragraph>
                Delivering an experience aimed at delight for new users yielded an uplift that
                cascaded throughout Invoice Simple. By enhancing our product's ability to
                demonstrate its value, the free trial brought us results otherwise not possible with
                the previous freemium model.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Designing for an evolving mental model</Heading>
            </IndentInner>
            <Paragraph>
                Leading the free trial initiative pushed me to constantly think about how a user's
                objectives change as their free trial progresses. What do they want to do? What
                should we tell them? When should we leave them be? The final experience needed to be
                able to address these whether a user just finished signup up or are on their final
                few days of their trial period.
            </Paragraph>
        </Section>
    </>
);

export default FreeTrial;
