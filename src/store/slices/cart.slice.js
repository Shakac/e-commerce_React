import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartG: (state, action) => action.payload,
        addProductCartG: (state, action) => [ ...state, action.payload],
        deleteProductCartG: (state, action) => {
            return state.filter(prod => prod.id !== action.payload.id)
        }
    }
})

export const { setCartG, addProductCartG, deleteProductCartG } = cartSlice.actions

export default createSlice.reducer

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

export const getCartThunk = () => (dispatch) => {
    const url = baseUrl
     axios.get(url)
     .then(res => dispatch(setCartG(res.data)))
     .catch(err => console.log(err))
}
      
export const postCartThunk = (data) => (dispatch) => {
    const url = baseUrl
    axios.get(url, data, getConfigAuth())
     .then(res => {
        console.log(res.data)
        dispatch(addProductCartG(res.data))
     })
     .catch(err => console.log(err))
}
    