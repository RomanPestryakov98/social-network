import { useForm, Controller } from "react-hook-form";
import React from 'react';
import '../../Login/Login.css';
import { Button } from 'antd';
import { getErrosrProfileData } from '../../../utils/utils';
import { Checkbox, Input } from 'antd';


function ProfileDataForm(props) {
	const { handleSubmit, control, setError } = useForm({ mode: 'onChange' });

	function onHandleSubmit(data) {
		props.onUpdateProfile(data)
			.then(() => {
				props.onEditMode();
			})
			.catch(err => {
				const [errors, messages] = getErrosrProfileData(err);

				for (let i = 0; i < errors.length; i++) {
					setError(errors[i], { type: 'Invalid url format', message: messages[i] });
				}
			})
	}

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)} className="form">
			<Button type="primary" onClick={handleSubmit(onHandleSubmit)}>Сохранить</Button>

			<Controller
				control={control}
				name='fullName'
				defaultValue={props?.profile?.fullName}
				render={({ field: { onChange, value } }) => (
					<label className='login__label'>
						<span className='login__label-text'>Имя:</span>
						<Input onChange={onChange} value={value} />
					</label>
				)}
			/>

			<Controller
				control={control}
				name='aboutMe'
				defaultValue={props?.profile?.aboutMe}
				render={({ field: { onChange, value } }) => (
					<label className='login__label'>
						<span className='login__label-text'>О себе:</span>
						<Input onChange={onChange} value={value} />
					</label>
				)}
			/>

			<Controller
				control={control}
				name='lookingForAJob'
				defaultValue={props?.profile?.lookingForAJob}
				render={({ field: { onChange, value } }) => (
					<div className="checkbox">
						<span className='form__label-text'>Ищу работу:</span>
						<Checkbox onChange={onChange} checked={value} />
					</div>

				)}
			/>

			<Controller
				control={control}
				name='lookingForAJobDescription'
				defaultValue={props?.profile?.lookingForAJobDescription}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<label className='login__label'>
						<span className='login__label-text'>Описание работы:</span>
						<Input onChange={onChange} value={value} />
						<span className='login__input-error'>
							{error && error.message}
						</span>
					</label>
				)}
			/>

			<h3>Контакты</h3>
			{props?.profile?.contacts && Object.keys(props?.profile?.contacts).map((contact, index) => {
				return <Controller
					key={index}
					control={control}
					name={`contacts.${contact}`}
					defaultValue={props?.profile?.contacts[contact]}
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<label className='login__label'>
							<span className='login__label-text'>{contact}</span>
							<Input onChange={onChange} value={value} />
							<span className='login__input-error'>
								{error && error.message}
							</span>
						</label>
					)}
				/>
			})}
		</form>
	);
}


export default ProfileDataForm;


