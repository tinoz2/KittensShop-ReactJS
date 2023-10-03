import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'

const CartWidget = () => {

    const [numberCart, setNumberCart] = useState(0)

    return (
        <>
            <li className="nav-item">
                <span className="nav-link"><FontAwesomeIcon className="number-style" icon="fa-solid fa-bag-shopping" />{numberCart}</span>
            </li>
        </>
    )
}

export default CartWidget