// google analytics component
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

const Analytics = () => {
    const trackerID = 'UA-152533938-2';
    const location = useRouter();

    // initialize ga tracking
    useEffect(() => {
        ReactGA.initialize(trackerID);
    }, []);

    // increment pageview count
    useEffect(() => {
        ReactGA.pageview(location.pathname);
    }, [location.pathname]);

    return null;
};

export default Analytics;
