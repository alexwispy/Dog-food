import React from "react";
import "./index.css";
import {Routes, Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home';
import Catalog from '../../pages/Catalog';
import Cart from '../../pages/Cart';
import Product from "../../pages/Product";
import Favorites from "../../pages/Favorites";
import Profile from "../../pages/Profile";
import Singin from "../../pages/Singin";
import Singup from "../../pages/Singup";

const Main = ({search}) => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/catalog" element={<Catalog searchText={search}/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/singin" element={<Singin/>}/>
                <Route path="/singup" element={<Singup/>}/>
            </Routes>
        </main>
    )
}

export default Main;