import React from 'react';
import { useForm } from "react-hook-form";
import ButtonSubmit from '../common/ButtonSubmit/ButtonSubmit';

function TextareaForm({ type, onSubmit }) {
	const { register, handleSubmit, reset, formState: { isValid } } = useForm({ mode: 'onChange' });

	const nameTextarea = type === 'dialogs' ? 'dialogs' : (type === 'post' && 'post');

	function onHandleSubmit(data) {
		onSubmit(data);
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)}>
			<div>
				<textarea {...register(nameTextarea, {
					required: 'Обязательное поле',
				})} />
			</div>
			<ButtonSubmit isValid={isValid} btnText={(nameTextarea === 'post' && 'Добавить пост') || (nameTextarea === 'dialogs' && 'Отправить сообщение')} />
		</form>
	)
}

export default TextareaForm;