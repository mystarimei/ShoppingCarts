import React from 'react'

export default function ShoppingCartItem(props) {
  const { handleQuantityAdded, handleQuantitySubtracted } = props;
  const { id, name, price, url, qty } = props.cart;
  const { flashSaleTime } = props.products;
  return (
    <div style={{ display: "flex", paddingBottom: 10, margin: 3 }}>
      <div style={{ width: "27%" }}>
        <img src={url} alt='' style={{ width: '97%', height: '100%' }} />
      </div>
      <div style={{ width: "73%" }}>
        <div>
          <span style={{ backgroundColor: 'white', fontSize: 24 }}><b>{name}</b></span>
        </div>
        <div>
          <span style={{ fontSize: 24, color: "red" }}><b>{price}</b></span>
        </div>
        <div>
          <button style={{ color: 'white', fontSize: 20, borderRadius: '10px', borderColor: "blue", backgroundColor: 'blue' }}
            onClick={() => handleQuantityAdded(id)}
            disabled={flashSaleTime <= 0 ? true : false}
          >
            ＋
          </button>
          <span style={{ fontSize: 20, padding: 10 }}>{qty}</span>
          <button style={{ color: 'white', fontSize: 20, borderRadius: '10px', borderColor: "blue", backgroundColor: 'blue' }} onClick={() => handleQuantitySubtracted(id)}>－</button>
        </div>
      </div>
    </div >
  )
}
