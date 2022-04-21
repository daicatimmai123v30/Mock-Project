import React,{createContext,useState} from 'react'
import {USER_LOGIN,USER_LOGOUT,ADD_CART,REMOVE_CART,DELETE_CART} from '../Enum/Constants'


const INITIAL_USER ={
    isAuth:false,
    info:null
}
const INITIAL_CART=[]

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user,setUser]= useState(INITIAL_USER);
    const [carts,setCarts] = useState(INITIAL_CART);

    const onAddCart=(product)=>{
       if(carts.length > 0){
            const findProduct = carts.filter(value=>value.id === product.id?true : false)
            if(findProduct.length > 0) {
                const newCarts = carts.map(value=>{
                    if(value.id===product.id)
                        return {...value,amount: value.amount + 1}
                    else
                        return {...value}
                })
                setCarts(newCarts)
            }else{
                const newCarts = [...carts];
                newCarts.push({...product,amount:1});
                setCarts(newCarts);
            }
       }else{
           const newCarts = [...carts];
           newCarts.push({...product,amount:1});
           setCarts(newCarts);
       }
    }

    const distpatch = (type,payload)=>{
        switch (type) {
            case USER_LOGIN:{
                return setUser({...user,isAuth:true,info:payload});
            }
            case USER_LOGOUT:{
                return setUser({...user,isAuth:false,info:null});
            }
            case ADD_CART:{
                return onAddCart(payload)
            }
            default:{
                break;
            }
        }
    }
    return(<AuthContext.Provider value={{distpatch,user,carts}}>{children}</AuthContext.Provider>)
}

export default AuthContextProvider