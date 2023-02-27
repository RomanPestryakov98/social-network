import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';

let reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogsReducer

	}
);

let store = createStore(reducers);

export default store;