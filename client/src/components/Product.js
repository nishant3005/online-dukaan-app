import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      toast.error('Sorry. Product is out of stock.');
      // window.alert('Sorry. Product is out of stock.');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div key={product.slug} className="product">
      <Link to={`product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link className="link-style" to={`product/${product.slug}`}>
          <strong>{product.name}</strong>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <p>
          <strong>${product.price}</strong>
        </p>
        {product.countInStock === 0 ? (
          <button className="btn" disabled>
            Out of Stock
          </button>
        ) : (
          <button
            onClick={() => addToCartHandler(product)}
            className="btn"
            variant="light"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
