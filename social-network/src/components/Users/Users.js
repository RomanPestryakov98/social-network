import './Users.css';
import React from 'react';
import User from './User/User';

function Users({ usersPage, follow, unFollow }) {

	return (
		<div className="users">
			<h2>Пользователи</h2>
			{usersPage.users.map(u => {
				return <User key={u.id} dataUser={u} follow={follow} unFollow={unFollow} />
			})}
		</div>
	);
}

export default Users;


