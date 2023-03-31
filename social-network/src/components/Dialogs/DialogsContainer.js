import { actionSendDialogMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

function DialogsContainer(props) {
	function onSubmit(data) {
		props.actionSendDialogMessageCreator(data.dialogs);
	}

	return (
		<Dialogs {...props} onSubmit={onSubmit} />
	)
}

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

export default compose(
	connect(mapStateToProps, { actionSendDialogMessageCreator }),
	withAuthRedirect
)(DialogsContainer);