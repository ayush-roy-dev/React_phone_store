import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';

export default function CartList({value}) {    
    return (
        <div className="container-fluid">
            {value.cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}
