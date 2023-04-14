import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <nav>

                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <ul>
                    {/* <!--All user--> */}
 
                    {/* <!--Only guest--> */}
                    {user.email
                        ? <>
                            <li><Link>Welcome, {user.email}</Link></li>
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/create">Create Album</Link></li>
                            <li><Link to="/logout">Logout</Link></li>

                        </>
                        : <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>}
                    {/* <!--Only user--> */}
                </ul>
            </nav>
        </header>
    )
}