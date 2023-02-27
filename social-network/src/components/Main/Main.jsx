import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import './Main.css';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';

function Main() {
	return (
		<main className="App__main main">
			<Routes>
				<Route path='/profile' element={<Profile />} />
				<Route path='/dialogs' element={<DialogsContainer />} />
				<Route path='/users' element={<UsersContainer />} />
			</Routes>
		</main>
	);
}

export default Main;
