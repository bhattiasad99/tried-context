import React from 'react';
// setting initial state with all methods too
const CartContext = React.createContext(
    {
        items: [],
        addItem: (item) => { }
    }
)

export default CartContext