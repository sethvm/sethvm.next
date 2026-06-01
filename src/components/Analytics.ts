import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA4 from 'react-ga4';

const Analytics = () => {
    const ga4TrackerID = 'G-L5EQBK0RT0';
    const location = useRouter();

    useEffect(() => {
        ReactGA4.initialize(ga4TrackerID);
    }, []);

    useEffect(() => {
        ReactGA4.send({
            hitType: 'pageview',
            page: location.pathname,
        });
    }, [location.pathname]);

    return null;
};

export default Analytics;
