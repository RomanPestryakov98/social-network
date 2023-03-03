import './Users.css';
import React from 'react';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';

function Users(props) {
	const paginationSize = Math.ceil(props.totalCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= paginationSize; i++) {
		pages.push(i);
	}

	return (
		<div className="users">
			<h2>Пользователи</h2>
			{props.isFetching ? <Preloader /> : null}
			<ul className='users__pagination'>
				{pages.map((p, index) => {
					return <li onClick={() => { props.handlePage(p) }} className={`users__page ${props.currentPage === index + 1 ? 'users__page_active' : ''}`} key={index}>{p}</li>
				})}
			</ul>
			{props.users.map(u => {
				return <User key={u.id} dataUser={u} follow={props.follow} unFollow={props.unFollow} />
			})}
		</div>
	);
}

export default Users;


