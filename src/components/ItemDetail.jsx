import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useContext, useState } from 'react'
import { LogicContext } from "../context/LogicCartContext";

const ItemDetail = ({ productos }) => {
    
    const { id } = useParams()

    const filter = productos.filter((producto) => producto.id == id)

    const { addToCart, idP} = useContext(LogicContext)

    const addedToCart = (buy) => {
        for (let i = 0; i < counter; i++) {
            addToCart(buy);
        }
    }
    

    const [counter, setCounter] = useState(1)

    const handleLess = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const handleMore = () => {
        if (counter < 10 ){
            setCounter(counter + 1)
        };
    }

    return (
        <>
            {
                filter.map((p) => {
                    return (
                        <Card key={idP} className='card'>
                            <Card.Img className='card-img' src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Title>$ {p.price}</Card.Title>
                                <Card.Text>{p.description}</Card.Text>
                                <div className="div-buttons-moreless">
                                    <Button onClick={handleLess}>-</Button><p className="counter">{counter}</p> <Button onClick={handleMore}>+</Button>
                                </div>
                                <Button onClick={() => addedToCart(p)} className="btn btn-success">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default ItemDetail