import { createContext ,useState} from "react";

export const ThemeContext = createContext()
export const ThemeContextProvider = ({children})=>{
    const [theme , setTheme] = useState("dark")

    const changetheme = ()=>{
       theme==="dark"?
        setTheme("light"):setTheme("dark")
    }
    return <ThemeContext.Provider value={{theme,changetheme}}>{children}</ThemeContext.Provider>
}



