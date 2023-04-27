// google analytics component
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA4 from 'react-ga4';

const Analytics = () => {
    //tracker ids and router path
    const uaTrackerID = 'UA-152533938-2';
    const ga4TrackerID = 'G-L5EQBK0RT0';
    const location = useRouter();

    // initialize ga tracking
    useEffect(() => {
        //ga4 tracker
        ReactGA4.initialize(ga4TrackerID);
    }, []);

    // increment pageview count
    useEffect(() => {
        //ga4 pageview
        ReactGA4.send({
            hitType: 'pageview',
            page: location.pathname,
        });
    }, [location.pathname]);

    return null;
};

export default Analytics;
