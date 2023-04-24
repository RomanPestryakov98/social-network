import ProfileContacts from '../ProfileContacts/ProfileContacts';
import './ProfileData.css'
import React from 'react';
import { Button } from 'antd';


function ProfileData(props) {
	return (
		<>
			<Button type="primary" onClick={props.onEditMode}>Редактировать</Button>
			<ul>
				<li>
					<b>Имя: </b> {props?.profile?.fullName ? props?.profile?.fullName : '-'}
				</li>
				<li>
					<b>О себе: </b> {props?.profile?.aboutMe ? props?.profile?.aboutMe : '-'}
				</li>
				<li>
					<b>Ищу работу: </b> {props?.profile?.lookingForAJob ? 'Да' : 'Нет'}
				</li>
				<li>
					<b>Описание работы: </b> {props?.profile?.lookingForAJobDescription ? props?.profile?.lookingForAJobDescription : '-'}
				</li>
				<li className='top'>
					<b>Контакты: </b>
					<ProfileContacts contacts={props?.profile?.contacts} />
				</li>
			</ul >
		</>

	);
}


export default ProfileData;


