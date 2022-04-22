import React, { createContext, useState } from 'react'
import {
  USER_LOGIN,
  USER_LOGOUT,
  ADD_CART,
  REMOVE_CART,
  DELETE_CART
} from '../Enum/Constants'

const INITIAL_USER = {
  isAuth: false,
  info: null
}
const INITIAL_CART = []

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER)
  const [carts, setCarts] = useState(INITIAL_CART)

  const onAddCart = product => {
    if (carts.length > 0) {
      const findProduct = carts
        .filter(value => (value.idUser == user.info.id ? true : false))[0]
        .items.filter(value =>value.id == product.id?true:false)
      if (findProduct.length > 0) {
        const newCarts = carts.map(value => {
          if (value.idUser === user.info.id) {
            const newItems = value.items.map(value => {
              if (value.id === product.id)
                return {
                  ...value,
                  amount: value.amount + 1
                }
              else
                return {
                  ...value
                }
            })
            return {
              ...value,
              items: newItems
            }
          } else return value
        })
        setCarts(newCarts)
      } else {
        const newCarts = [...carts]
        newCarts[0].items=[
          ...newCarts[0].items,
          {
            ...product,
            amount: 1
          }
        ]
        console.log(newCarts)
        setCarts(newCarts)
      }
    } else {
      const newCarts = [
        {
          idUser: user.info.id,
          items: []
        }
      ]
      newCarts[0].items.push({
        ...product,
        amount: 1
      })

      setCarts(newCarts)
    }
  }

  const onRemoveCart = product => {
    const findProduct = carts
      .filter(value => (value.idUser === user.info.id ? true : false))[0]
      .items.filter(value => (value.id === product.id ? true : false))
    if (findProduct.length > 0) {
      const newCarts = carts.map(value => {
        if (value.idUser === user.info.id) {
          const newItems = value.items
            .filter(value => {
              if (value.id === product.id) {
                if (value.amount === 1) return false
                else return true
              }else
                return true
            })
            .map(value => {
              if (value.id === product.id)
                return {
                  ...value,
                  amount: value.amount - 1
                }
              else
                return {
                  ...value
                }
            })
          return {
            ...value,
            items: newItems
          }
        } else return value
      })
  
      setCarts(newCarts)
    }
  }
  const distpatch = (type, payload) => {
    switch (type) {
      case USER_LOGIN: {
        return setUser({
          ...user,
          isAuth: true,
          info: payload
        })
      }
      case USER_LOGOUT: {
        setUser({
          ...user,
          isAuth: false,
          info: null
        })
        setCarts(INITIAL_CART)
      }
      case ADD_CART: {
        return onAddCart(payload)
      }
      case REMOVE_CART:{
          return onRemoveCart(payload)
      }
      default: {
        break
      }
    }
  }
  return (
    <AuthContext.Provider
      value={{
        distpatch,
        user,
        carts
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
