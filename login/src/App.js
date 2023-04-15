// import logo from './logo.svg';
import './App.css';
// import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import SignUp5 from './Signup5';
import Login from './Login';
import Home from './Pages/Home';
import Product from './Pages/product'
import MeatProduct from './Pages/MeatProduct';
import DiaryProduct from './Pages/DiaryProduct';
import DrinksProduct from './Pages/DrinkProduct'
import GroceryProduct from './Pages/GroceryProduct'
import HealthCareProduct from './Pages/HealthCareProduct';
import SkinCareProduct from './Pages/SkinCareProduct';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp5/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/productCategory' element={<Product/>}></Route>
        <Route path='/productCategory/Meat' element={<MeatProduct/>}></Route>
        <Route path='/productCategory/Diary' element={<DiaryProduct/>}></Route>
        <Route path='/productCategory/Drinks' element={<DrinksProduct/>}></Route>
        <Route path='/productCategory/Grocery' element={<GroceryProduct/>}></Route>
        <Route path='/productCategory/HealthCareProduct' element={<HealthCareProduct/>}></Route>
        <Route path='/productCategory/SkinCareProduct' element={<SkinCareProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
