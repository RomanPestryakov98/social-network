import './User.css';
import React from 'react';
import photoUser from '../../../image/user.jpg';
import { NavLink } from 'react-router-dom';

function User({ dataUser, unFollow, follow }) {
	function onFollow() {
		follow(dataUser.id)
	}

	function onUnFollow() {
		unFollow(dataUser.id)
	}

	return (
		<div className="user">
			<div className='user__left'>
				<div className='user__avatar-container'>
					<NavLink to={`/profile/${dataUser.id}`}>
						<img src={dataUser.photos.small ? dataUser.photos.small : photoUser} alt='avatar' className='user__avatar' />
					</NavLink>
				</div>

				{dataUser.followed
					?
					<button onClick={onFollow} className='user__btn'>Отписаться</button>
					:
					<button onClick={onUnFollow} className='user__btn'>Подписаться</button>
				}
			</div>
			<div className='user__data'>
				<div>
					<h3 className='user__name'>{dataUser.name}</h3>
					<p className='user__status'>{dataUser.status}</p>
				</div>
				<div>
					<p className='user__location'>{'dataUser.location.country'},</p>
					<p className='user__location'>{'dataUser.location.city'}</p>
				</div>

			</div>
		</div>
	);
}

export default User;


