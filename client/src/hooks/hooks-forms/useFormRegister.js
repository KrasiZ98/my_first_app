import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { validationRegister } from "../../components/register-page/validationRegister";
import { validationEmail } from "../../components/register-page/validationEmail";
import { validationPassword } from "../../components/register-page/validationPassword";
import { validationRepass } from "../../components/register-page/validationRepass";


export default function useFormRegister() {
    const [value, setValue] = useState({
        email: '',
        password: '',
        repass: '',
    });
    
    const [error, setError] = useState({});
    const { authRegister } = useContext(AuthContext);
    
    
    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }
    
    const EMAIL_PATTER = /^[a-z0-9?]+@[a-z]+\.[a-z]{2}$/gm;

    function onSubmit(event) {
        event.preventDefault();

        if(Object.values(value).some(x => x === '')) {
            return setError(validationRegister(value))
        }
        if(value.email.length < 5) {
            return setError(validationEmail(value));
        } else if(!EMAIL_PATTER.test(value.email)) {
            return setError(validationEmail(value));
        }

        if(value.password.length < 4) {
            return setError(validationPassword(value));
        }

        if(value.password !== value.repass) {
            return setError(validationRepass(value))
        }
      

        authRegister(value);

    }

    return { value,error, setValue, changeValue, onSubmit };
}