import './ProfileContacts.css'
import React from 'react';

function ProfileContacts({ contacts }) {
	return (
		<ul>
			{contacts && Object.keys(contacts).map((key, index) => {
				return <ProfileContact key={index} contactKey={key} contactValue={contacts[key]} />;
			})}
		</ul>
	);
}


function ProfileContact({ contactKey, contactValue }) {
	return (
		<li>
			<b>{contactKey}:</b> {contactValue ? contactValue : '-'}
		</li>
	)
}

export default ProfileContacts;


