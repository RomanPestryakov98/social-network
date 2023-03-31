import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import profileReducer from '../redux/profile-reducer';
import dialogsReducer from '../redux/dialogs-reducer';
import usersReducer from '../redux/users-reducer';
import authReducer from '../redux/auth-reducer';
import appReducer from '../redux/app-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers(
	{
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		usersPage: usersReducer,
		auth: authReducer,
		app: appReducer
	}
);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;