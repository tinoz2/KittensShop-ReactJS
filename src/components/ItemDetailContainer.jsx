import ItemDetail from "./ItemDetail.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProductos(docs);
        });
    }, []);

    return (
        <div>
            <ItemDetail productos={productos} />
        </div>
    );
}

export default ItemDetailContainer;
