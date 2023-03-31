import { usersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGGRESS = 'TOGGLE_FOLLOWING_IN_PROGGRESS';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

const initialState = {
	users: [],
	totalCount: 0,
	currentPage: 1,
	pageSize: 10,
	isFetching: false,
	followingInProgress: []
};

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_FOLLOWING: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: !u.followed }
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

		case TOGGLE_FOLLOWING_IN_PROGGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					?
					[...state.followingInProgress, action.usersId]
					:
					state.followingInProgress.filter(id => id !== action.usersId)
			}
		}

		default: return state;
	}
}


//CREATE ACTIONS
export const toggleFollowing = (id, isFollowing) => ({ type: TOGGLE_FOLLOWING, id, isFollowing });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });

export const setTotalCountUsers = (totalCount) => ({ type: SET_TOTAL_COUNT_USERS, totalCount });

export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const setFollowingInProgress = (isFetching, usersId) => ({ type: TOGGLE_FOLLOWING_IN_PROGGRESS, isFetching, usersId });

//THUNK
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setCurrentPage(currentPage));
	dispatch(setIsFetching(true));

	let response = await usersAPI.getUsers(currentPage, pageSize)

	dispatch(setCurrentPage(currentPage));
	dispatch(setIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalCountUsers(response.totalCount));
}

export const setFollowingThunk = (userId, isFollowing) => async (dispatch) => {
	dispatch(setFollowingInProgress(true, userId));

	if (isFollowing) {
		await usersAPI.deleteFollowingOnUser(userId)
	}
	else {
		await usersAPI.setFollowingOnUser(userId)
	}

	dispatch(toggleFollowing(userId));
	dispatch(setFollowingInProgress(false, userId));
}


export default usersReducer;