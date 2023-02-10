import {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux';

// reducer daki action ları import ederek dispatch te kullanıyoruz
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice';

function Counter() {

  const [amount, setAmount] = useState(3);

  //useSelector hooku sayesinde state ulaşıp kullanıyoruz
    const countValue = useSelector((state) => state.counter.value); //state in altındaki counter değerine burdan ulaşarak kullanıyoruz

    //reducer daki export edilen actionları useDispacth hooku sayesinde ulaşarak kullanabiliyoruz
    const dispatch = useDispatch();

    // console.log(countValue)
  return (

    <div>
        <h1>{countValue}</h1>

        <button onClick ={() => dispatch(increment())}>increment</button> {/* createSlice taki reducer da tanımladığımız fonksiyonu dispatch e parametre olarak geçiyoruz*/}
        <button onClick ={() => dispatch(decrement())}>decredecrement</button>

        <br/>
        <br/>
         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value) }/>{/*onChange eventi ile  input değerini yakalayıp amount değerini setAmount sayesinde güncelliyoruz   */}
         <button onClick ={() => dispatch(incrementByAmount(amount))}>Increment by Amount</button> {/*verilen değer oranında arttırma işlemi*/}
    </div>

    
  )
}

export default Counter