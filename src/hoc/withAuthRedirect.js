import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
	return {
		auth: state.auth,
	}
}

export const withAuthRedirect = (Component) => {
	function RedirectComponent(props) {
		return (
			props.auth.isAuth ? <Component {...props} /> : <Navigate to='/login' />
		)
	}
	return connect(mapStateToPropsForRedirect)(RedirectComponent);
}