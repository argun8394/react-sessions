import './App.css';
import {useState, useMemo} from 'react';
import Header from './components/Header'

// const data = {name: 'John'} dışarda tanımlanırsa değeri değişmediği sürece re-render edilmez (veya useMemo() ile içerde kullanmak ta gereksiz  re-render ı önler)

function App() {
  const [number, setNumber] = useState(0);
  //buton tıklandığında burada bulunan herşeyin render edilmesine sebep olur React Memoization yöntemlerini kullanarak sadece 
  //ilgili alan re-render edilmiş olur

 /* const data = {name: 'John'} //bu şekilde kullandığımızda buradaki data Header da prop olarak geçtiği için değer değişmese bile farklı referansa sahip olduğu için her defasında Header da re-render edilir.
 */
  const data = useMemo(()=>{
    return {name: 'John', number}
    }, [number]) //dependency array de verceğimiz veriler değiştiğinde data da yeniden hesaplanır [burada number her değiştiğinde data yeniden hesaplanır ve Header comp de re-render edilir]
    //useMemo kullanmadığımızda component içinde bir input olduğunu varsayrsak inputa her veri girişi veya tıklamada yeniden hesaplama yaparak gerksiz render a sebep olur
  return (
    <div className="App">
      {/* number = {number <5 ? 0 : number } number 5 ve üstü olunca header da re-render edilir */}
      <Header data={data} />{/*burada geçen bir prop güncellendiğinde render edilir */} 

    <hr/>

      <h1>{number}</h1>
      <button onClick={()=>setNumber(number + 1)}>setNumber</button>
      
    </div>
  );
}

export default App;

/*Aşağıdaki denklik durumundan dolayı obje geçtiğimizde her defasında farklı referans algılayıp değer değişşmese bile re-render a sebep olur
Burada her tıklamada bu component re-render edilir ve const data = {name: 'John'} satırına geldiğinde denklik kontrolü yapıp farklı olduğunu görüp re-render eder.
// 5 === 5 true
// " " === " " true
// true === true true 
// yukarıdaki denklikleri sorguladığımızda true değeri döner primitive veri türlerinde bu şekilde
//----------------------------------------------------------------
// Ama obje ve array denkliğini sorguladığımızda bize bellekteki referansları farklı olduğu için false döner
// {} === {} false
// [] === [] false
*/