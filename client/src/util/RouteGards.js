import {  useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { AlbumContext } from "../context/AlbumContext";
import { Navigate, Outlet } from "react-router-dom";

export const RouteGards = ({ children }) => {

    const { user } = useContext(AuthContext);
    const { albums } = useContext(AlbumContext);


    if (user.accessToken === undefined) {
        return <Navigate to='/login' ></Navigate>
    }

    return children ? children : <Outlet />
}