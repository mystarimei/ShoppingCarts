import React from 'react'

export default function ProductListItem(props) {
  const { handleAddToCart } = props;
  const { id, name, description, price, url, flashSaleTime } = props.product;
  const flashtext = flashSaleTime <= 0 ? '已停售，下次請早。' : '限時搶購，剩下' + flashSaleTime + ' 秒。';
  return (
    <div style={{ display: "flex", flexDirection: 'row', paddingBottom: '10px', margin: 3 }}>
      <div style={{ width: "27%" }}>
        <img src={url} alt='' style={{ width: '97%', height: '100%' }} />
      </div>
      {/* ------------------------------------------------------------ */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: "73%" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ backgroundColor: 'white', fontSize: 24 }}><b>{name}</b></span>
          <span style={{ backgroundColor: 'white', color: "red" }}>{flashtext}</span>
        </div>
        <div style={{}}>
          <span style={{ color: "gray" }}>{description}</span>
        </div>
        <div style={{}}>
          <span style={{ fontSize: 24, color: "red", paddingRight: 10 }}><b>{price}</b></span>
          <button disabled={flashSaleTime <= 0 ? true : false} onClick={(e) => handleAddToCart(id)}>加入購物車</button>
        </div>
      </div>

    </div>
  )
}
