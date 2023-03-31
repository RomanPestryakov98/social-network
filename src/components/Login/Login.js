import React from 'react';
import { useForm } from "react-hook-form";
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isEmail } from 'validator';
import './Login.css';
import { Navigate } from "react-router-dom";

function Login(props) {

	function onSubmit(data) {
		return props.login(data);
	}

	return (
		!props.isAuth
			?
			<LoginForm {...props} onSubmit={onSubmit} />
			:
			<Navigate to='/profile' />
	)
}

function LoginForm({ onSubmit, submitError }) {
	const { register, setError, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

	async function onHandleSubmit(data) {
		const respones = await onSubmit(data);

		if (respones?.resultCode === 1) {
			setError('email', { type: 'Unauthorized', message: respones.messages[0] });
			setError('password', { type: 'Unauthorized', message: respones.messages[0] });
			return;
		}

	}

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)} className="login__form">
			<label className='login__label'>
				<span className='login__label-text'>Почта</span>
				<input type="email" {...register('email', {
					required: 'Обязательное поле',
					validate: value => isEmail(value) || 'Нужно ввести email',
				})} />
				<span className='login__input-error'>
					{errors?.email?.message}
				</span>
			</label>

			<label className='login__label'>
				<span className='login__label-text'>Пароль</span>
				<input type="password" {...register('password', {
					required: 'Обязательное поле',
					minLength: {
						value: 5,
						message: "Минимальная длина пароля 5 символов"
					},
				})} />
				<span className='login__input-error'>
					{errors?.password?.message}
				</span>
			</label>
			<div>
				<input type="checkbox" {...register('rememberMe')} />
				<span className='form__label-text'>Запомнить меня</span>
			</div>
			<div><input type="submit" value='Войти' /></div>
			<p>{submitError && 'ошибка'}</p>
		</form>
	)
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

let mapDispatchToProps = {
	login
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Login);