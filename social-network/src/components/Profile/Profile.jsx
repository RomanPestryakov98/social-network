import MyPostsContainer from './MyPosts/MyPostContainer';
import './Profile.css';

function Profile() {
	return (
		<div className="main__profile profile">
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
			<MyPostsContainer />
		</div>
	);
}

export default Profile;


