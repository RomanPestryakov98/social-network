import MyPostsContainer from './MyPosts/MyPostContainer';
import './Profile.css';
import photoUser from '../../image/user.jpg';

function Profile(props) {
	console.log(props?.profile?.photos?.small)
	return (
		<div className="main__profile profile">
			<div className="profile__data">
				<h2 className="profile__name">{props?.profile?.fullName}</h2>
				<div className="profile__img">
					<img src={props?.profile?.photos?.small ? props?.profile?.photos?.small : photoUser} alt='avatar' />
				</div>
				{/* <ul className="profile__data-list">
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
				</ul> */}
			</div>
			<MyPostsContainer />
		</div>
	);
}

export default Profile;


