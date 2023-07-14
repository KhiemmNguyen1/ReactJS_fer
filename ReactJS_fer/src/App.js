import './App.css';
import { Routes, Route } from "react-router-dom";import UserProfile from './pages/user/UserIProfile';
import Header from './components/header/Header';
// import Login2 from './pages/login/Login2';
import About from './pages/aboutUs/About';
import Home from './pages/home/Home';
import Trending from './pages/trending/Trending';
import Description from './pages/description/Description';
import Footer from './components/footer/Footer';
import { ShopContextProvider } from './context/shop-context';
import { Cart } from './pages/cart/Cart';
function App() {
  return (
    <div>
      {/* <Slider /> */}
      <ShopContextProvider>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/login' element={<Login2 />} /> */}
            <Route path='/trend' element={<Trending />} />
            <Route path='/about' element={<About />} />
            <Route path='/description/:id' element={<Description />} />
            <Route path='/inforUser' element={<UserProfile />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/use' element={<UseVoucher />} /> */}
          </Routes>

          <Footer />

      </ShopContextProvider>

    </div>
  );
}

export default App;