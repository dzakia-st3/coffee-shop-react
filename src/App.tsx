import React from 'react';
import './App.css';
import Home from './pages/home'
import Login from './pages/logIn'
import SignUp from './pages/signup';
import Product from './pages/product';
import DetailAndCheckout from './pages/detail&checkout';
import Cart from './pages/cart';
import History from './pages/history'
import { BrowserRouter, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/product' element={<Product />} />
                <Route path='/order/:id' element={<DetailAndCheckout />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/history' element={<History />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
