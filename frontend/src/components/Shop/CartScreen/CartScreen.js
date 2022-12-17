import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Message";
import { addToCart, removeFromCart } from "../../../actions/cartActions";

import "./CartScreen.css";

const CartScreen = () => {
  const params = useParams();
  const productId = params.id;
  const quantity = useLocation();
  const qty = quantity.search ? Number(quantity.search.split("=")[1]) : 1;
  console.log(productId, qty);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = (id) => {};

  return (
    <div className="CartScreen">
      {cartItems.length === 0 ? (
        <Message> Your cart is empty </Message>
      ) : (
        cartItems.map((item) => (
          <div className="CartCard" key={item.name}>
            <div className="CartImage">
              <img src={item.image[0]} alt={item.name} />
            </div>
            <Link t0={`/product/${item.product}`}>{item.name} </Link>
            <h2>${item.price}</h2>
            <div>
              <label>Qty</label>
              <select
                name="quantity"
                value={item.qty}
                className="Button"
                onChange={(e) =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="CartRemove"
              onClick={() => removeFromCartHandler(item.product)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <hr />
      <div className="CartTotal">
        <div className="CartDetails">
          <h2>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            items
          </h2>
          <h3>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </h3>
        </div>

        <button
          className="Checkout"
          disabled={cartItems.length === 0}
          onClick={checkoutHandler}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
