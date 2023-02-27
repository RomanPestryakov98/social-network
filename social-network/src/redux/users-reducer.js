const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
	users: [
		{ id: 1, avatar: 'https://www.1zoom.ru/big2/500/289596-frederika.jpg', followed: false, fullName: 'Roman', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' } },
		{ id: 2, avatar: 'https://www.1zoom.ru/big2/500/289596-frederika.jpg', followed: true, fullName: 'Roman', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' } },
		{ id: 3, avatar: 'https://www.1zoom.ru/big2/500/289596-frederika.jpg', followed: false, fullName: 'Roman', status: 'I am a boss', location: { country: 'Russia', city: 'Moscow' } },
	],
};

function usersReducer(state = initialState, action) {
	console.log('!')
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