import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <>
            <div className="card-grid">
                {
                    productos.map((producto) => {
                        return(
                            <Item
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                price={producto.price}
                                description={producto.description}
                                image={producto.image}
                                category={producto.category}
                            />
                        )
                    })
                }   
            </div>
        </>
    )
}

export default ItemList