import { authAPI } from "../api/api";

const SET_AUTH = "SET_AUTH";
const SET_SUBMIT_ERROR = "SET_SUBMIT_ERROR";

const initialState = {
	login: null,
	id: null,
	email: null,
	isAuth: false
};

function authReducer(state = initialState, action) {
	switch (action.type) {
		case SET_AUTH: {
			return {
				...state,
				...action.data,
			}
		}

		default: return state;
	}
}

//ACTIONS CREATE
export const setAuth = (data) => ({ type: SET_AUTH, data });
export const setSubmitError = (submitError) => ({ type: SET_SUBMIT_ERROR, submitError });

//THUNK
export const getAuth = () => async (dispatch) => {
	let response = await authAPI.getAuth();

	if (response.resultCode === 0) {
		dispatch(setAuth({ login: response.data.login, id: response.data.id, email: response.data.email, isAuth: true }));
	}

}

export const login = (data) => async (dispatch) => {
	let response = await authAPI.login(data)

	if (response.resultCode === 0) {
		dispatch(getAuth());
	}
	else {
		return Promise.resolve(response)
	}

}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout();

	if (response.resultCode === 0) {
		dispatch(setAuth({ login: null, id: null, email: null, isAuth: false }));
	}

}


export default authReducer;