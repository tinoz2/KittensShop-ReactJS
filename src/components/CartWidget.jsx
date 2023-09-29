import { useState } from "react"

const CartWidget = () => {

    const [numberCart, setNumberCart] = useState(0)

    return (
        <>
        <li className="nav-item">
            <span className="nav-link"><i class="fa-solid fa-bag-shopping number-style"></i>{numberCart}</span>
        </li>
        </>
    )
}

export default CartWidget