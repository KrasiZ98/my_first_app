export const validationRepass = (value) => {
    const error = {};

    if(value.password !== value.repass) {
        error.repass = 'Password dont match';
    }

    return error;
}