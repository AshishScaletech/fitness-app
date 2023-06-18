import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from 'features/auth/container/login';
import ForgotPassword from 'features/auth/component/forgotPassword';
import ResetPassword from 'features/auth/component/resetPassword';

// import { IState } from 'shared/interface/state';
import Layout from 'hoc/layout/layout';
import DashboardDetails from 'features/fitness/container/dashboardDetails';
import ActivitiesDetails from 'features/fitness/component/activityDetails';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/dashboard' element={<DashboardDetails />} />
				<Route path='/activity/:activityId' element={<ActivitiesDetails />} />
				<Route path='*' element={<Navigate replace to='/dashboard' />} />
			</Routes>
		</Layout>
	);
};

export default App;
