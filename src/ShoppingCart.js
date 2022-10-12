import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart(props) {
  const { carts, handleQuantityAdded, handleQuantitySubtracted, handleCartsClear, products } = props
  return (
    <div style={{ width: "50%", border: 'solid 0.1px', borderColor: "gray" }}>
      <div>
        <h1>購物車</h1>
        {carts.map((cart) => {
          return <ShoppingCartItem key={cart.id} cart={cart} products={products} handleQuantityAdded={handleQuantityAdded} handleQuantitySubtracted={handleQuantitySubtracted} handleCartsClear={handleCartsClear} />
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
        <span>總計：{carts.reduce((a, { price, qty }) => a + price * qty, 0)} 元</span>
        <span><button onClick={() => handleCartsClear()}>清除購物車</button></span>
      </div>
    </div>
  );

}
