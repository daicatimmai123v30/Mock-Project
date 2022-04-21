import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Homepage/Homepage'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
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
        </BrowserRouter>
      </div>
  );
}

export default App;
