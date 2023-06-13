import React, { useState } from 'react';
import Dashboard from '../component/dashboard';
import { DATA } from 'shared/constants/constants';

const DashboardDetails = () => {
	const [fitnessActivity, setFitnessActivity] = useState(DATA);
	console.log('fitnessActivity:', fitnessActivity);
	return (
		<div className='container'>
			<Dashboard fitnessActivity={fitnessActivity} />
		</div>
	);
};

export default DashboardDetails;
