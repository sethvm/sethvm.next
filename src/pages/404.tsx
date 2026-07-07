import Head from '../components/SEO';
import Link from 'next/link';
import errorPageStyle from '../styles/Error.module.scss';
import Heading from '../components/Typography/Heading';

const Error = () => (
    <>
        <Head title='Page Not Found' noCrawl />
        <div className={errorPageStyle.offset}>
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
        </div>
    </>
);

export default Error;
