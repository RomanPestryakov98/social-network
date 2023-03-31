import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="App__nav nav">
			<ul className="nav__list">
				<li className="nav__item">
					<NavLink to="/profile">Мой профиль</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/dialogs">Диалоги</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/users">Пользователи</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;


