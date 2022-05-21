import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-229532663-2';

const useGAPageTracking = () => {
	const location = useLocation();
	const [initialized, setInitialized] = useState(false);

	/* localhost는 인지 못하게  */
	useEffect(() => {
		if (!window.location.href.includes('localhost')) {
			ReactGA.initialize(TRACKING_ID);
		}
		setInitialized(true);
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.pageview(location.pathname + location.search);
		}
	}, [initialized, location]);

	// 개발용
	useEffect(() => {
		ReactGA.initialize(TRACKING_ID);
		ReactGA.pageview(location.pathname + location.search);
	}, [location]);
};

export default useGAPageTracking;

// https://stackoverflow.com/questions/34836500/how-to-set-up-google-analytics-for-react-router
// App.js에서 쓰려면 index에서 react-router-dom의 Router로 둘러싸야해서 BaseTemplate에 넣었음
