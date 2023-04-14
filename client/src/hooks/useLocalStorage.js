import { useEffect, useState } from "react";

function getLocalStorage(key, defaultValue) {
    const userData = JSON.parse(localStorage.getItem(key));
    if (userData instanceof Function) {
        return userData();
    }

    return userData ? userData : defaultValue;
}

export default function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        return getLocalStorage(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    });

    return [state, setState];
}