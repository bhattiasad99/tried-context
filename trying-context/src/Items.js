import React, { useContext } from "react";
import CartContext from './cart-context'

const Items = (props) => {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = (event) => {
        event.preventDefault();
        cartCtx.addItem(
            props.itemsList[event.target.id]
        )
    }

    // styles
    const labelStyle = {
        color: 'red',
        padding: '5px',
    }
    const spanStyle = {
        color: 'black'
    }
    const listStyle = {
        listStyleType: 'none',
        border: '1px solid black',
        boxShadow: '0px 1px 1px rgba(0,0,0,0.7)',
        padding: '10px'
    }
    // JSX
    return <ul>
        {props.itemsList.map(item =>
            <li style={listStyle} key={item.id}>
                <button onClick={addToCartHandler} id={item.id}>ADD TO CART</button>
                <div style={labelStyle}>Name:
                <span style={spanStyle}>{item.name}</span>
                </div>
                <div style={labelStyle}>ID:
                <span style={spanStyle}>{item.id}</span>
                </div>
                <div style={labelStyle}>Price:
                <span style={spanStyle}>{item.price}</span>
                </div>
                <div style={labelStyle}>Description:
                <span style={spanStyle}>{item.descr}</span>
                </div>
            </li>
        )}
    </ul>;
};

export default Items;
