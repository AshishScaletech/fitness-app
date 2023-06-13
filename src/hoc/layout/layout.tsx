import { PropsWithChildren } from 'react';
import Sidebar from 'shared/components/header/sidebar';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper'>
			<div id='page-wrapper' className='full--width flex'>
				<Sidebar />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
