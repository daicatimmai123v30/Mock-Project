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
          <Routes>
            <Route  path="/Homepage" element={
              <>
                <Header/>
                <Homepage/>
                <Footer/>
              </>
            }/>
          </Routes>
          <Routes>
            <Route  path="/Products" element={
              <>
                <Header/>
                <ListsProducts/>
                <Footer/>
              </>
            }/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
