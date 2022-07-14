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
            description='Making money move.'
            url='https://sethvm.com/qb-counterpart-portal'
        />
        <Section ends>
            <Heading type={2}>QuickBooks CP Portal</Heading>
            <SubHeading>Intuit</SubHeading>
            <Paragraph>
                <br />
                The Counterpart (CP) Portal is a subsystem of QuickBooks that facilitates online
                invoice transactions between merchants and their payors. Processing over $300
                million in payments everyday, it is a crucial component of the QuickBooks ecosystem.
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead designer with 1 product designer, 1 content designer, 2 product managers,
                2 developers, and 1 business analyst
            </Paragraph>
            <Paragraph>
                <span className='bold'>Timeline:</span>
                &nbsp;7 weeks
            </Paragraph>
            <Paragraph>
                <span className='bold'>Status:</span>
                &nbsp;Ongoing {'\u{1F6A7}'}
            </Paragraph>
        </Section>

        <Banner img='/intuit/intuit_banner.svg' alt='Banner depicting Intuit QuickBooks logo' />

        <Section ends>
            <Heading type={3}>Overview</Heading>
            <Paragraph>Blurb about role, term, and team</Paragraph>
            <IndentInner>
                <Strong>
                    As a company, Intuit operates with the intent to "power prosperity around the
                    world".
                </Strong>
            </IndentInner>
        </Section>
    </>
);

export default Intuit;
