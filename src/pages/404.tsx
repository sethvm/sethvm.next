import Head from '../components/SEO';
import Link from 'next/link';
// layout
import Section from '../components/Content/Section';
// typography
import Heading from '../components/Typography/Heading';

const Error = () => (
    <>
        <Head title='Page Not Found' noCrawl />
        <Section>
            <Heading type={2}>
                <span className='heavy' style={{ color: '#A80000' }}>
                    The page you're looking for doesn't exist!
                </span>
            </Heading>
            <Heading type={3}>
                <br />
                <span>No sweat—head over to the </span>
                <Link href='/' className='activeLink bold'>
                    home page →&#xFE0E;
                </Link>
            </Heading>
        </Section>
    </>
);

export default Error;
