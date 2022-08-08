import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
import IndentInner from '../src/components/Content/IndentInner';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
import Paragraph from '../src/components/Typography/Paragraph';
import Strong from '../src/components/Typography/Strong';
// images
import Banner from '../src/components/Content/Banner';

const Intuit = () => (
    <>
        <Head
            title='CP Portal'
            description='Making invoice payments easier for consumers and accountants.'
            url='https://sethvm.com/qb-counterpart-portal'
        />
        <Section ends>
            <Heading type={2}>QuickBooks CP Portal</Heading>
            <SubHeading>Intuit</SubHeading>
            <Paragraph>
                <br />
                The Counterpart (<abbr>CP</abbr>) Portal is a subsystem of QuickBooks that
                facilitates online transactions between merchants and their payors. Processing over
                $300 million <abbr>USD</abbr> in payments every day, it is a crucial component of
                Intuit's technology platform.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Teammates:</span>
                &nbsp;2 product designers, 1 content designer, 2 developers, 2 product managers, and
                1 business analyst
            </Paragraph>
            <Paragraph>
                <span className='bold'>Status:</span>
                &nbsp;Ongoing {'\u{1F6A7}'}
            </Paragraph>
        </Section>

        <Banner img='/intuit/intuit_banner.svg' alt='Banner depicting Intuit QuickBooks logo' />

        <Section ends>
            <Heading type={3}>Context</Heading>
            <Paragraph>
                The <abbr>CP</abbr> Portal supports transactions by providing a plethora of payment
                channels for users to choose from. Working cross-functionally within a team
                distributed across three time zones, I'm leading an end-to-end redesign of its
                front-facing experience.
            </Paragraph>
            <IndentInner>
                <Strong>
                    The core function of the <abbr>CP</abbr> Portal is to make money move.
                </Strong>
            </IndentInner>
        </Section>

        <Section ends>
            <Heading type={3}>The Challenge</Heading>
            <Paragraph>
                Payors access the <abbr>CP</abbr> Portal via email invoices sent by merchants.
                Analytics measured a conversion rate below 80%, indicating that users might be
                facing difficulties with completing payments.
            </Paragraph>
            <IndentInner>
                <Strong>
                    How might we ensure payors are better able to complete invoice payments using
                    the CP Portal?
                </Strong>
            </IndentInner>
        </Section>
    </>
);

export default Intuit;
