import useFormRegister from "../../hooks/hooks-forms/useFormRegister"
import { Notification } from "../notification/Notification";

export const Register = () => {
    const { value, error,  setValue, changeValue, onSubmit } = useFormRegister();

    return (
        <>
            {error.email && <Notification error={error.email} />}
            {error.password && <Notification error={error.password} />}
            {error.repass && <Notification error={error.repass} />}

            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="user-box">
                        <input type="text" name="email" value={value.email} onChange={changeValue} />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={value.password} onChange={changeValue} />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="repass" value={value.repass} onChange={changeValue} />
                        <label>Confirm Password</label>
                    </div>
                    <button>

                        Submit
                    </button>

                </form>
            </div>
        </>
    )
}