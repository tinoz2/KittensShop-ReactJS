import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {

    const { categoryID } = useParams()

    const [productos, setProductos] = useState([])

    const [filteredProductos, setFilteredProductos] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "productos")
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProductos(docs)
        })
    }, [])

    useEffect(() => {
        if (categoryID) {
            const filteredProducts = productos.filter(producto => producto.category === categoryID)
            setFilteredProductos(filteredProducts)
        } else {
            setFilteredProductos(productos)
        }
    }, [categoryID, productos])

    return (
        <>
            <ItemList productos={filteredProductos} />
        </>
    )
}

export default ItemListContainer