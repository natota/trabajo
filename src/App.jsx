
import './App.css'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { Footer } from './componentes/Footer/Footer'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './componentes/context/CartContext/CartProvider'
import { Carrito } from './componentes/Carrito/Carrito'
import { MainLayout } from './layouts/MainLayouts'
import { AdminLayout } from './layouts/AdminLayouts'
import { RutaProtegida } from './componentes/RutaProtegida/RutaProtegida'
import { Login } from './componentes/Login/Login'
import Header from './componentes/Header/Header'
import { Crud } from './componentes/adminComponentes/FormularioEdicion/Crud'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Routes>
              <Route element={<MainLayout />} >
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:categoria" element={<ItemListContainer />} />{/* Route puede tener children */}
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />}></Route>
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />}></Route>
                <Route path="alta-productos" element={<RutaProtegida>
                  <Header/>
                  <Crud />
                  <Footer/>
                </RutaProtegida>} />
              </Route>
            </Routes>
          <ToastContainer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App
