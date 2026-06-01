import Head from '../components/SEO';
import Link from 'next/link';
import Section from '../components/Content/Section';
import Heading from '../components/Typography/Heading';

const Error = () => (
    <>
        <Head title='Page Not Found' noCrawl />
        <Section gap>
            <Heading type={2}>
                <span className='heavy' style={{ color: '#A80000' }}>
                    The page you're looking for doesn't exist!
                </span>
            </Heading>
            <Heading type={3}>
                <span>No sweat—head over to the </span>
                <Link href='/' className='activeLink bold'>
                    home page →&#xFE0E;
                </Link>
            </Heading>
        </Section>
    </>
);

export default Error;
