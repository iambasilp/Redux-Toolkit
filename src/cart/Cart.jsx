// 1. Provider
// 2. Store
// 3. Reducer
// 4 Action

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartList : [],
    cartCount: 0,
}

createSlice({
    name:"Cart",
    initialState,
    reducer:{
        increament:()=>{},
        decreament:()=>{},
        addToCart:()=>{}
    }
})