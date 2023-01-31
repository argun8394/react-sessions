import {useContext} from 'react' //context i kullanmak için useContext import edilmeli

import ThemeContext from '../context/ThemeContext' // kullanacağımız context i import ediyoruz

function Button() {
    //const data = useContext(ThemeContext); //usecontext ile import ettiğimiz  ThemeContext i kullanabiliyoruz
    const {theme, setTheme} = useContext(ThemeContext) //üstteki kullanım yerine bu şekilde kullanabiliriz

    //  console.log(data);
    
  return (
    <div>
        Active Theme : {theme}
        <br/>
        <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Button