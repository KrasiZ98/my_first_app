import { Link } from "react-router-dom"

export const Item = ({album}) => {

    return (
        <div className="card-box">
            <img src={album.image} />
            <div>
                <div className="text-center">
                    <p className="name">Name: {album.name}</p>
                    <p className="artist">Artist: {album.artist}</p>
                    <p className="genre">Genre: {album.genre}</p>
                    <p className="price">Price: ${album.price}</p>
                    <p className="date">Release Date: {album.date}</p>
                    
                </div>
                <div className="btn-group">
                    <Link to={`/details/${album._id}`} id="details">Details</Link>
                </div>
            </div>
        </div>
    )
}