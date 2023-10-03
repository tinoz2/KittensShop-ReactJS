import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    return (
        <>
            <div>
                <NavBar />
                <ItemListContainer greeting="Product" />
            </div>
        </>
    )
}

export default App