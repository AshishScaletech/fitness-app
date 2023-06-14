import React from 'react';
import { IActivity, IFitness } from '../interface/interface';
import ReactApexChart from 'react-apexcharts';

import ProfileImg from '../../../assets/images/profile-img.jpg';

interface IProps {
	fitnessActivity: IFitness;
}

const Dashboard: React.FC<IProps> = (props) => {
	const { fitnessActivity } = props;
	const Activities = () => {
		fitnessActivity.activities.map((activity: IActivity) => activity);
	};
	// const options: any = {
	// 	chart: {
	// 		type: 'radialBar',
	// 		offsetY: -20,
	// 		sparkline: {
	// 			enabled: true
	// 		}
	// 	},
	// 	plotOptions: {
	// 		radialBar: {
	// 			startAngle: -90,
	// 			endAngle: 90,
	// 			track: {
	// 				background: '#e7e7e7',
	// 				strokeWidth: '97%',
	// 				margin: 5, // margin is in pixels
	// 				dropShadow: {
	// 					enabled: true,
	// 					top: 2,
	// 					left: 0,
	// 					color: '#999',
	// 					opacity: 1,
	// 					blur: 2
	// 				}
	// 			},
	// 			dataLabels: {
	// 				name: {
	// 					show: false
	// 				},
	// 				value: {
	// 					offsetY: -2,
	// 					fontSize: '22px'
	// 				}
	// 			}
	// 		}
	// 	},
	// 	grid: {
	// 		padding: {
	// 			top: -10
	// 		}
	// 	},
	// 	fill: {
	// 		type: 'gradient',
	// 		gradient: {
	// 			shade: 'light',
	// 			shadeIntensity: 0.4,
	// 			inverseColors: false,
	// 			opacityFrom: 1,
	// 			opacityTo: 1,
	// 			stops: [0, 50, 53, 91]
	// 		}
	// 	},
	// 	labels: ['Average Results']
	// };
	// const series = [76];
	return (
		<div className='width--full dashboard-wrapper flex'>
			<div className='favorite-wrapper width--70 '>
				<p className='mb--16 font-size--24 font--medium'>Fitness Activity</p>
				<p className='font-size--default mb--35 text--grey-100 font--light'>
					Physical activity is defined as any bodily movement produced by skeletal muscles that results in
					energy expenditure. The energy expenditure can be measured in kilocalories. Physical activity in
					daily life can be categorized into occupational, sports, conditioning, household, or other
					activities.
				</p>
				<div className='favorite width--full'>
					<p className='flex align-items--center text--grey-600 mb--20'>
						{' '}
						<span className='width--7px height--20px bg--grey-150 mr--15 ' />
						Favorite
					</p>
					<div className='flex justify-content--between'>
						<div className='heart-chart width--32'>heart</div>
						<div className='heart-chart width--32'>calorie</div>
						<div className='heart-chart width--32'>distance</div>
					</div>
				</div>
				<div className='activity-wrapper width--full'>
					<div className='activity'>
						<p>Activity</p>
						<div className='flex justify-content--between'>
							<div className='activity-detail width--58'>chart</div>
							<div className='activity-list width--40'>list of activity</div>
						</div>
					</div>
				</div>
			</div>
			<div className='profile width--30 bg--white p--20'>
				<p className='flex align-items--center text--grey-600 mb--20'>
					{' '}
					<span className='width--7px height--20px bg--grey-150 mr--15 ' />
					profile
				</p>
				<div className='flex align-items--center justify-content--center width--full'>
					<div className='profile-img__wrapper border-radius--half '>
						<img
							src={ProfileImg}
							alt='profile'
							className='width--full height--full border-radius--half object-fit--cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
