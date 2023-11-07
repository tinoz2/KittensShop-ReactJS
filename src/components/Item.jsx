import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ title, image, id, category }) => {
    return (
        <>
            <Card className='card'>
                <Card.Img className='card-img' src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{category}</Card.Text>
                    <Button variant="primary">
                        <Link to={`/productos/${id}`} style={{color: 'white'}}>
                            Ver detalles
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item