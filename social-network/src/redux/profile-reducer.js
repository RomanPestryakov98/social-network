const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";

const initialState = {
	posts: [
		{ avatar: null, message: 'message post1' },
		{ avatar: null, message: 'message post2' },
		{ avatar: null, message: 'message post3' }
	],
	textareaText: '',
};

function profileReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, { avatar: null, message: state.textareaText }],
				textareaText: ''

			}
		}
		case UPDATE_TEXTAREA: {
			return {
				...state,
				textareaText: action.message
			}
		}
		default: return state;
	}
}

export const actionAddPostCreator = () => ({ type: ADD_POST });

export const actionUpdateTextareaCreator = (message) => ({ type: UPDATE_TEXTAREA, message: message });

export default profileReducer;