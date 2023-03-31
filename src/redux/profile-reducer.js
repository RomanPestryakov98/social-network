import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const FAKE = "FAKE";

const initialState = {
	posts: [
		{ avatar: null, message: 'message post1' },
		{ avatar: null, message: 'message post2' },
		{ avatar: null, message: 'message post3' }
	],
	profile: null,
	status: '',
	fake: 10
};

function profileReducer(state = initialState, action) {
	switch (action.type) {
		case FAKE: {
			return { ...state, fake: state.fake + 1 }
		}

		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, { avatar: null, message: action.textarea }],
			}
		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}

		case SET_USER_STATUS: {
			return {
				...state,
				status: action.status === null ? '' : action.status
			}
		}

		default: return state;
	}
}

//ACTIONS CREATE
export const actionAddPostCreator = (textarea) => ({ type: ADD_POST, textarea });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

//THUNK
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getUserProfile(userId)

	dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getUserStatus(userId)

	dispatch(setUserStatus(response));
}

export const updateUserStatusThunk = (status) => async (dispatch) => {
	let response = await profileAPI.updateUserStatus(status);

	dispatch(setUserStatus(response));
}

export default profileReducer;