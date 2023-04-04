import MyPostsContainer from './MyPosts/MyPostContainer';
import './Profile.css';
import photoUser from '../../image/user.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useParams } from "react-router-dom";


function Profile(props) {
	const params = useParams();
	return (
		<div className="main__profile profile">
			12412412412
			<div className="profile__data">
				<h2 className="profile__name">{props?.profile?.fullName}</h2>
				<div className="profile__img">
					<img src={props?.profile?.photos?.small ? props?.profile?.photos?.small : photoUser} alt='avatar' />
				</div>

				<ProfileStatus {...props} />
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
			{!params.userId && <MyPostsContainer />}

		</div>
	);
}

export default Profile;


