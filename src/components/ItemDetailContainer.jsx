import ItemDetail from "./ItemDetail.jsx"
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {

    const fetchData = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            return data
        }catch(error){
            console.error('error en tu data', error)
        }
    }
    
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchData().then((product) => setProductos(product))
    }, [])

    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    )
}

export default ItemDetailContainer