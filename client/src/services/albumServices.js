export async function create(data) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/myAlbums', {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function update(id, data) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/myAlbums/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function remove(id, data) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/myAlbums/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function postLike(id) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/likes/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaton/json'
            },
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;

    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}


export async function searching(query) {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/MyAlbums?where=name${query}`);
        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return Object.entries(result);

    } catch (error) {
        alert(error.message);
        throw error.messagel
    }
}