import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart;
    const savedCart = [];
    //step 1: get id of the addedProduct
    for (const id in storedCart) {
      //step 2:get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //step 3 : add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step 4 : add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added product',addedProduct);
    }
    //step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    //cart.push(product);
    let newCart = [];
    // const newCart = [...cart, product];
    //if product doesn't in the  cart, then set quantity =1
    //if exit update quantity by 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
          cart={cart}
          handleClearCart = {handleClearCart}
        >
          <Link to="/orders" className="proceed-link">
            <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
