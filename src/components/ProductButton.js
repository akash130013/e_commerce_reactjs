import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from "react-redux"
import {handleCartItem} from '../action'

function ProductButton({price,id,handleCartItem}) {


  const handleCart = (id)=>{
    // console.log(id);
       handleCartItem(id);
  }

  return (
    <>
    <Button animated>
      <Button.Content visible>Price</Button.Content>
      <Button.Content hidden>
        <Icon name='dollar sign'/>{price}
        
      </Button.Content>
    </Button>
   
   <Button animated='fade' primary onClick={()=>handleCart(id)}>
      <Button.Content visible>Add To Cart</Button.Content>
      <Button.Content hidden>
        <Icon name='shop' />
      </Button.Content>
    </Button>

  </>
  )
}


const mapStateToProps = (state)=>{
  return {
    state,
  }
}

export default connect(mapStateToProps,{handleCartItem})(ProductButton)
