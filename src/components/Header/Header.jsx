import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<header className="header">
			<div>
				<img src="https://images.unsplash.com/photo-1543682704-15adeb008ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80" alt="logo" className="logo" />
			</div>
			<div>
				{props.isAuth
					?
					<div className='header__actions'>
						<p className='header__login'>{props.login}</p>
						<button onClick={() => { props.onLogout() }} className='header__logout'>Выйти</button>
					</div>
					:
					<Link to="/profile" />
				}
			</div>

		</header>
	);
}

export default Header;
