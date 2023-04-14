import useFormLogin from "../../hooks/hooks-forms/useFormLogin"
import { Notification } from "../notification/Notification";

export const Login = () => {

    const { value,error, setValue, changeValue, onSubmit } = useFormLogin();

    return (
        <>
        {error.email && <Notification  error={error.email}/>}
        {error.password && <Notification  error={error.password}/>}
        
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="user-box">
                        <input type="text" name="email" value={value.email} onChange={changeValue} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={value.password} onChange={changeValue} />
                        <label>Password</label>
                    </div>
                    <button>

                        Submit
                    </button>

                </form>
            </div>
        </>

    )
}