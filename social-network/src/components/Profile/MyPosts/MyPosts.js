import './MyPosts.css';
import Post from './Post/Post';
import React from 'react';
import TextareaForm from '../../TextareaForm/TextareaForm';

function MyPosts({ profilePage, onSubmit }) {
	return (
		<div className="my-posts">
			<h2 className="my-posts__title">Мои посты</h2>
			<TextareaForm type='post' onSubmit={onSubmit} />

			<ul className="my-posts__list">
				{profilePage.posts.map((post, index) => <Post key={index} avatar={post.avatar} message={post.message} />)}
			</ul>
		</div>
	);
}

export default MyPosts;


