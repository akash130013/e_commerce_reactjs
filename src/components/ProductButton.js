import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from "react-redux"
import {handleCartItem,removeFromCart} from '../action'

function ProductButton({price,id,handleCartItem,cart,removeFromCart}) {
  
  const addToCart = (id)=>{
       handleCartItem(id);
  }

  const checkItemInCart=(id)=>{
    let isExist= cart.filter(item => item.id === id);
     return isExist.length>0 ? true : false;
  }

  const removeCartItem=(id)=>{
    removeFromCart(id);
  }

  return (
    <>
    <Button animated>
      <Button.Content visible>Price</Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign'/>{price}
        
      </Button.Content>
    </Button>
   
   {checkItemInCart(id) ? 
   <Button animated='fade'  color='red' onClick={()=>removeCartItem(id)}>
      <Button.Content visible>Remove Item</Button.Content>
      <Button.Content hidden>
        <Icon name='close' />
      </Button.Content>
    </Button>
    :
    <Button animated='fade' primary onClick={()=>addToCart(id)}>
      <Button.Content visible>Add To Cart</Button.Content>
      <Button.Content hidden>
        <Icon name='plus square' />
      </Button.Content>
    </Button>
}

  </>
  )
}


const mapStateToProps = (state)=>{
  const {cart}=state;
 
  return {
    cart,
  }
}

export default connect(mapStateToProps,{handleCartItem,removeFromCart})(ProductButton)
