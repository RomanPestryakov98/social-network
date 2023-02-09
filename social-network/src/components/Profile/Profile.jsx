import './Profile.css';

function Profile() {
	return (
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
	);
}

export default Profile;


