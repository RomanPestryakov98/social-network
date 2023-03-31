import { Route, Routes } from 'react-router-dom';
import './Main.css';
import React, { Suspense, lazy } from 'react';
import Preloader from '../common/Preloader/Preloader';

const UsersContainer = lazy(() => import('../Users/UsersContainer'));
const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('../Profile/ProfileContainer'));
const Login = lazy(() => import('../Login/Login'));

function Main() {
	return (
		<main className="App__main main">
			<Suspense fallback={<div><Preloader /></div>}>
				<Routes>
					<Route path='/profile' element={<ProfileContainer />}>
						<Route path=':userId' element={<ProfileContainer />} />
					</Route>
					<Route path='/dialogs' element={<DialogsContainer />} />
					<Route path='/users' element={<UsersContainer />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Suspense>
		</main >
	);
}

export default Main;
