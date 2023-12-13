const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#e-mail')
const password = document.querySelector('#password')

function checkInput(input, index) {
	if (input.value.length === 0) {
		event.preventDefault()
		input.classList.add('input-error')
		document
			.getElementsByTagName('img')
			[index].classList.replace('hidden', 'error-icon')
		document
			.getElementsByTagName('small')
			[index].classList.replace('hidden', 'small-error')
	} else {
		input.classList.remove('input-error')
		document
			.getElementsByTagName('img')
			[index].classList.replace('error-icon', 'hidden')
		document
			.getElementsByTagName('small')
			[index].classList.replace('small-error', 'hidden')
	}
}

function checkEmail(email, index) {
	if (
		!email.value.endsWith('@gmail.com') &&
		!email.value.endsWith('@hotmail.com')
	) {
		event.preventDefault()
		email.classList.add('input-error')
		document
			.getElementsByTagName('img')
			[index].classList.replace('hidden', 'error-icon')
		document
			.getElementsByTagName('small')
			[index].classList.replace('hidden', 'small-error')
	} else {
		email.classList.remove('input-error')
		document
			.getElementsByTagName('img')
			[index].classList.replace('error-icon', 'hidden')
		document
			.getElementsByTagName('small')
			[index].classList.replace('small-error', 'hidden')
	}
}

document.querySelector('form').addEventListener('submit', () => {
	checkInput(firstName, 0)
	checkInput(lastName, 1)
	checkInput(password, 3)
	checkEmail(email, 2)
})
