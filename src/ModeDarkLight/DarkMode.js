import { useState, useEffect } from "react";

export const useDarkMode = () => {
    //Seteo en mi estado local el modo Claro
    const [ theme, setTheme ] = useState('light');

    //Guardo en mi localStorage el color al modo que cambie
    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode)
    }

    //Si esta el modo Claro activado quiero que se pueda activar el Modo Oscuro sino al reves
    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);

    return [ theme, themeToggler ]
}