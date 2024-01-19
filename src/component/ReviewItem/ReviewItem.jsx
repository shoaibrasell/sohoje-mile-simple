import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import './ReviewItem.css'

const ReviewItem = ({product , handleRemoverFromCart}) => {
  const {id, img , price , name , quantity} = product;
  return (
    <div className='review-item'>
      <img src={img} alt="" />
      <div className='review-details'>
          <p className='product-title'>{name}</p>
          <p>Price : <span className='orange-text'>${price}</span></p>
          <p>Order Quantity :<span className='orange-text'>{quantity}</span> </p>
      </div>
      <button onClick={() => handleRemoverFromCart(id)} className='btn-detele'>
        <FontAwesomeIcon className='delete-icon' icon= { faTrash} />
        
      </button>
    </div>
  );
};

export default ReviewItem;