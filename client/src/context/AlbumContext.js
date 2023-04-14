import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as albumServices from '../services/albumServices'
import useGetAllAlbums from "../hooks/hooks-request/useGetAllPost";


export const AlbumContext = createContext();

const AlbumContextProvider = (props) => {

    const [albums, setAlbums] = useGetAllAlbums([]);
    const [searchAlbum, setSearchAlbum] = useState([]);

    const navigate = useNavigate();

    async function createAlbum(data) {
        const result = await albumServices.create(data);
        setAlbums(oldAlbums => [...oldAlbums, result]);
        navigate('/catalog');
    }

    async function updateAlbum(id, data) {
        const result = await albumServices.update(id, data);
        setAlbums(albums.map(x => x._id === id ? result : x));
        navigate(`/details/${id}`);
    }

    async function deleteAlbum(id) {
        await albumServices.remove(id);
        setAlbums(albums.filter(x => x._id !== id));
        navigate('/catalog');
    }



    return (
        <AlbumContext.Provider value={{ createAlbum, updateAlbum, deleteAlbum, albums }} >
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider;