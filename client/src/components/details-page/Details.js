import { Link, useParams } from "react-router-dom"
import useGetAlbumById from "../../hooks/hooks-request/useGetAlbumById";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Details = () => {
    const params = useParams();

    const [album, setAlbum] = useGetAlbumById(params.id, []);
    const [like, setLike] = useState(0);
    const [hideLikeButton, setHideLikeButton] = useState(false);

    const { user } = useContext(AuthContext);

    const isOwner = user._id === album._ownerId;
    let canLike = user.accessToken && isOwner === false;

    function onClick() {
        setLike(like + 1);
        setHideLikeButton(true);
    }

    return (
        <section id="detailsPage">
            <div className="wrapper">
                <div className="albumCover">
                    <img src={album.image} />
                </div>
                <div className="albumInfo">
                    <div className="albumText">

                        <h1>Name: {album.name}</h1>
                        <h3>Artist: {album.artist}</h3>
                        <h4>Genre: {album.genre}</h4>
                        <h4>Price: ${album.price}</h4>
                        <h4>Date: {album.date}</h4>
                        <p>Description: {album.description}</p>
                        <p>Likes: {like}</p>
                    </div>

                    {/* <!-- Only for registered user and creator of the album--> */}
                    {isOwner && <div className="actionBtn">
                        <Link to={`/edit/${album._id}`} className="edit">Edit</Link>
                        <Link to={`/delete/${album._id}`} className="remove">Delete</Link>
                    </div>}
                    {canLike && hideLikeButton === false  && <div className="actionBtn"> <button className="like" onClick={onClick}>Like</button> </div>}

                </div>
            </div>
        </section>
    )

}