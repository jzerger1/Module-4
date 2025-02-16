const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let validSubmission = true;

    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('telephoneError').innerText = '';

    const firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        document.getElementById('firstNameError').innerText = 'Your first name is required.';
        validSubmission = false;
    }
    if (firstName.length == 1) {
        document.getElementById('firstNameError').innerText = 'The first name field must contain at least two characters.';
        validSubmission = false;
    }

    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        document.getElementById('lastNameError').innerText = 'Your last name is required.';
        validSubmission = false;
    }
    if (lastName.length == 1) {
        document.getElementById('lastNameError').innerText = 'The last name field must contain at least two characters.';
        validSubmission = false;
    }

    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'The email field must match the following format: example@website.com.';
        validSubmission = false;
    }

    const password = document.getElementById('password').value;
    if (password == '') {
        document.getElementById('passwordError').innerText = 'The password field is required.';
        validSubmission = false;
    }

    if (password.length > 0 && password.length < 8) {
        document.getElementById('passwordError').innerText = 'The password field must contain at least eight characters.';
        validSubmission = false;
    }

    const numberPattern = /\d/;
    if (password.length > 0 && !numberPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'The password field must contain at least one number.';
        validSubmission = false;
    }

    const capitalLetterPattern = /[A-Z]/;
    if (password.length > 0 && !capitalLetterPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'The password field must contain at least one capital letter.';
        validSubmission = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword == '') {
        document.getElementById('confirmPasswordError').innerText = 'You must confirm your password.';
        validSubmission = false;
    }
    if (confirmPassword != password) {
        document.getElementById('confirmPasswordError').innerText = 'The password fields must match.';
        validSubmission = false;
    }

    const age = document.getElementById('age').value;
    if (age != '' && age < 18) {
        document.getElementById('ageError').innerText = 'You must be at least 18 years old to register.';
        validSubmission = false;
    }

    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber.length > 0 && !(phoneNumber.length === 12 && phoneNumber[3] === '-' && phoneNumber[7] === '-')) {
        document.getElementById('telephoneError').innerText = 'Please provide your phone in the following format: XXX-XXX-XXXX.';
    }

    if (validSubmission) {
        alert('Your registration form is valid! Click OK to submit.');
        form.submit();

        const userJSON = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "age": age,
            "phoneNumber": phoneNumber
        }

        console.log(userJSON);
    }
});