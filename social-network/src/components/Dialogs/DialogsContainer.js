import { actionUpdateDialogMessageCreator, actionSendDialogMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onUpdateDialogMessage: (text) => {
			dispatch(actionUpdateDialogMessageCreator(text))
		},
		onSendMessage: () => {
			dispatch(actionSendDialogMessageCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
