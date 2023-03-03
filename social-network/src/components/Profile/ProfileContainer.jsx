import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile';
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
	const params = useParams();
	useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
			.then(res => {
				props.setUserProfile(res.data);
			})
		// eslint-disable-next-line
	}, [])

	return (
		<Profile {...props} />
	)

}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);



