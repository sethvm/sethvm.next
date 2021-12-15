// google analytics component
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

// local environments to disable tracking for
const localEnvs = [
    'localhost'
]

const Analytics = () => {

    console.log('runnning analytics')

    const trackerID = 'UA-152533938-2';
    const location = useRouter();
    const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
    let isLocal = false;

    // checks if build is running on local environment
    let i = 0;
    while ((i < localEnvs.length) && (!isLocal)) {
        if (host === localEnvs[i]) isLocal = true;
        i++;
    }

    // initializes ga tracking if non-local environment
    useEffect(() => {
        if (!isLocal) ReactGA.initialize(trackerID);
    }, [isLocal]);

    // updates page_path value
    // increments pageview count
    useEffect(() => {
        if (!isLocal) ReactGA.pageview(location.pathname);
    }, [isLocal, location.pathname]);

    return null;
}

export default Analytics
