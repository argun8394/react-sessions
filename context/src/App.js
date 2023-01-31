import logo from './logo.svg';
import './App.css';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button';

function App() {
  return (
    //Provider -->sağlayıcıdır Yani context ile sarmaladığımızda child olan tüm componentlere   datra sağlamış olur
    <ThemeContext.Provider value="dark"> {/*value ile istediğimiz datayı gönderiyoruz */}
    <Button/>
    </ThemeContext.Provider>
  );
}

export default App;
