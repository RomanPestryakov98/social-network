import { getAuth } from "./auth-reducer";

const INITIALIZES_SUCCESS = "INITIALIZES_SUCCESS";

const initialState = {
	initializedSuccess: false
};

function appReducer(state = initialState, action) {
	switch (action.type) {
		case INITIALIZES_SUCCESS: {
			return {
				...state,
				initializedSuccess: true
			}
		}

		default: return state;
	}
}

//ACTIONS CREATE
export const initializedSuccess = () => ({ type: INITIALIZES_SUCCESS });

//THUNK
export const initializeApp = () => (dispatch) => {
	let promise1 = dispatch(getAuth());
	Promise.all([promise1])
		.then(() => {
			dispatch(initializedSuccess());
		})
}

export default appReducer;