import './Post.css';
import avatar from '../../../../image/avatar.jpg';

function Post(props) {
	return (
		<li className="post">
			<img src={avatar} className="post__avatar" alt='avatar' />
			<p className="post__message">{props.message}</p>
		</li>
	);
}

export default Post;


