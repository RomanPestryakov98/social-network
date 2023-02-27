import { actionAddPostCreator, actionUpdateTextareaCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onChangeTextarea: (text) => {
			dispatch(actionUpdateTextareaCreator(text))
		},
		onAddPost: () => {
			dispatch(actionAddPostCreator())
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


