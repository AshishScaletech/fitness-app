import React from 'react';
import { IActivity, IFitness } from '../interface/interface';

interface IProps {
	fitnessActivity: IFitness;
}

const Dashboard: React.FC<IProps> = (props) => {
	const { fitnessActivity } = props;
	const Activities = () => {
		fitnessActivity.activities.map((activity: IActivity) => activity);
	};
	console.log('Activities:', Activities);
	return <div>Fitness Activities</div>;
};

export default Dashboard;
