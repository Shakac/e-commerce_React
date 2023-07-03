import React from 'react'

const getConfigAuth = () => {
  return {
   Headers: {
    Autorization: `bearer ${localStorage.getItem('token')}`
    }
  }
}
  
export default getConfigAuth
