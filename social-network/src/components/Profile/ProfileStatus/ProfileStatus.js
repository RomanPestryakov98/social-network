import React, { useState, useEffect } from 'react';

function ProfileStatus(props) {
	const [status, setStatus] = useState(props.status);
	const [editStatus, setEditStatus] = useState(false);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	function handleChangeStatus(e) {
		setStatus(e.target.value)
	}

	function handleUpdateStatus() {
		props.onUpdateStatus(status)
		setEditStatus(false)
	}

	return (
		< div >
			{!editStatus
				?
				<span onDoubleClick={() => { setEditStatus(true) }} >{props.status ? props.status : 'Нет статуса'}</span>
				:
				<input autoFocus={true} onBlur={handleUpdateStatus} onChange={handleChangeStatus} value={status} />
			}


		</div >
	);
}

export default ProfileStatus;


