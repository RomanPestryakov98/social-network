import './Messages.css';

function Messages(props) {
	return (
		<li className='messages__item'>
			{props.message}
		</li>
	)
}

export default Messages;
