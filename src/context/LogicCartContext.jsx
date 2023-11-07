import { createContext, useReducer, useId } from "react";
import Swal from 'sweetalert2'

export const LogicContext = createContext(null)

const initialState = []

export const LogicProvider = ({ children }) => {

    const buyReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] ADD TO CART':
                return [...state, action.payload]
            case '[CART] ERASE TO CART':
                return state.filter(buy => buy.id !== action.payload);
            case '[CART] EMPTY ALL':
                Swal.fire({
                    icon: "error",
                    title: "Productos eliminados",
                });
                return [];
            default:
                return state;
        }
    }

    const addToCart = (buy) => {
        const action = {
            type: '[CART] ADD TO CART',
            payload: buy
        }
        dispatch(action)
    }
    const eraseToCart = (id) => {
        const action = {
            type: '[CART] ERASE TO CART',
            payload: id
        }
        dispatch(action)
    }
    const emptyAll = (buy) => {
        const action = {
            type: '[CART] EMPTY ALL',
            payload: buy
        }
        dispatch(action)
    }

    const [listBuy, dispatch] = useReducer(buyReducer, initialState)

    const idP = useId()

    return (
        <LogicContext.Provider value={{ listBuy, addToCart, eraseToCart, emptyAll, idP }}>
            {children}
        </LogicContext.Provider>
    )

}

export default LogicProvider;
