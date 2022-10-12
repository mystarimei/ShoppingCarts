import React from "react";
import ProductListItem from "./ProductListItem";

export default function ProductList(props) {
  const { products, handleAddToCart } = props
  return (
    <div style={{ width: "50%", border: 'solid 0.1px', borderColor: "gray" }}>
      <h1>商品清單</h1>
      {products.map((product) => {
        return (<ProductListItem key={product.id} product={product} handleAddToCart={handleAddToCart} />)
      })}
    </div>
  )
}
