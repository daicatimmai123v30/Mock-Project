import { useEffect,useState } from 'react';
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
import ListSearch from './Components/search/ListSearch'

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CartPage from './Components/CartPage/CartPage';

import {PRODUCTS,CATEGORIES} from './Enum/Constants'

function App() {
  const [products,setProducts]=useState(PRODUCTS);
  const [isSearch,setIsSearch]=useState(false);
  const handleSearch= (value)=>{
    setIsSearch(true);
    let newList=[];
    let productss=PRODUCTS;
    if(value===undefined || value===''){
      setIsSearch(false);
    }
    productss.forEach(product => {
      if(product.title.toLowerCase().search(value.toLowerCase())!==-1){
        newList.push(product);
      }
        
    });
    if(newList.length>0){
      setProducts(newList);
      
    }else{
      setIsSearch(false);
      alert('Not Found.');
    }
    

  }
  useEffect(()=>{
    localStorage.setItem('PRODUCTS',JSON.stringify(PRODUCTS));
    localStorage.setItem('CATEGORIES',JSON.stringify(CATEGORIES));
    setProducts(PRODUCTS);
    setIsSearch(false);
  },[])
  return (
       <div className="App"> 
        <BrowserRouter>
          <Routes>
            <Route  path="/CartPage" element={
              <>
                <Header
                  onSearch={handleSearch}
                />
                <CartPage/>
                <Footer/>
              </>
            }/>
            <Route  path="/Homepage" element={
              <>
                <Header
                  onSearch={handleSearch}
                />
                <Homepage/>
                {isSearch && 
                <ListSearch
                  list={products}
                />}
                <Footer/>
              </>
            }/>
             <Route  path="/Products" element={
              <>
                {/* { <Header
                  onSearch={handleSearch}
                /> } */}
                {isSearch && 
                <ListSearch
                  list={products}
                />}
                {!isSearch && 
                <ListsProducts
        
                />}
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
