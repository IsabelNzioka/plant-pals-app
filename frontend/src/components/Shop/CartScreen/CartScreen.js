import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Message";
import { addToCart } from "../../../actions/cartActions";

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

  return (
    <div>
      {cartItems.length === 0 ? (
        <Message> Your cart is empty </Message>
      ) : (
        <h1>Items will be displayed soon</h1>
      )}
    </div>
  );
};

export default CartScreen;
