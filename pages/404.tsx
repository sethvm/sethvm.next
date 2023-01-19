import Head from '../src/components/SEO';
import Link from 'next/link';
// layout
import Section from '../src/components/Content/Section';
// typography
import Heading from '../src/components/Typography/Heading';

const Error = () => (
    <>
        <Head title='404: Not Found' noCrawl />
        <Section>
            <Heading type={2}>
                <span className='heavy' style={{ color: '#A80000' }}>
                    404, mate - probably an old link!
                </span>
            </Heading>
            <Heading type={3}>
                <br />
                <span>No sweat -&nbsp;</span>
                <Link legacyBehavior href='/' passHref>
                    <a className='activeLink bold'>head over to the home page →&#xFE0E;</a>
                </Link>
            </Heading>
        </Section>
    </>
);

export default Error;
