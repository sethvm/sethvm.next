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
                <span className='bold'>
                    No sweat - hop over to the landing page&nbsp;
                </span>
                <Link href='/' passHref>
                    <a className='activeLink bold'>here →</a>
                </Link>
            </Heading>
        </Section>
    </>
);

export default Error;
