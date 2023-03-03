const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
	posts: [
		{ avatar: null, message: 'message post1' },
		{ avatar: null, message: 'message post2' },
		{ avatar: null, message: 'message post3' }
	],
	textareaText: '',
	profile: null
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

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}

		default: return state;
	}
}

export const actionAddPostCreator = () => ({ type: ADD_POST });

export const actionUpdateTextareaCreator = (message) => ({ type: UPDATE_TEXTAREA, message: message });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;