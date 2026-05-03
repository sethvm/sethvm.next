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
                <br />A limited-time free trial enables small business owners to experience the full
                capability of Invoice Simple without the upfront pressure of committing to a
                subscription plan. Working with a product manager and five engineers, I led the
                design of this new acquisition model from conception to execution.
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
                <span className='bold'>Results:</span>
                &nbsp;Increased document creations by 27%, paywall visits by 16% and drove 10% skew
                towards higher-tier subscription packages
            </Paragraph>
        </Section>

        <Banner
            img='/is/free-trial/is-free-trial_banner.svg'
            alt='Screenshots of key free trial interface elements'
        />

        <Section>
            <Heading type={3}>Free, but Not Free</Heading>
            <Paragraph>
                Invoice Simple operated on a freemium model that limited how many documents can be
                created and what features can be used by unpaid users.
            </Paragraph>
            <IndentInner>
                <Strong>
                    New users were unable to experience the full extent of Invoice Simple's
                    functionality and in turn determine whether or not it serves their needs.
                </Strong>
            </IndentInner>
        </Section>
        <FrostedGlass>
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
                    An upfront subscription purchase was required to even see how any paid features
                    worked.
                </Paragraph>
            </SectionInner>
        </FrostedGlass>
        <Section ends>
            <Paragraph>
                These constraints were challenging to introduce to prospective subscribers and were
                not representative of any of our subscription packages.
            </Paragraph>
            <IndentInner>
                <Strong>
                    We took this as an opportunity to rethink and rework how we introduce Invoice
                    Simple to new users.
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
