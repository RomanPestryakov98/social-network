import { getAuth, logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';

function HeaderContainer({ setAuth, ...props }) {
	function onLogout() {
		props.logout();
	}

	return (
		<Header {...props} onLogout={onLogout} />
	)

}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	}
}

export default connect(mapStateToProps, { setAuth: getAuth, logout })(HeaderContainer);



