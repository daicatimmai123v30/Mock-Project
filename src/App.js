import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage'
import ListsProducts from './Components/ListProducts/ListsProducts';
import Login from './Components/Login-SignUp/Login'
import SignUp from './Components/Login-SignUp/SignUp'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CartPage from './Components/CartPage/CartPage';

import {PRODUCTS,CATEGORIES} from './Enum/Constants'

function App() {
  useEffect(()=>{
    localStorage.setItem('PRODUCTS',JSON.stringify(PRODUCTS));
    localStorage.setItem('CATEGORIES',JSON.stringify(CATEGORIES))
  },[])
  return (
       <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route  path="/CartPage" element={
              <>
                <Header/>
                <CartPage/>
                <Footer/>
              </>
            }/>
            <Route  path="/Homepage" element={
              <>
                <Header/>
                <Homepage/>
                <Footer/>
              </>
            }/>
             <Route  path="/Products" element={
              <>
                <Header/>
                <ListsProducts/>
                <Footer/>
              </>
            }/>
             <Route  path="/Signup" element={
              <>
                <SignUp/>
              </>
            }/>
              <Route  path="/Login" element={
              <>
                <Login/>
              </>
            }/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
