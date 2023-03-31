import HeaderContainer from '../Header/HeaderContainer';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import './App.css';
import React, { useEffect } from 'react';
import { initializeApp } from '../../redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';

function App(props) {
	useEffect(() => {
		props.initializeApp();
		// eslint-disable-next-line
	}, [])

	return (
		<>
			{!props.initializedSuccess
				?
				<Preloader />
				:
				< div className="App" >
					<HeaderContainer />
					<Navbar />
					<Main />
				</div >
			}
		</>
	);
}


let mapStateToProps = (state) => {
	return {
		initializedSuccess: state.app.initializedSuccess,
	}
}

export default compose(
	connect(mapStateToProps, { initializeApp }),
)(App);
