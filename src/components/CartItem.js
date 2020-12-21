import React from "react";
import { connect } from "react-redux"
import { REMOVE, DECREASE, INCREASE } from '../action/type'

const CartItem = ({ image, title, price, amount, remove,increase,decrease }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>remove</button>
      </div>
    
    </div>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => {
  
  const { id,amount } = ownProps;
      
  return {
    remove: () => dispatch({ type: REMOVE, payload: { id } }),

  }

}

export default connect(null, mapDispatchToProps)(CartItem);
