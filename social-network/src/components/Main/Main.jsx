import Profile from '../Profile/Profile';
import './Main.css';

function Main() {
	return (
		<main className="App__main main">
			<div className="main__content">
				<img
					src="https://images.unsplash.com/photo-1675410541565-af66672ad1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt=""
				/>
			</div>
			<Profile />
			<div className="main__posts">
				My Posts
			</div>
		</main>
	);
}

export default Main;
