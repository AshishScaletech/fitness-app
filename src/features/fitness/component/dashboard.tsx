import React, { useMemo, useState } from 'react';
import { IActivity, IFitness } from '../interface/interface';

import ProfileImg from '../../../assets/images/profile-img.jpg';
import LineChart from './calori';
import DoughnutChart from './daunutChart';
import HeartChart from './heartRate';
import Progress from './progress';
import { RightIcon } from 'shared/components/icons/icons';
import ProgressCart from './progress';
import { useNavigate } from 'react-router-dom';
import ActivitiesDetails from './activityDetails';
import UserProfile from './userProfile';

interface IProps {
	fitnessActivity: IFitness;
}

const Dashboard: React.FC<IProps> = (props) => {
	const { fitnessActivity } = props;
	const Activities = () => {
		fitnessActivity.activities.map((activity: IActivity) => activity);
	};

	const options = useMemo(() => {
		fitnessActivity.activities.map((items: any) => items.name);
	}, []);

	return (
		<div className='width--full dashboard-wrapper flex border-radius--lg'>
			<div className='favorite-wrapper width--70 p--10'>
				<p className='mb--16 font-size--24 font--medium'>Fitness Activity</p>
				<p className='font-size--default mb--35 text--grey-100 font--light'>
					Physical activity is defined as any bodily movement produced by skeletal muscles that results in
					energy expenditure. The energy expenditure can be measured in kilocalories. Physical activity in
					daily life can be categorized into occupational, sports, conditioning, household, or other
					activities.
				</p>
				<div className='favorite width--full mb--35'>
					<p className='flex align-items--center text--grey-600 mb--20'>
						{' '}
						<span className='width--7px height--20px bg--grey-150 mr--15 ' />
						Favorite
					</p>
					<div className='flex justify-content--around'>
						<div className='favorites--chart width--25 flex align-items--center justify-content--around height--auto flex--column'>
							<p className='text--grey-600 font--medium mb--10'>Average Activity Duration</p>
							<DoughnutChart chartData={fitnessActivity.activities} />
						</div>
						<div className='favorites--chart width--25 flex align-items--center justify-content--around flex--column'>
							<p className='text--grey-600 font--medium mb--10'>Heart-Rate of LastWeek</p>
							<HeartChart chartData={fitnessActivity.activities} />
						</div>
						<div className='favorites--chart width--25 position--relative'>
							<p className='text--grey-600 font--medium mb--10 '>Progress</p>
							{/* <div className='flex'> */}
							<div className=''>
								<ProgressCart chartData={fitnessActivity.activities} />
							</div>
							<div className='flex justify-content--around mt--10'>
								<p className='text--grey-600'>distance:45</p>
								<p className='text--grey-600'>duration:34</p>
								<p className='text--grey-600'>steps:20</p>
							</div>
						</div>
					</div>
				</div>
				<div className='activity-wrapper width--full'>
					<div className='activity'>
						<p className='flex align-items--center text--grey-600 mb--20'>
							{' '}
							<span className='width--7px height--20px bg--grey-150 mr--15 ' />
							Statistics
						</p>
						<LineChart chartData={fitnessActivity.activities} />
					</div>
				</div>
			</div>
			{/* )} */}
			<UserProfile fitnessActivity={fitnessActivity} />
		</div>
	);
};

export default Dashboard;
