import React, { useMemo, useState } from 'react';
import { IFitness } from '../interface/interface';
import ProfileImg from '../../../assets/images/profile-img.jpg';
import { RightIcon } from 'shared/components/icons/icons';
import { useNavigate } from 'react-router-dom';

interface IProps {
	fitnessActivity: IFitness;
}
const UserProfile: React.FC<IProps> = (props) => {
	const { fitnessActivity } = props;

	const navigate = useNavigate();

	return (
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
				<p className='font-size--22 mt--22'>{fitnessActivity.user.name}</p>
				<p className='font-size--default text--grey-100 mt--5'>{fitnessActivity.user.email}</p>
				<div className='flex mt--15 bg--primary border-radius--md p--10 width--full justify-content--around'>
					<p className='flex flex--column font-size--12'>
						<span className='font-size--lg'>Age</span>
						<span className='font-size--lg'>{fitnessActivity.user.age}</span>
					</p>
					<p className='flex flex--column font-size--12'>
						<span className='font-size--lg'>Height</span>
						<span className='font-size--lg'>
							{fitnessActivity.user.height}
							{''} cm
						</span>
					</p>
					<p className='flex flex--column align-items--center font-size--12'>
						<span className='font-size--lg'>Weight</span>
						<span className='font-size--lg'>{fitnessActivity.user.weight} Kg</span>
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
						<div className='mb--10 flex' onClick={() => navigate(`/activity/${items.id}`)}>
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
	);
};

export default UserProfile;
