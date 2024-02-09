import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignip from './Pages/LoginSignip';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assests/banner_mens.png"
import women_banner from "./Components/Assests/banner_women.png"
import kid_banner from "./Components/Assests/banner_kids.png"

const App = () => {
    return (
       <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/mens' element={<ShopCategory category="men" banner={men_banner} />} />
            <Route path='/womens' element={<ShopCategory
            banner={women_banner} category="women"/>} />
            <Route path='/kids' element={<ShopCategory
            banner={kid_banner} category="kid"/>} />
            <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/login' element={<LoginSignip/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
       </div>
    );
};

export default App;