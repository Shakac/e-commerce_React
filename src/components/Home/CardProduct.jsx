import React from 'react'
import './styles/CardProduct.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'

const CardProduct = ({ prod }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDatail = () => {
        navigate(`/product/${prod.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        dispatch(postCartThunk(prod))
    }

  return (
    <article className='product'>
        <header className='product__header'>
            <div className='product__img-container'>
                <img className='product__img' src={prod.images[0].url} alt="" />
            </div>
            <div className='product__img-container'>
                <img className='product__img' src={prod.images[1].url} alt="" />
            </div>
        </header>
        <section className='product__body'>
            <header className='product__titles'>
                <h3 className='product__brand'>{prod.brand}</h3>
                <h2 className='product__name'>{prod.title}</h2>
            </header>
            <article className='product__price'>
                <span className='product__price-label'>Price</span>
                <h3 className='product__price-value'>{prod.price}</h3>
            </article>
            <button className='product__btn'>
                <i className='bx bx-cart' ></i>
            </button>
        </section>
    </article>
  )
}

export default CardProduct