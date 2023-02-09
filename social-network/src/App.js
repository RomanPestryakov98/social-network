import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App__header">
				<img src="https://images.unsplash.com/photo-1543682704-15adeb008ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80" alt="logo" className="logo" />
			</header>
			<nav className="App__nav nav">
				<ul className="nav__list">
					<li className="nav__item">Profile</li>
					<li className="nav__item">Message</li>
					<li className="nav__item">News</li>
					<li className="nav__item">Music</li>
					<li className="nav__item">Settings</li>
				</ul>
			</nav>
			<main className="App__main main">
				<div className="main__content">
					<img
						src="https://images.unsplash.com/photo-1675410541565-af66672ad1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt=""
					/>
				</div>
				<div className="main__profile profile">
					<div className="profile__img-container">
						<img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1443&q=80" alt="" className="profile__avatar" />
					</div>
					<div className="profile__data">
						<h2 className="profile__name">Roman</h2>
						<ul className="profile__data-list">
							<li className="profile__item">
								День Рождения:
								<span>27 января</span>
							</li>
							<li className="profile__item">
								Город:
								<span>Москва</span>
							</li>
							<li className="profile__item">
								Образование:
								<span>Высшее</span>
							</li>
							<li className="profile__item">
								Веб-сайт:
								<span>https://github.com/RomanPestryakov98</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="main__posts">
					My Posts
				</div>
			</main>
		</div>
	);
}

export default App;
