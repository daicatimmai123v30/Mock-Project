import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage'
import ListsProducts from './Components/ListProducts/ListsProducts';
import CategoryMenu from './Components/Category/CategoryMenu'
import CategoryList from './Components/Category/CategoryList';
import Login from './Components/Login-SignUp/Login'
import SignUp from './Components/Login-SignUp/SignUp'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {PRODUCTS,CATEGORIES} from './Enum/Constants'

function App() {
  useEffect(()=>{
    localStorage.setItem('PRODUCTS',JSON.stringify(PRODUCTS));
    localStorage.setItem('CATEGORIES',JSON.stringify(CATEGORIES))
  },[])
  return (
       <div className="App"> 
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route  path="/Homepage" element={
              <>
                <Homepage/>
              </>
            }/>
          </Routes>
          <Routes>
            <Route  path="/Products" element={
              <>
                <CategoryMenu/>
              </>
            }/>
          </Routes>
          <Routes>
            <Route  path="/Categorys" element={
              <>
                <CategoryList/>
              </>
            }/>
          </Routes>
          <Routes>
            <Route  path="/Login" element={
              <>
                <Login/>
              </>
            }/>
          </Routes>
          <Routes>
            <Route  path="/SignUp" element={
              <>
                <SignUp/>
              </>
            }/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
