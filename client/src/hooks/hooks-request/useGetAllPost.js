import { useEffect, useState } from "react";

export default function useGetAllAlbums(defaultValue) {
    const [albums, setAlbums] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/myAlbums')
            .then((response) => response.json())
            .then((result) => setAlbums(Object.values(result)))
    }, []);

    return [albums, setAlbums];
}