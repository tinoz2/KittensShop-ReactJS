import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route exact path="/category/:categoryID" element={<ItemListContainer/>}/>
                <Route exact path="/product/:id" element={<ItemDetailContainer />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App