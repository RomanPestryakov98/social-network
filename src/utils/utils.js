export function getErrosrProfileData(err) {
	let errors = getTypeError(err);
	let messages = getMessagesErrors(err);
	return [errors, messages];
}

function getTypeError(err) {
	let errorsArr = [];
	let res;
	let reg = /[^()]+(?=\))/g;

	for (let i = 0; i < err.messages.length; i++) {
		let found = err.messages[i].match(reg);

		if (found[0].indexOf('->') === -1) {
			res = found[0].charAt(0).toLowerCase() + found[0].slice(1);
		}

		else {
			found = found[0].replace('->', '.');
			let split = found.split('.');
			let res0 = split[0].charAt(0).toLowerCase() + split[0].slice(1);
			let res1 = split[1].charAt(0).toLowerCase() + split[1].slice(1);
			res = res0 + '.' + res1;
		}

		errorsArr.push(res)
	}

	return errorsArr;
}

function getMessagesErrors(err) {
	let errorsMessages = [];

	for (let i = 0; i < err.messages.length; i++) {

		let str = err.messages[i].split("(").reverse().pop();
		errorsMessages.push(str);
	}

	return errorsMessages;
}

