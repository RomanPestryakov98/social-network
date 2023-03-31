import { actionAddPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

function MyPostsContainer(props) {
	function onSubmit(textarea) {
		props.actionAddPostCreator(textarea.post);

	}

	return (
		<MyPosts {...props} onSubmit={onSubmit} />
	)
}

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}


export default connect(mapStateToProps, { actionAddPostCreator })(MyPostsContainer);


