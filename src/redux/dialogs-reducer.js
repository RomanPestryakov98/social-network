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
	]
};

function dialogsReducer(state = initialState, action) {
	switch (action.type) {
		case SEND_DIALOG_MESSAGE: {
			return {
				...state,
				messages: [...state.messages, { message: action.message, id: state.messages.length + 1 }],
			}
		}
		default: return state;
	}
}

export const actionSendDialogMessageCreator = (message) => ({ type: SEND_DIALOG_MESSAGE, message });

export default dialogsReducer;