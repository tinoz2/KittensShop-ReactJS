import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart.jsx'
import Login from './components/Login.jsx'
import LogicProvider from "./context/LogicCartContext"
import AuthProvider from "./context/AuthContext"

const App = () => {
    return (
        <BrowserRouter>
            <LogicProvider>
                <AuthProvider>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route exact path="/category/:categoryID" element={<ItemListContainer />} />
                    <Route exact path="/productos/:id" element={<ItemDetailContainer />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                </AuthProvider>
            </LogicProvider>
        </BrowserRouter>
    )
}

export default App