export const validationEdit = (value) => {
    const errors = {};

    if(value.name === '') {
        errors.name = 'Name is required'
    }
    if(value.artist === '') {
        errors.artist = 'Artist is required'
    }
    if(value.genre === '') {
        errors.genre = 'Genre is required'
    }
    if(value.date === '') {
        errors.date = 'Date is required'
    }
    if(value.image === '') {
        errors.image = 'Image is required'
    }
    if(value.price === '') {
        errors.price = 'Price is required'
    }
    if(value.description === '') {
        errors.description = 'Description is required'
    }

    return errors
}
