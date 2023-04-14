import { useContext, useState } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import { AuthContext } from "../../context/AuthContext";
import { validationCreate } from "../../components/create-page/validationCreate";

export default function useFormCreate() {

    const { user } = useContext(AuthContext);

    const [value, setValue] = useState({
        name: '',
        artist: '',
        genre: '',
        date: '',
        price: '',
        image: '',
        description: '',
        _ownerId: user._id,
    
    });

    const [error, setError] = useState({})

    const { createAlbum } = useContext(AlbumContext);


    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }


    function onSubmit(event) {
        event.preventDefault();

        if (Object.values(value).some(x => x === '')) {
            setError(validationCreate(value))
            return
        }

        createAlbum(value);

    }

    return { value, error, setValue, changeValue, onSubmit };
}
