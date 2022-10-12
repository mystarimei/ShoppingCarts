import React, { Component } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import img1Url from "./img/1.jpg";
import img2Url from "./img/2.jpg";
import img3Url from "./img/3.jpg";
import img4Url from "./img/4.jpg";
import img5Url from "./img/5.jpg";
// import img6Url from "./img/6.jpg";
// import img7Url from "./img/7.jpg";
// import img8Url from "./img/8.jpg";
// import img9Url from "./img/9.jpg";

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      products: [
        {
          // 商品編號
          id: 1,
          // 商品名稱
          name: "PreSonus 專業音響",
          // 商品描述
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          // 商品價格 
          price: 300,
          // 商品圖片來源
          url: img1Url,
          // 限時特賣時間（秒），即 5 秒後不可購買此商品
          flashSaleTime: 2,
          //數量
          qty: 0
        },
        {
          id: 2,
          name: "古董型電話",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          price: 280,
          url: img2Url,
          flashSaleTime: 100,
          qty: 0
        },
        {
          id: 3,
          name: "Sony RX100M6 相機",
          description:
            " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          price: 180,
          url: img3Url,
          flashSaleTime: 100,
          qty: 0
        },
        {
          id: 4,
          name: "不鏽鋼咖啡義式濃縮咖啡機",
          description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
          price: 120,
          url: img4Url,
          flashSaleTime: 100,
          qty: 0
        },
        {
          id: 5,
          name: "精華乳霜",
          description:
            "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
          price: 230,
          url: img5Url,
          flashSaleTime: 300,
          qty: 0
        }
      ],
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((state) => {
        const newProdcut = state.products.map((product) => {
          const flashSaleTime = product.flashSaleTime <= 0 ? 0 : product.flashSaleTime - 1
          return { ...product, flashSaleTime: flashSaleTime }
        });
        return { products: newProdcut }
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  /**
   * 加入購物車
   * Tip: 
   *    1. 可使用 array.find() 取得商品清單中的商品資訊
   *    2. 可使用 array.findIndex() 判斷商品是否存在購物車清單中
   *    3. 可使用 array.push() 新增購物車清單的商品資訊
   *    4. 可使用 array.map() 調整在購物車的產品數量
   *    使用findIndex()判斷判斷商品是否存在購物車清單中，沒有使用push新增購物車，有利用map調整購物車數量
   * 
   */
  handleAddToCart = (id) => {
    // e.preventDefault();
    const { products, carts } = this.state;
    const product = products.find((product) => product.id === id);
    const findCarts = carts.findIndex((cart) => cart.id === id);
    if (findCarts < 0) {
      carts.push({ ...product, qty: product.qty + 1 })
      this.setState({
        carts: carts,
      })
    } else {
      const newCarts = carts.map((cart, index) => {
        return findCarts === index ? { ...cart, qty: cart.qty + 1 } : { ...cart }
      })
      this.setState({
        carts: newCarts,
      })
    }
  }

  /**
   * 增加購物車商品數量
   * Tip: 可使用 array.map() 調整在購物車的產品數量
   */

  handleQuantityAdded = (id) => {
    // e.preventDefault();
    const { carts } = this.state
    const newCarts = carts.map((cart) => {
      return id === cart.id ? { ...cart, qty: cart.qty + 1 } : { ...cart };
    })
    this.setState({
      carts: newCarts,
    })
  }

  /**
   * 減少購物車商品數量
   * Tip: 
   *    1. 可使用 array.map() 調整在購物車的產品數量
   *    2. 可使用 array.filter() 過濾購物車的商品進行清單資料重設
   */
  handleQuantitySubtracted = (id) => {
    // e.preventDefault();
    const { carts } = this.state
    const newCarts = carts.map((cart) => {
      return id === cart.id ? { ...cart, qty: cart.qty - 1 } : { ...cart };
    })
    const newQty = newCarts.filter((cart) => cart.qty > 0);
    this.setState({
      carts: newQty,
    })
  }
  handleCartsClear = () => {
    // e.preventDefault();
    this.setState({
      carts: [],
    })
  }

  render() {
    const { products, carts } = this.state
    return (
      <div style={{ display: "flex", flexDirection: 'row' }}>
        <ProductList products={products} handleAddToCart={this.handleAddToCart} />
        <ShoppingCart carts={carts} products={products} handleQuantityAdded={this.handleQuantityAdded} handleQuantitySubtracted={this.handleQuantitySubtracted} handleCartsClear={this.handleCartsClear} />
      </div>
    );
  }
}
