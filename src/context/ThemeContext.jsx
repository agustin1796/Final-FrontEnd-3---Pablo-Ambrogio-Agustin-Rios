import { createContext, useEffect, useReducer } from "react"

export const ThemeContext = createContext()


const getUserFromStorage = () => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : false;
};

const initialTheme = getUserFromStorage()

const reducer = (theme, action) => {
    switch (action.type) {
        case true:
            return !theme
        case false:
            return !theme
        default:
            return theme;
    }
}

export const ThemeContextProvider = ({ children }) => {

    const [theme, dispatch] = useReducer(reducer, initialTheme)

    const handleChangeTheme = () => {
        dispatch({
            type: theme
        })

    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const data = {
        handleChangeTheme,
        theme
    }

    return (
        <ThemeContext.Provider
            value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;