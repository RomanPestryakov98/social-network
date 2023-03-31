import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ avatar: null, message: 'message post1' },
				{ avatar: null, message: 'message post2' },
				{ avatar: null, message: 'message post3' }
			],
			textareaText: '',
		},
		dialogsPage: {
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
		}
	},

	_rerenderEntireThree() {
		console.log('observer');
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._rerenderEntireThree = observer;
	},

	dispatch(action) {
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._rerenderEntireThree(this._state);
	}

}

export default store;