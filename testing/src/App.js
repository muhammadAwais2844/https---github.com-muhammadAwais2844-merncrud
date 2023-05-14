import React from "react";
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from "./Home";
import CardDetail from "./CardDetail";
import CartPage from "./CartPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>


      
        <Route exact path="/"   element={<Home/>} />
        <Route path="/carddetail/:id"   element={<CardDetail/>} />
        <Route path="/cartpage"   element={<CartPage/>} />

    

    
      </Routes>
    </BrowserRouter>
  );
};

export default App;
