import React, { useReducer } from 'react'
import CartContext from './cart-context'

const initialCartState = {
    // we are using the state ONLY to implement the state of items and also to manipulate the total amount. NOT to manipulate the add item method. Hence in initial cart state we will not put the add item part
    items: []
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART') {
        let updatedItems = state.items.concat(action.item)
        return { items: updatedItems }
    }
    return initialCartState
}



const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, initialCartState)
    const addToCartHandler = item => {
        dispatchCartState(
            {
                type: 'ADD_CART',
                item: item
            }
        )
    }

    const cartContext = {
        // now we need to do the following things
        // 1. Access cart from different places
        // 2. Update cart from different places
        // 3. For updating we used OOP, we added a method in the cartContext object and we will call that method inside different components
        // 4. For items list however we need to do that using states. I am using reducer because of the complexicity

        items: cartState.items,
        addItem: addToCartHandler
    }
    // the value attr of cart context will be transported throughout the project
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}



export default CartProvider
