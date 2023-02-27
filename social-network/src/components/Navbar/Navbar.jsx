import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="App__nav nav">
			<ul className="nav__list">
				<li className="nav__item">
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/dialogs">Dialogs</NavLink>
				</li>
				<li className="nav__item">
					<NavLink to="/news">News</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;


