import { useContext } from "react"
import { AlbumContext } from "../../context/AlbumContext"
import { Item } from "./Items";

export const Catalog = () => {
    const {albums} = useContext(AlbumContext);

    return (
        <section id="catalogPage">
        <h1>All Albums</h1>

     {albums.length > 0 ? albums.map(x => <Item key={x._id} album={x}/>) :   <p>No Albums in Catalog!</p>}

        {/* <!--No albums in catalog--> */}
      

    </section>
    )
}