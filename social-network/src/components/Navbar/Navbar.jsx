import './Navbar.css';

function Navbar() {
	return (
		<nav className="App__nav nav">
			<ul className="nav__list">
				<li className="nav__item">Profile</li>
				<li className="nav__item">Message</li>
				<li className="nav__item">News</li>
				<li className="nav__item">Music</li>
				<li className="nav__item">Settings</li>
			</ul>
		</nav>
	);
}

export default Navbar;


