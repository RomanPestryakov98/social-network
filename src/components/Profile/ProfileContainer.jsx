import { getUserProfile, getUserStatus, updateUserStatusThunk, savePhoto, updateProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Profile from './Profile';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfileSelector, getProfileStatusSelector } from '../../redux/profile-selectors';

function ProfileContainer({ setUserProfile, setUserStatus, updateUserStatusThunk, updateProfile, savePhoto, ...props }) {
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
	}, [params.userId])


	function onUpdateStatus(status) {
		updateUserStatusThunk(status)
	}

	function onUpdateProfile(data) {
		return updateProfile(data);
	}

	return (
		<Profile {...props} isOwner={!!params.userId} onUpdateStatus={onUpdateStatus} savePhoto={savePhoto} onUpdateProfile={onUpdateProfile} />
	)
}

let mapStateToProps = (state) => {
	return {
		profile: getProfileSelector(state),
		status: getProfileStatusSelector(state),
	}
}

export default compose(
	connect(mapStateToProps, { setUserProfile: getUserProfile, setUserStatus: getUserStatus, updateUserStatusThunk, savePhoto, updateProfile }),
	withAuthRedirect,
)(ProfileContainer);



