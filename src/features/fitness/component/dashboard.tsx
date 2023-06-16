import React, { useMemo } from 'react';
import { IActivity, IFitness } from '../interface/interface';

import ProfileImg from '../../../assets/images/profile-img.jpg';
import LineChart from './calori';
import DoughnutChart from './daunutChart';
import HeartChart from './heartRate';
import Progress from './progress';
import { RightIcon } from 'shared/components/icons/icons';

interface IProps {
	fitnessActivity: IFitness;
}

const Dashboard: React.FC<IProps> = (props) => {
	const { fitnessActivity } = props;
	// const [selectedOption, setSelectedOption] = useState(options);
	const Activities = () => {
		fitnessActivity.activities.map((activity: IActivity) => activity);
	};
	console.log('Activities:', Activities);

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
						<div className='favorites--chart width--25'>
							<p className='text--grey-600 font--medium mb--10'>Average Activity Duration</p>
							<DoughnutChart chartData={fitnessActivity.activities} />
						</div>
						<div className='favorites--chart width--25'>
							<p className='text--grey-600 font--medium mb--10'>Heart-Rate of LastWeek</p>
							<HeartChart chartData={fitnessActivity.activities} />
						</div>
						<div className='favorites--chart width--25 position--relative'>
							<p className='text--grey-600 font--medium mb--10 '>Progress</p>
							<div className='position--absolute'>
								<DoughnutChart chartData={fitnessActivity.activities} />
							</div>
							<div className='position--absolute'>
								<DoughnutChart chartData={fitnessActivity.activities} />
							</div>
							<div className='position--absolute'>
								<DoughnutChart chartData={fitnessActivity.activities} />
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
			<div className='profile width--30 bg--white p--20 border-radius--lg'>
				<p className='flex align-items--center text--grey-600 mb--20'>
					{' '}
					<span className='width--7px height--20px bg--grey-150 mr--15 ' />
					profile
				</p>
				<div className='flex align-items--center justify-content--center flex--column width--full'>
					<div className='profile-img__wrapper border-radius--half '>
						<img
							src={ProfileImg}
							alt='profile'
							className='width--full height--full border-radius--half object-fit--cover'
						/>
					</div>
					<p className='font-size--default mt--15'>{fitnessActivity.user.name}</p>
					<p className='font-size--xxs text--grey-100 mt--5'>{fitnessActivity.user.email}</p>
					<div className='flex mt--15 bg--primary border-radius--md p--10 width--full justify-content--around'>
						<p className='flex flex--column font-size--12'>
							<span className='font-size--12'>Age</span>
							<span className='font-size--12'>{fitnessActivity.user.age}</span>
						</p>
						<p className='flex flex--column font-size--12'>
							<span className='font-size--12'>Height</span>
							<span className='font-size--12'>
								{fitnessActivity.user.height}
								{''}Ftnew SMS text
							</span>
						</p>
					</div>
				</div>

				<p className='flex align-items--center text--grey-600 mt--25'>
					{' '}
					<span className='width--7px height--20px bg--grey-150 mr--15 ' />
					Daily Activates
				</p>
				<div className='p--20'>
					{fitnessActivity.activities.map((items) => {
						return (
							<div className='mb--10 flex'>
								<RightIcon className='width--16px fill--grey-50 mr--25' />
								<p className='text--grey-600 cursor--pointer'>
									{items.name}
									<hr className='width--full text--grey-50 mt--5 mb--5' />
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
