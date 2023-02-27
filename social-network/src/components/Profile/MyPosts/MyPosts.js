import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts({ profilePage, onAddPost, onChangeTextarea }) {
	const refPost = React.useRef();

	function addPost() {
		if (refPost.current.value !== '') {
			onAddPost();
		}
	}

	function changeTextarea() {
		onChangeTextarea(refPost.current.value);
	}

	return (
		<div className="my-posts">
			<h2 className="my-posts__title">Мои посты</h2>
			<div>
				<textarea onChange={changeTextarea} ref={refPost} value={profilePage.textareaText} />
			</div>
			<button className='my-posts__add-post' onClick={addPost}>Добавить пост</button>
			<ul className="my-posts__list">
				{profilePage.posts.map((post, index) => <Post key={index} avatar={post.avatar} message={post.message} />)}
			</ul>
		</div>
	);
}

export default MyPosts;


