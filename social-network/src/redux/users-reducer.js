const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
	users: [],
	totalCount: 0,
	currentPage: 1,
	pageSize: 10,
	isFetching: false
};

function usersReducer(state = initialState, action) {

	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: false }
					}
					return u;
				})

			}
		}

		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: true }
					}
					return u;
				})

			}
		}

		case SET_USERS: {

			return {
				...state,
				users: [...action.users]
			}
		}

		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.page
			}
		}

		case SET_TOTAL_COUNT_USERS: {
			return {
				...state,
				totalCount: action.totalCount
			}
		}

		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}

		default: return state;
	}
}

export const follow = (id) => ({ type: FOLLOW, id });

export const unFollow = (id) => ({ type: UNFOLLOW, id });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });

export const setTotalCountUsers = (totalCount) => ({ type: SET_TOTAL_COUNT_USERS, totalCount });

export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;