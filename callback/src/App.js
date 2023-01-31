import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  //useCallback() hook u ile fonksiyonu bir alt componente geçirerek kullanırken gereksiz re-renderın önüne geçmek için kullanabiliriz
  const increment = useCallback(()=>{
    setNumber((prevState)=> prevState + 1 );//burada state lere atama yaparken önceki state i(prevStae) al üzerine 1 ekle(prevStae + 1) şeklinde kullanabiliriz bu kullanım ile gereksiz re-render ı önlemiş oluyoruz
  }, [])

/*  //Bu şekilde yazarsak değeri değiştirebiliyoruz ama yine de bir promlemle karşılaşırız buda Header ın her defasında re-render olmasına sebep olur burdada number her değiştiğinde setNumber ı tanımla şeklinde algılamasına sebep olduğumuz için yine Header componentinde yeni propmuş algılamasına sebep oluyoruz  bu durumu çözmek için dependency [number] arrayden kurtulmamız gerekiyor
  const increment = useCallback(()=>{
    setNumber(number + 1);
  }, [number]) /* dependency array de verilen veriler değişene kadar aynı prop olduğunu algılamış olur useCallback() hook u sayesinde
  dependency array boş bırakılırsa sadece bir defa tıklanabilir (1 kez işlem yapar 0 + 1 = 1 işlemini yapar sadece
    yani  dependency array e number yazılmazsa increment a number ı hep 1 olarak set edecek setNumber fonk geçirilmiş olur*/

  return (
    <div className="App">
      <Header increment={increment}/> 
      {/*<Header increment={() => setNumber(number + 1)} /> Burada geçirdiğimiz prop Header da React.memo olduğu halde her tıklamada(number her arttığında) 
      her defasında yeniden hesaplanıp yeni bir prop muş gibi algılamasına ve re-render a sebep olur
      Bu gereksiz re-render ı önlemek için bu prop un aynı prop olduğunu söylememiz gerek "" useCallback() hooku ile yapabiliriz""
      */}
      <hr />

      <h1>{number}</h1>


      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

export default App;
