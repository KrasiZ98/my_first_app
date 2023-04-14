import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { validationLogin } from "../../components/login-page/validationLogin";

export default function useFormLogin() {
    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState({});
    const { authLogin } = useContext(AuthContext);


    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }


    function onSubmit(event) {
        event.preventDefault();

        if (Object.values(value).some(x => x === '')) {
            setError(validationLogin(value));
            return
        }

        authLogin(value);

    }

    return { value, error, setValue, changeValue, onSubmit };
}