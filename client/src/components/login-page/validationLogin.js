export const validationLogin = (value) => {

    const error = {};

    if (value.email === '') {
        error.email = 'Email is required';
    } else if (value.email.length > 4) {
        error.email = 'Email must be more than 4 char';
    }

    if (value.password === '') {
        error.password = 'Password is required';
    }

    return error;
}