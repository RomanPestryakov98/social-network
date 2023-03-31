import { getUsers, setFollowingThunk } from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function UsersContainer({ users, totalCount, currentPage, pageSize, setUsers, isFetching, followingInProgress, setFollowingThunk }) {

	useEffect(() => {
		setUsers(currentPage, pageSize);
		// eslint-disable-next-line
	}, [])

	function handlePage(currentPage) {
		setUsers(currentPage, pageSize);
	}

	function toggleFollowing(userId, isFollowing) {
		setFollowingThunk(userId, isFollowing);
	}

	return (
		<Users
			handlePage={handlePage}
			toggleFollowing={toggleFollowing}
			users={users}
			totalCount={totalCount}
			currentPage={currentPage}
			pageSize={pageSize}
			isFetching={isFetching}
			followingInProgress={followingInProgress}
		/>
	)

}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

let mapDispatchToProps = {
	setUsers: getUsers,
	setFollowingThunk
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(UsersContainer);



