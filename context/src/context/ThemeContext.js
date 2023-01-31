import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => { {/*children ifadesi sayesinde App.js te Provider ile sarmallayacağımız children componentlerde mevcut veriyi olduğu gibi çekebiliyoruz*/}
    const [theme, setTheme] = useState("dark")

    const values = {
        theme, 
        setTheme,
    };

    // console.log(theme)
    
    return <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
}

export default ThemeContext;