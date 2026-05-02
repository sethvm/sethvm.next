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
            description='Novel post-signup experience that brought 27% more document creations and 16% more subscription paywall visits'
            url='https://sethvm.com/is-free-trial'
        />
        <Section ends>
            <Heading type={2}>Free Trial</Heading>
            <SubHeading>Invoice Simple</SubHeading>
            <Paragraph>
                <br />A limited-time free trial enables small business owners to explore the
                entirety of the Invoice Simple platform without the upfront pressure of committing
                to a subscription plan. Working with a product manager and five engineers, I led the
                design of this new user experience from conception to execution.
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
                &nbsp;Increased document creations by 27%, paywall visits by 16% and drove 10% skew
                towards higher-tier subscription packages
            </Paragraph>
        </Section>

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>
                Invoice Simple is a mobile and web-based platform that allows users to create and
                send professional-looking invoices within a few clicks. It facilitates document
                customization, online payments as well as expense tracking.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Serving over half a million freelancers, contractors, and owner-operators,
                    Invoice Simple provides a simple way for users to run their businesses.
                </Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Invoice Simple previously operated on a freemium acquisition model that limited how
                many documents users can create and what features they can use. In this state, we
                faced challenges with showcasing our value proposition to prospective subscribers.
            </Paragraph>
            <IndentInner>
                <Strong>
                    Free-tier were unable to experience the full extent of Invoice Simple's
                    functionality and in turn determine whether or not it serves their needs.
                </Strong>
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
                cascaded throughout the entire product. By allowing Invoice Simple to demonstrate
                its own value, the free trial brought us results otherwise not possible with the
                previous freemium model.
            </Paragraph>
            <IndentInner>
                <Heading type={4}>Designing for an evolving mental model</Heading>
            </IndentInner>
            <Paragraph>
                Leading the free trial initiative pushed me to constantly think about how a user’s
                objectives change as their free trial progresses. What do they want to do? What
                should we tell them? When should we leave them be? The final experience needed to be
                able to address these whether a user just finished signup up or are on their final
                few days of their trial period.
            </Paragraph>
        </Section>
    </>
);

export default FreeTrial;
