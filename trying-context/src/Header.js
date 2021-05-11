import React, { useContext } from 'react'
import CartContext from './cart-context'
import styles from './Header.module.css'
const Header = (props) => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.length

    const cartNumberStyle = {
        border: '1px solid black',
        padding: '1px 5px',
        background: 'red',
        borderRadius: '50%',
        color: 'white',
    }
    return (
        <div className={styles.Header}>
            <button><span>Your Cart</span> <span>{numberOfCartItems}</span></button>
        </div>
    )
}

export default Header
