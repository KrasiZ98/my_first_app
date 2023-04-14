import { useEffect, useState } from "react";

export default function useGetAlbumById(id, defaultValue) {
    const [album, setAlbum] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/myAlbums/' + id)
            .then((response) => response.json())
            .then((result) => setAlbum(result))
    }, [id])

    return [album, setAlbum];
}