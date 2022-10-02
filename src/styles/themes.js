//Declaro los colores claros para el modo Claro
const lightTheme = {
    backgroundPrimary: '#fff',
    backgroundSecondary: '#000',
    navBar: '#008080',
    fontPrimary: '#001a1a',
    fontSecondary: '#fff',
    boxShadow: '0px 0px 15px 1px rgba(0, 0, 0, 0.65)',
    shadowHover: '1px 1px 5px 7px rgba(0, 0, 0, 0.40)',
}

//Declaro los colores oscuros para el modo Oscuro
const darkTheme = {
    backgroundPrimary: '#001a1a',
    backgroundSecondary: '#fff',
    navBar: '#001a1a',
    fontPrimary: '#fff',
    fontSecondary: '#000',
    boxShadow: '0px 0px 15px 1px rgba(255,255,255,0.2)',
    shadowHover: '1px 1px 5px 7px rgba(255,255,255,0.2)',

}

//Exporto las constantes con sus respectivos colores
export const themes = {
    dark: darkTheme,
    light: lightTheme,
}