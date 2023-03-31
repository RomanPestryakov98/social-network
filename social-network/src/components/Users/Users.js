import './Users.css';
import React from 'react';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
//import Pagination from '../common/Pagination/Pagination';
import { Pagination } from 'antd';

function Users(props) {
	console.log(props.currentPage)
	const listUsers = props.users.map(u => {
		return <User key={u.id} dataUser={u} toggleFollowing={props.toggleFollowing} followingInProgress={props.followingInProgress} />
	})
	return (
		<div className="users">
			<h2>Пользователи</h2>
			<Pagination current={props.currentPage} total={props.totalCount} onChange={props.handlePage} hideOnSinglePage={true} showSizeChanger={false} showQuickJumper={true} />
			{props.isFetching ? <Preloader /> : listUsers}
		</div>
	);
}

export default Users;


