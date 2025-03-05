import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import SectionInner from '../src/components/Content/SectionInner';
import IndentInner from '../src/components/Content/IndentInner';
import List from '../src/components/Content/List';
import Banner from '../src/components/Content/Banner';
import FrostedGlass from '../src/components/Content/FrostedGlass';
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
                Subscription paywalls serve a key role in establishing trust with software as a
                service (<abbr>SaaS</abbr>) buyers by outlining crucial information such as feature
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

        <Banner
            img='/is/is_banner.svg'
            alt='Screenshots of the final mobile subscription paywall'
        />

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
                purchase” drop-off as a key area of opportunity, in which most users who land on the
                paywall leave without onboarding onto a subscription plan.
            </Paragraph>
            <IndentInner>
                <Strong>
                    We hypothesized that reimagining content hierarchy, reducing noise and making
                    packaging information more easily consumable are key to driving paywall
                    conversion.
                </Strong>
            </IndentInner>
        </Section>

        <Section>
            <Heading type={3}>Design Solution</Heading>
            <Paragraph>
                Most users land on the paywall after becoming acquainted with using Invoice Simple.
                We emphasized the following elements in our approach:
            </Paragraph>
            <List numbered>
                <li>
                    <span className='bold'>Progressive disclosure</span>
                    <br />
                    <Paragraph>
                        Avoid overwhelming users while facilitating access to in-depth subscription
                        overviews
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
                    <span className='bold'>Discount laddering</span>
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
                    Final Mobile Paywall
                </Heading>
                <Paragraph>Transactions were paginated and sorted earliest-first.</Paragraph>
            </SectionInner>
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
