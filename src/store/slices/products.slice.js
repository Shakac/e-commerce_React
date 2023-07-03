import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsG: (state, action) => action.payload
    }
})

export const { setProductsG }= productSlice.actions

export default productSlice.reducer

export const getAllProductsThunk = () => (dispatch) => {
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(url)
        .then(res => setProductsG(res.data))
        .catch(err => console.log(err))
}