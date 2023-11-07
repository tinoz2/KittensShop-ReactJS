import Item from "./Item"
import Loader from "./Loader"

const ItemList = ({ productos }) => {
    return (
        <>
            {
                productos.length <= 0 ? <Loader /> :
                    <div className="card-grid">
                        {
                            productos.map((producto) => {
                                return (
                                    <Item
                                        key={producto.id}
                                        id={producto.id}
                                        title={producto.title}
                                        price={producto.price}
                                        description={producto.description}
                                        image={producto.image}
                                        category={producto.category}
                                        qty={producto.qty}
                                    />
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default ItemList