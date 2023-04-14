export const validationRegister = (value) => {
    const error = {};

    const EMAIL_PATTER = /^[a-z0-9?]+@[a-z]+\.[a-z]{2}$/gm;

    if (value.email === '') {
        error.email = 'Email is required';
    }
    if (value.password === '') {
        error.password = 'Password is required';
    } 
    if (value.repass === '') {
        error.repass = 'Repass is required';
    }

    return error;
}