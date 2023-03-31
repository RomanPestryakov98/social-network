import './ButtonSubmit.css';

function ButtonSubmit({ btnText, isValid }) {
	const classNameBtn = 'btn-form';
	const classNameBtnDisabled = 'btn-form_disabled';

	return (
		<button className={`${classNameBtn} ${!isValid ? classNameBtnDisabled : ''}`}>
			{btnText}
		</button>
	)
}

export default ButtonSubmit;

