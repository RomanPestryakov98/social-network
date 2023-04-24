import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const UPDATE_PROFILE = "UPDATE_PROFILE";

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

		case SAVE_PHOTO_SUCCESS: {

			return {
				...state,
				profile: { ...state.profile, photos: action.photoFile }
			}
		}

		case UPDATE_PROFILE: {

			return {
				...state,
				profile: action.data
			}
		}

		default: return state;
	}
}

//ACTIONS CREATE
export const actionAddPostCreator = (textarea) => ({ type: ADD_POST, textarea });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const savePhotoSuccess = (photoFile) => ({ type: SAVE_PHOTO_SUCCESS, photoFile });

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

export const savePhoto = (photoFile) => async (dispatch) => {
	let response = await profileAPI.savePhoto(photoFile);

	if (response.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.photos));
		return Promise.resolve(response);
	}
	else {
		return Promise.reject(response)
	}
}

export const updateProfile = (data) => async (dispatch, getState) => {
	let response = await profileAPI.updateProfile(data);
	const userId = getState().auth.id;

	if (response.resultCode === 0) {
		dispatch(getUserProfile(userId));
		return Promise.resolve(response);
	}
	else {
		return Promise.reject(response)
	}
}

export default profileReducer;