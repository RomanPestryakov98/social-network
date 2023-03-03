import { follow, unFollow, setUsers, setCurrentPage, setTotalCountUsers, setIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';

function UsersContainer({ users, totalCount, currentPage, pageSize, follow, unFollow, setUsers, setCurrentPage, setTotalCountUsers, setIsFetching, isFetching }) {
	useEffect(() => {
		setIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
			.then(res => {
				setIsFetching(false);
				setUsers(res.data.items);
				setTotalCountUsers(res.data.totalCount)
			})
		// eslint-disable-next-line
	}, [])

	function handlePage(pageCurrent) {
		setCurrentPage(Number(pageCurrent));
		setIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageCurrent}&count=${pageSize}`)
			.then(res => {
				setIsFetching(false);
				setUsers(res.data.items);
			})
	}

	return (
		<Users
			handlePage={handlePage}
			follow={follow}
			unFollow={unFollow}
			users={users}
			totalCount={totalCount}
			currentPage={currentPage}
			pageSize={pageSize}
			isFetching={isFetching}
		/>
	)

}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		isFetching: state.usersPage.isFetching
	}
}

let mapDispatchToProps = {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setTotalCountUsers,
	setIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



