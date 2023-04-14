export const validationEmail = (value) => {
    const error = {};

    const EMAIL_PATTER = /^[a-z0-9?]+@[a-z]+\.[a-z]{2}$/gm;

    if (value.email.length < 4) {
        error.email = 'Email must be more than 4 char'
    } else if(!(EMAIL_PATTER).test(value.email)) {
        error.email = 'Email is invalid'
    }

    return error;
}