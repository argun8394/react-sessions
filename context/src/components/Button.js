import {useContext} from 'react' //context i kullanmak için useContext import edilmeli

import ThemeContext from '../context/ThemeContext' // kullanacağımız context i import ediyoruz

function Button() {
    const data = useContext(ThemeContext); //usecontext ile import ettiğimiz  ThemeContext i kullanabiliyoruz

    // console.log(data);
  return (
    <div>Button ({data}) </div>
  )
}

export default Button