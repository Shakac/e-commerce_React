import './App.css'
import { Route, Routes } from 'react-router-dom'
import home from './pages/home'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Header from './components/shared/Header'


function App() {
  
  const products = useSelector(states => states.products)

  useEffect (() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
   <div className='app'>
    <Header />
    <Routes>
      <Route path='/' element={<home/>} />
      <Route path='/product/:id' element={<ProductIdPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    <h1>E-commerce</h1>
   </div>
  )
}

export default App
