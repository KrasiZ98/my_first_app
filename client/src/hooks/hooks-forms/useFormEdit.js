import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AlbumContext } from "../../context/AlbumContext";
import { useParams } from "react-router-dom";
import { validationEdit } from "../../components/edit-page/validationEdit";

export default function useFormEdit() {
    const { user } = useContext(AuthContext);

    const params = useParams();

    const { albums, updateAlbum } = useContext(AlbumContext);

    const album = albums.find(x => x._id === params.id);

    const [error, setError] = useState({});

    const [value, setValue] = useState({
        name: album.name,
        artist: album.artist,
        genre: album.genre,
        date: album.date,
        price: album.price,
        image: album.image,
        description: album.description,
        _ownerId: user._id,
        _id: album._id,
    });



    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }


    function onSubmit(event) {
        event.preventDefault();
        setError(validationEdit(value));
        updateAlbum(params.id, value);

    }

    return { value,error, setValue, changeValue, onSubmit };
}
