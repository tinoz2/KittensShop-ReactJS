import { useContext, useState } from "react"
import { LogicContext } from "../context/LogicCartContext.jsx"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Cart = () => {

    const { listBuy, eraseToCart, idP, emptyAll} = useContext(LogicContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderID, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }

    const order = {
        dataClient : {
            nombre,
            email
        }
        ,
        productSelected : listBuy.map(item => {
            return{
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.qty
            }
        })
    }

    const ordersCollection = collection(db, 'MiNuevaOrden')

    const totalCalculator = () => {
        return listBuy.reduce((total, item) => total + item.price, 0).toFixed(2)
    }

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {
                    listBuy.map(item => (
                        <Card key={idP}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <Card.Text>
                                    $ {item.price}
                                </Card.Text>
                                <Card.Text>
                                    {item.qty}
                                </Card.Text>
                                <Button onClick={() => eraseToCart(item.id)} className="btn btn-danger">Eliminar</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
            {
                listBuy.length >= 1 ?
                    <div>
                        <div>
                            Total: ${totalCalculator()}
                        </div>
                        <div className="container-btn-cart">
                            <Button onClick={emptyAll} className="btn btn-danger btn-myclass">Empty all</Button>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setNombre(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p>{orderID}</p>
                        </Form>
                    </div> :
                    <div>
                        <p style={{ color: 'white', fontSize: '3rem', textAlign: 'center' }}>Cart</p>
                        <p style={{ color: '#f7bb0e', fontSize: '2rem', textAlign: 'center' }}>Empty cart</p>
                    </div>
            }
        </div>
    )
}

export default Cart