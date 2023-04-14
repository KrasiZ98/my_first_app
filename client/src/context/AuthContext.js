import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import * as authServices from '../services/authServices';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [state, setState] = useLocalStorage('userData', []);

    const navigate = useNavigate();

    async function authLogin(userData) {
        const result = await authServices.login(userData.email, userData.password)
        setState(result);
        navigate('/');
    }

    async function authRegister(userData) {
        const result = await authServices.register(userData.email, userData.password)
        setState(result);
        navigate('/');
    }

    function authLogout(userData) {
        setState({});
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ authLogin, authRegister, authLogout, user: state }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;