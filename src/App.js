
import './App.css';
import Header from './Header';
import Home from './Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Productdes from './productdes';
import Cart from './cartpage';
import Checkout from './checkout';
import Footer from './footer';




function App() {
  return (
    <div >
      
      <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='pd/:id' element={<Productdes/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
  </Routes>
   <Footer/>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
