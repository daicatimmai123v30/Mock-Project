import React,{createContext,useState} from 'react'
import {USER_LOGIN,USER_LOGOUT} from '../Enum/Constants'
const INITIAL_USER ={
    isAuth:false,
    info:null
}
const INITIAL_PRODUCT=[]

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user,setUser]= useState(INITIAL_USER);
    const distpatch = (type,payload)=>{
        switch (type) {
            case USER_LOGIN:{
                return setUser({...user,isAuth:true,info:payload});
            }
            case USER_LOGOUT:{
                return setUser({...user,isAuth:false,info:null});
            }
            default:{
                break;
            }
        }
    }
    return(<AuthContext.Provider value={{distpatch,user}}>{children}</AuthContext.Provider>)
}

export default AuthContextProvider