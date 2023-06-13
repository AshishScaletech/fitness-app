import React, { ReactNode, useState } from 'react';
// import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { Dashboard, Fitness } from '../icons/icons';

const Sidebar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => setIsOpen(!isOpen);
	const menuItem = [
		{
			path: '/',
			name: 'Dashboard',
			icon: <Dashboard className='width--20px height--20px ' />
		},
		{
			path: '/about',
			name: 'About',
			icon: 'icon-dashboard'
		},
		{
			path: '/analytics',
			name: 'Analytics',
			icon: 'icon-dashboard'
		},
		{
			path: '/comment',
			name: 'Comment',
			icon: 'icon-dashboard'
		},
		{
			path: '/product',
			name: 'Product',
			icon: 'icon-dashboard'
		},
		{
			path: '/productList',
			name: 'Product List',
			icon: 'icon-dashboard'
		}
	];

	const isActiveStyle = {
		background: 'lightskyblue',
		color: '#000'
	};
	return (
		<div style={{ width: isOpen ? '200px' : '70px' }} className='sidebar'>
			<div className='top_section'>
				<p style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
					Fitness
				</p>
				<div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='ml--15'>
					<p onClick={toggle}>
						<Fitness className='width--50px height--40px' />
					</p>
				</div>
			</div>
			{menuItem.map((item: any, index: number) => (
				<NavLink
					to={item.path}
					key={index}
					className='link text--black'
					style={({ isActive }) => (isActive ? isActiveStyle : {})}
				>
					<div className='icon'>{item.icon}</div>
					<div style={{ display: isOpen ? 'block' : 'none' }} className='text--black'>
						{item.name}
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Sidebar;
