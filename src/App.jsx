import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
import { Footer } from './Footer/Footer'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <div>
      <Header/>
      <Routes>
        <Route path="/carrito" element=""></Route>
         <Route path="/" element={<ItemListContainer/>}/>                  {/* Route puede tener children */}
         <Route path="/detail/:id" element={ <ItemDetailContainer />}/>
    
     </Routes>
   <Footer/>    
     </div>
     </CartProvider>
     </BrowserRouter>
    </>
  );
}

export default App
