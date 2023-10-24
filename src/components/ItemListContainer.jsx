import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {

    const { categoryID } = useParams()

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            return data
        } catch (error) {
            console.error('error en tu data', error)
        }
    }

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchData().then((data) => {
            if (categoryID !== undefined) {
                const filteredProducts = data.filter(producto => producto.category === categoryID)
                setProductos(filteredProducts)
            } else {
                setProductos(data);
            }
        });
    }, [categoryID])

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer