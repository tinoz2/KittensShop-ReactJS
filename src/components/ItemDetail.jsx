import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const ItemDetail = ({ productos }) => {

    const [counter, setCounter] = useState(1)

    const less = () => {
        if(counter >= 2){
            setCounter(counter - 1)
        }
    }

    const more = () => {
        setCounter(counter + 1)
    }

    const { id } = useParams()

    const filter = productos.filter((producto) => producto.id == id)
    
    return (
        <>
            {
                filter.map((p) => {
                    return (
                        <Card key={p.id} className='card'>
                            <Card.Img className='card-img' src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Title>$ {p.price}</Card.Title>
                                <Card.Text>{p.description}</Card.Text>
                                <Button onClick={less}>-</Button><Card.Text>{counter}</Card.Text> <Button onClick={more}>+</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default ItemDetail