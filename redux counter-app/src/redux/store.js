import { configureStore } from "@reduxjs/toolkit";  



import counterSlice from "./counter/counterSlice";

//store "global state" teki elemanları barındıran bir objedir
export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

/*
store ile en dıştaki komponentimizi sarmalamamız lazım(
yani index.js te App componentini sarmallıyoruz
)
*/