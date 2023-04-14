import { useContext, useState } from "react"

import { useSearchParams } from "react-router-dom";
import { AlbumContext } from "../../context/AlbumContext";
import { Items } from "./Items";
import { validationSearch } from "./validationSearch";
import { Notification } from "../notification/Notification";

export const Search = () => {

    const { albums } = useContext(AlbumContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('name') || '';

    const [album, setAlbum] = useState([]);
    const [error, setError] = useState({});

    function handlerChange(event) {
        const name = event.target.value;

        if (name) {
            setSearchParams({ name })
        } else {
            setSearchParams({});
        }
    }

    async function onClick() {

        if (search === '') {
            console.log(error, search)
            return setError(validationSearch(search))
        }


        const result = albums.filter(x => x.name === search)
        setAlbum(result);


    }



    return (
        <section id="searchPage">
            <h1>Search by Name</h1>

            <div className="search">
                <input id="search-input" type="text" placeholder="Enter desired albums's name" value={search} onChange={handlerChange} />
                <button className="button-list" onClick={onClick}>Search</button>
            </div>
            <h2>Results:</h2>


            {/* <!--Show after click Search button--> */}
            <div className="search-result">
            {error.search && <Notification error={error.search} />}

                {/* <!--If have matches--> */}
                {album.map(x => x.name) ? album.map(x => <Items key={x._id} album={x} />) : <p className="no-result">No result.</p>}
                {/* <!--If there are no matches--> */}

            </div>
        </section>
    )
}