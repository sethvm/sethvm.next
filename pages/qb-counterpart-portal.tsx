import Head from '../src/components/SEO';
// layout
import Section from '../src/components/Content/Section';
// typography
import Heading from '../src/components/Typography/Heading';
import SubHeading from '../src/components/Typography/SubHeading';
// images
import Banner from '../src/components/Content/Banner';
import Paragraph from '../src/components/Typography/Paragraph';

const Intuit = () => (
    <>
        <Head
            title='CP Portal'
            description="Making money move."
            url='https://sethvm.com/qb-counterpart-portal'
        />
        <Section ends>
            <Heading type={2}>QuickBooks CP Portal</Heading>
            <SubHeading>Intuit</SubHeading>
            <Paragraph>
                <br />
                Lorem ipsum dolor sit amet
            </Paragraph>
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Lead designer with 1 product designer, 1 content designer,
                2 product managers, 2 developers, and 1 business analyst
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

        <Banner
            img='/intuit/intuit_banner.svg'
            alt='Banner depicting Intuit QuickBooks logo'
        />
    </>
);

export default Intuit;
