import useFormEdit from "../../hooks/hooks-forms/useFormEdit"
import { Notification } from "../notification/Notification";


export const Edit = () => {


    const { value, error, setValue, changeValue, onSubmit } = useFormEdit();


    return (
        <>

            {error.name && <Notification error={error.name} />}
            {error.artist && <Notification error={error.artist} />}
            {error.genre && <Notification error={error.genre} />}
            {error.date && <Notification error={error.date} />}
            {error.price && <Notification error={error.price} />}
            {error.image && <Notification error={error.image} />}
            {error.description && <Notification error={error.description} />}

            <div className="edit-box">
                <h2>Edit</h2>
                <form onSubmit={onSubmit}>
                    <div className="user-box">
                        <input type="text" name="name" value={value.name} onChange={changeValue} />
                        <label>Album Name</label>
                    </div>

                    <div className="user-box">
                        <input type="text" name="artist" value={value.artist} onChange={changeValue} />
                        <label>Artist</label>
                    </div>

                    <div className="user-box">
                        <input type="text" name="genre" value={value.genre} onChange={changeValue} />
                        <label>Ganre</label>
                    </div>

                    <div className="user-box">
                        <input type="text" name="date" value={value.date} onChange={changeValue} />
                        <label>Realise Date</label>
                    </div>

                    <div className="user-box">
                        <input type="text" name="price" value={value.price} onChange={changeValue} />
                        <label>Price</label>
                    </div>

                    <div className="user-box">
                        <input type="text" name="image" value={value.image} onChange={changeValue} />
                        <label>Image</label>
                    </div>

                    <div className="user-box">
                        <input type="text" name="description" value={value.description} onChange={changeValue} />
                        <label>Description</label>
                    </div>

                    <button>

                        Submit
                    </button>

                </form>
            </div>
        </>
    )
}