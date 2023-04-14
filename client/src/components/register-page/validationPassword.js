export const validationPassword = (value) =>  {
    const error = {};
    
    if(value.password.length < 4) {
        error.password = 'Password must be more than 4 char';
    }

    return error

  
}