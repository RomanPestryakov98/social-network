const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
	users: [
		{ id: 1, followed: false, fullName: 'Roman', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' } },
		{ id: 1, followed: true, fullName: 'Roman', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' } },
		{ id: 1, followed: false, fullName: 'Roman', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' } },
	],
};

function usersReducer(state = initialState, action) {
	switch (action.type) {
		case FOLLOW: {
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

		case UNFOLLOW: {
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

		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		}

		default: return state;
	}
}

export const followAC = (id) => ({ type: FOLLOW, id });

export const unfollowAC = (id) => ({ type: UNFOLLOW, id });

export const setUsers = (users) => ({ type: UNFOLLOW, users });

export default usersReducer;