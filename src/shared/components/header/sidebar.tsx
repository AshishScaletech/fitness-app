import React, { ReactNode, useState } from 'react';
// import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import './sidebar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dashboard, Fitness } from '../icons/icons';

const Sidebar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => setIsOpen(!isOpen);

	const navigate = useNavigate();
	const menuItem = [
		{
			path: '/',
			name: 'Dashboard',
			icon: <Dashboard className='width--20px height--20px ' />
		}
	];

	const isActiveStyle = {
		background: 'lightskyblue',
		color: '#000'
	};
	return (
		<div
			style={{ width: isOpen ? '200px' : '70px' }}
			className='sidebar border--gry-50 flex align-items--center flex--column justify-content--start'
		>
			<div className='top_section flex align-items--center justify-content--center' onClick={toggle}>
				<Fitness className='width--50px height--40px' />
			</div>
			{menuItem.map((item: any, index: number) => (
				<NavLink
					to={item.path}
					key={index}
					onClick={() => {
						navigate('/navigate');
					}}
					className='link flex justify-content--center'
					style={({ isActive }) => (isActive ? isActiveStyle : {})}
				>
					<div className='icon st'>{item.icon}</div>
					<div style={{ display: isOpen ? 'block' : 'none' }} className='width--full'>
						{item.name}
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Sidebar;
