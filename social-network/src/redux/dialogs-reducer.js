const UPDATE_DIALOG_MESSAGE = "UPDATE_DIALOG_MESSAGE";
const SEND_DIALOG_MESSAGE = "SEND_DIALOG_MESSAGE";

const initialState = {
	dialogsUsers: [
		{ name: 'Petr', id: 1 },
		{ name: 'Ivan', id: 2 },
		{ name: 'Roman', id: 3 },
		{ name: 'Alexey', id: 4 }
	],

	messages: [
		{ message: 'Hi', id: 1 },
		{ message: 'Hello', id: 2 },
		{ message: 'How are you', id: 3 },
		{ message: 'Good', id: 4 }
	],
	messageText: ''
};

function dialogsReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_DIALOG_MESSAGE: {
			return {
				...state,
				messageText: action.message
			}
		}
		case SEND_DIALOG_MESSAGE: {
			return {
				...state,
				messages: [...state.messages, { message: state.messageText, id: state.messages.length + 1 }],
				messageText: ''
			}
		}
		default: return state;
	}
}

export const actionUpdateDialogMessageCreator = (message) => ({ type: UPDATE_DIALOG_MESSAGE, message: message });

export const actionSendDialogMessageCreator = () => ({ type: SEND_DIALOG_MESSAGE });

export default dialogsReducer;