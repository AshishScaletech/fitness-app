import React, { useMemo, useState } from 'react';
import { IActivity, IFitness } from '../interface/interface';
import { useParams } from 'react-router-dom';
import { DATA } from 'shared/constants/constants';
import UserProfile from './userProfile';
import {
	HeartIcon,
	CaloriesIcon,
	ClockIcon,
	LocationIcon,
	RunIcon,
	HandIcon,
	DistanceIcon
} from 'shared/components/icons/icons';
import workout from '../../../assets/images/workoutimg.jpg';

const ActivitiesDetails: React.FC = () => {
	const params = useParams();
	const currentData = DATA.activities.filter((item) => item.id === params.activityId && item);
	const data = currentData[0];

	return (
		<div className='width--full dashboard-wrapper flex border-radius--lg'>
			<div className='width--70 ml--200'>
				<div className='energy-chart--wrapper bg--white'>
					<p className='mb--10 font-size--22 font--bold text--grey-600'>Daily User Activity Detail</p>

					<div className='image-container'>
						<img
							src={workout}
							alt=''
							className='width--full height--full border-radius--24 object-fit--cover'
						/>
						<div className='after' />
					</div>
					<p className='flex align-items--center text--grey-600 mt--20'>
						{' '}
						<span className='width--7px height--20px bg--grey-150 mr--15 ' />
						{data.name}
					</p>
					<div className='flex flex--wrap justify-content--around width--full text--center'>
						<div className='activity-data width--15 mt--15'>
							<span className=' mt--10 text-align--center'>
								<CaloriesIcon className='width--24px height--24px fill--black' />
							</span>
							<p className='mb--15 mt--15 font-size--22 font--bold'>{data.calories_burned} cal</p>
							<p className='font-size--12'>{data.date}</p>
							<p className='mb--10'>Calories_burned</p>
						</div>

						<div className='activity-data width--15 mt--15'>
							<span className=' text-align--center'>
								<ClockIcon className='width--24px height--24px fill--black' />
							</span>
							<p className='mt--15 mb--15 font-size--22 font--bold'>{data.duration} min</p>
							<p className='font-size--12'>{data.date}</p>
							<p className='mb--10'>Duraction</p>
						</div>

						{data.distance && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<DistanceIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>{data.distance} km</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Distance</p>
							</div>
						)}

						{data.steps && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<RunIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>{data.steps} steps</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Steps</p>
							</div>
						)}

						<div className='activity-data width--15 mt--15'>
							<span className=' text-align--center'>
								<HeartIcon className='width--24px height--24px fill--black' />
							</span>
							<p className='mb--15 mt--15 font-size--22 font--bold'>
								<p className='mt--10'>Average : {data.heart_rate.average} beats</p>
								<p className='mb--10'>Max : {data.heart_rate.max} beats</p>
							</p>
							<p className='font-size--12'>{data.date}</p>
							<p className='mb--10'>HeartRate</p>
						</div>

						{data.pace && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>
									<p className='mt--10'>Average : {data.pace?.average}/km</p>
									<p className='mb--10'>Best : {data.pace?.best}/km</p>
								</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Pace</p>
							</div>
						)}

						{data.elevation_gain && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>{data.elevation_gain}</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Elevation_gain</p>
							</div>
						)}

						{data.speed && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>
									<p className='mt--10'>Average : {data.speed.average}</p>
									<p className='mb--10'>Max : {data.speed.max}</p>
								</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Speed</p>
							</div>
						)}
						{data.reps && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>
									<p className='mt--10'>Average : {data.reps.average_per_set}</p>
									<p className=''>Sets : {data.reps.sets}</p>
									<p className='mb--10'>Total : {data.reps.total}</p>
								</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Reps</p>
							</div>
						)}

						{data.weight_lifted && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>
									<p className='mt--10'>Average : {data.weight_lifted.average_per_rep}</p>
									<p className='mb--10'>Total : {data.weight_lifted.total}</p>
								</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Weight_lifted</p>
							</div>
						)}
						{data.laps && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>{data.laps}</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Laps</p>
							</div>
						)}
						{data.pool_length && (
							<div className='activity-data width--15 mt--15'>
								<span className=' text-align--center'>
									<HandIcon className='width--24px height--24px fill--black' />
								</span>
								<p className='mb--15 mt--15 font-size--22 font--bold'>{data.pool_length}</p>
								<p className='font-size--12'>{data.date}</p>
								<p className='mb--10'>Pool_length</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<UserProfile fitnessActivity={DATA} />
		</div>
	);
};

export default ActivitiesDetails;
