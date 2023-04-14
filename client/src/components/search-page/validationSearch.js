export const validationSearch = (search) => {
    const errors = {};

    if (search === '') {
        errors.search = 'No result';
    }

    return errors;
}