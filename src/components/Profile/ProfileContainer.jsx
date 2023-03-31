import { getUserProfile, getUserStatus, updateUserStatusThunk } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Profile from './Profile';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfileSelector, getProfileStatusSelector } from '../../redux/profile-selectors';

function ProfileContainer({ setUserProfile, setUserStatus, updateUserStatusThunk, ...props }) {
	const params = useParams();
	useEffect(() => {
		if (props.auth.isAuth && !params.userId) {
			setUserProfile(props.auth.id);
			setUserStatus(props.auth.id);
		}
		else {
			setUserProfile(params.userId);
			setUserStatus(params.userId);
		}
		// eslint-disable-next-line
	}, [])


	function onUpdateStatus(status) {
		updateUserStatusThunk(status)
	}
	return (
		<Profile {...props} onUpdateStatus={onUpdateStatus} />
	)
}

let mapStateToProps = (state) => {
	return {
		profile: getProfileSelector(state),
		status: getProfileStatusSelector(state),
	}
}

export default compose(
	connect(mapStateToProps, { setUserProfile: getUserProfile, setUserStatus: getUserStatus, updateUserStatusThunk }),
	withAuthRedirect,
)(ProfileContainer);



