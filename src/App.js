import "./App.css";
import React from "react";
import Header from "./header";
import Card from "./Card";
import CartItem from "./CartItem";
import { useState } from "react";
export default function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "SAF Set of 4 Animal Design",
      description: "Decorative painting",
      price: 299,
      image: "https://m.media-amazon.com/images/I/81I5OzGralL._AC_UL480_FMwebp_QL65_.jpg",
      count: 1,
      disable:true,
    },
    {
      id: 2,
      title: "SAF Set of 3 Hexagon Kid's Room Decor",
      description: "Modern art 6mm",
      price: 229,
      image: "https://m.media-amazon.com/images/I/818p6+nUaNL._AC_UL480_FMwebp_QL65_.jpg",
      count: 1,
      disable:true,
    },
    {
      id: 3,
      title: "RAG28 Vintage Designer",
      description: "Wooden Wall Hangings Home Decor Items",
      price: 449,
      image: "https://m.media-amazon.com/images/I/719eYv8nkFL._AC_UL480_FMwebp_QL65_.jpg ",
      count: 1,
      disable:true,
    },
    {
      id: 4,
      title: "TiedRibbons® Cycle Shape Flower Vase with Peonies Bunches",
      description: "home decor",
      price: 549,
      image: "https://m.media-amazon.com/images/I/91jKRVXmaML._AC_UL480_FMwebp_QL65_.jpg",
      count: 1,
      disable:true,
    },
    {
      id: 5,
      title: "RAG28 Vintage Designer Wooden Wall Hangings ",
      description: "Home Decor Items, Large, Multicolor",
      price: 349,
      image: "https://m.media-amazon.com/images/I/81yITILA2YL._AC_UL480_FMwebp_QL65_.jpg",
      count: 1,
      disable:true,
    },
  ]);

  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  

  let addToCart = (id) => {
    console.log(id)
    let product = products.find(obj => obj.id === id);   
    filterData[id-1].disable = false;
    setCartItem([...cartItems, product]);
    setTotal(total + product.price);
  };

  let removeItem = id => {
    let result = window.confirm("Are you sure do you want to remove?");
    if (result) {
      let cartIndex = cartItems.findIndex(obj => obj.id === id);
      setTotal(total -  cartItems[cartIndex].price);
      cartItems.splice(cartIndex, 1);
      setCartItem([...cartItems]);
    }
  };
  const getSearchTerm = e => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };
  const filterData = products.filter(searchData => {
    return searchData.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const [qty, setQty] = useState(1);
  let increment = (id) => {
  let incrementQty = products.find((obj) => obj.id === id);
  filterData[id-1].count++
  setTotal(total+ incrementQty.price)
 };
let decrement = (id) => {
  let decrementQty = products.find((obj) => obj.id === id);
  filterData[id-1].count--;
  setTotal(total -  decrementQty.price)
  
  };



  return (
    <>
      <Header getSearchTerm={getSearchTerm}></Header>
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {filterData.map(product => {
                return (
                  <Card
                    data={product}
                    handleCart={addToCart}
                    increment={increment}
                    decrement={decrement}
                    quantity={qty}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <ol
              class="list-group list-group-numbered"
              style={{ position: "sticky", top: "60px" }}
            >
              {cartItems.length === 0 ? (
                <h3>
                  Cart is empty<i class="fas fa-shopping-cart"></i>
                </h3>
              ) : <h3></h3>}
              {cartItems.map(item => {
                return (
                  <CartItem
                    handleRemove={removeItem}
                    data={item}
                    quantity={qty}
                  />
                );
              })}
              <h1>Total - Rs {total}</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}


