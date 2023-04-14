import { Navigate, useParams, useNavigate } from "react-router-dom"
import useGetAlbumById from "../../hooks/hooks-request/useGetAlbumById";
import { useContext, useEffect } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import { AuthContext } from "../../context/AuthContext";


export const Delete = () => {
    const params = useParams();

    const { deleteAlbum } = useContext(AlbumContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [album, setAlbum] = useGetAlbumById(params.id, []);


    if (user._id === album._ownerId) {
        deleteAlbum(params.id);
        return <Navigate to='/catalog' ></Navigate>
    } else {
      return  navigate('/')
     
    }





}