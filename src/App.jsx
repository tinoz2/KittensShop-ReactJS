import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart.jsx'
import LogicProvider from "./context/LogicCartContext"

const App = () => {
    return (
        <BrowserRouter>
                <LogicProvider>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route exact path="/category/:categoryID" element={<ItemListContainer />} />
                        <Route exact path="/productos/:id" element={<ItemDetailContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                    </Routes>
                </LogicProvider>
        </BrowserRouter>
    )
}

export default App