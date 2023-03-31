import './User.css';
import React from 'react';
import photoUser from '../../../image/user.jpg';
import { NavLink } from 'react-router-dom';

function User({ dataUser, toggleFollowing, followingInProgress }) {
	const btnDisabledClass = 'user__btn_disabled';
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
					<button disabled={followingInProgress.some(id => id === dataUser.id)} onClick={() => { toggleFollowing(dataUser.id, true) }} className={`user__btn ${followingInProgress.some(id => id === dataUser.id) ? btnDisabledClass : ''}`}>Отписаться</button>
					:
					<button disabled={followingInProgress.some(id => id === dataUser.id)} onClick={() => { toggleFollowing(dataUser.id, false) }} className={`user__btn ${followingInProgress.some(id => id === dataUser.id) ? btnDisabledClass : ''}`}>Подписаться</button>
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


