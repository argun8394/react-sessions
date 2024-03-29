import {useContext} from 'react' 
import ThemeContext from '../context/ThemeContext'

function Header() {

    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div>
        Active theme : {theme}
        <br/>
        <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
    </div>
  )
}

export default Header