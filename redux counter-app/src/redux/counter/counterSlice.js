import { createSlice } from "@reduxjs/toolkit";

//createSlice ile state te bulunan verileri oluşturuyoruz
//counterSlice export etmemizin nedeni store.js te kullanabilmek için
//createSlice taki name üzerinden satate ulaşırız "state.counter şeklinde " devam eden ifade üzerinden ulaşıyoruz
//initialState state in ilk değerini ifade eder
//reducers ise state i güncelleyecek tanımlamaların yani fonksiyonların  yazıldığı yer
//createSlice ta state in name initialState ve reducer varsayılan tanımlamalarını yapıyoruz

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,        
    },
    reducers: {//reducer içine tüm fonksiyonlarımızı yazabiliriz
        increment : (state)=> {// buradaki state createSlice içinde oluşturulan statein initialState value sudur ve bunu reducer içinde güncelleriz
            state.value += 1;
        },

        decrement: (state)=> {
            state.value -= 1;
        },

        incrementByAmount: (state, action)=> {//payload Counter.js te incrementByAmount() a geçilen parametredir
            state.value += Number(action.payload); //değeri number olarak algılamasını sağladık Number içine alarak 
        }
    }
});

//reducer içinde yazmış olduğumuz fonksiyonları kullanabilmek için ""{ increment } = counterSlice.actions;"" bu şekilde export etmemiz gerekir dispatch edilmek üzere
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer; //reducer ı bu şekilde dışarı aktarıyoruz