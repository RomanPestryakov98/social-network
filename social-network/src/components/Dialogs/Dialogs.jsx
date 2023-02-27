import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

function Dialogs(props) {
	function onUpdateDialogMessage(e) {
		props.onUpdateDialogMessage(e.target.value);
	}

	function sendMessage() {
		props.onSendMessage()
	}

	return (
		<div className='dialogs-container'>
			<ul className='dialogs-container__dialogs'>
				{props.dialogsPage.dialogsUsers.map((user) => <DialogItem name={user.name} key={user.id} />)}
			</ul>
			<ul className='dialogs-container__messages messages'>
				{props.dialogsPage.messages.map((message) => <Messages message={message.message} key={message.id} />)}
				<div className='dialogs-container__new-message'>
					<textarea onChange={onUpdateDialogMessage} value={props.dialogsPage.messageText} />
				</div>
				<div>
					<button onClick={sendMessage} className='dialogs-container__send-new-message'>Отправить сообщение</button>
				</div>
			</ul>

		</div>
	);
}

export default Dialogs;
