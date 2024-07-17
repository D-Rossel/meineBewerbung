import { ReactNode, useContext, useState, useEffect, createContext } from "react";

interface Props {
    children: ReactNode
}

enum Theme {
    Light = "light",
    Dark = "dark"
}

interface Context {
    theme: Theme
    handleTheme: () => void
}

const initialState: Context = {
    theme: Theme.Dark,
    handleTheme: () => {}
}

const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(initialState.theme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const handleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    const themeState = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={themeState}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}