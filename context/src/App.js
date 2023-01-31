import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './context/ThemeContext'
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    //Provider -->sağlayıcıdır Yani context ile sarmaladığımızda child olan tüm componentlere   datra sağlamış olur

    // context hook u sayesinde aynı state i farklı componentlerde kullanmış olduk
    <ThemeProvider>
      <Header/>
      <hr/>
      <Button/>{/*Providerdaki children ifadesi sayesinde Button componentin içeriğini buraya aktarıyoruz */}
      
    </ThemeProvider>
    
    //aşağıdaki kullanım yerine yukarıdaki gibi kullanırsak provider ı App.js i daha temiz ve okunabilir hale getirmiş oluruz
    
    // <ThemeContext.Provider value="dark"> {/*value ile istediğimiz datayı gönderiyoruz */}
    // <Button/>
    // </ThemeContext.Provider>
    
  
  );
}

export default App;
