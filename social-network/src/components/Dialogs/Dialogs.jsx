import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import TextareaForm from '../TextareaForm/TextareaForm';

function Dialogs({ onSubmit, dialogsPage }) {
	return (
		<div className='dialogs-container'>
			<ul className='dialogs-container__dialogs'>
				{dialogsPage.dialogsUsers.map((user) => <DialogItem name={user.name} key={user.id} />)}
			</ul>
			<ul className='dialogs-container__messages messages'>
				{dialogsPage.messages.map((message) => <Messages message={message.message} key={message.id} />)}
				<TextareaForm type='dialogs' onSubmit={onSubmit} />
			</ul>

		</div>
	);
}

export default Dialogs;
