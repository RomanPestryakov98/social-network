import { followAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (id) => {
			dispatch(followAC(id))
		},
		unFollow: (id) => {
			dispatch(unfollowAC(id))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;


