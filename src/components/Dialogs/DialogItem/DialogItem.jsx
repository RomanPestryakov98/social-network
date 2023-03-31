import './DialogItem.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
	return (
		<li className='dialogs-container__dialog'>
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</li>
	)
}

export default DialogItem;
