// google analytics component
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';
import ReactGA4 from 'react-ga4';

const Analytics = () => {
    const uaTrackerID = 'UA-152533938-2';
    const ga4TrackerID = 'G-L5EQBK0RT0';
    const location = useRouter();

    // initialize ga tracking
    useEffect(() => {

        //ua tracker
        ReactGA.initialize(uaTrackerID);

        //ga4 tracker
        ReactGA4.initialize(ga4TrackerID);

    }, []);

    // increment pageview count
    useEffect(() => {

        //ua pageview
        ReactGA.pageview(location.pathname);

        //ga4 pageview
        ReactGA4.send({
            hitType: 'pageview',
            page: location.pathname,
        });

    }, [location.pathname]);

    return null;
};

export default Analytics;
