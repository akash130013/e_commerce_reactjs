import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS,FETCH_PRODUCT,ADD_TO_CART } from "../action/type"
// items

const cartItems = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [];

  const initialStore ={
    total:0,
    amount:0,
    cart:cartItems,
    products:[],
  }

function reducer(state=initialStore, action) {

    switch (action.type) {

        case FETCH_PRODUCT:
           
           return {...state,products:action.payload,amount:state.cart.length}

        case ADD_TO_CART:
            
             const cartItem=state.products.filter(value => value.id==action.payload)
             const newCartItem=state.cart.concat(cartItem);
             localStorage.setItem("cartItem", JSON.stringify(newCartItem))
           return {...state, cart:newCartItem,amount:newCartItem.length}

        case CLEAR_CART:
            localStorage.removeItem('cartItem');
            localStorage.clear();
            return { ...state, cart: [] }

        case REMOVE:

            const newdata = state.cart.filter((item) => {
                return item.id !== parseInt(action.payload.id);
            })

            localStorage.clear();
            localStorage.setItem("cartItem", JSON.stringify(newdata));

            return { ...state, cart: newdata }

        case GET_TOTALS:

            let { total } = state.cart.reduce((cartTotal, cartItem) => {
               const { price } = cartItem;
                cartTotal.total += price; 
                return cartTotal;

            }, {
                total: 0,
            })

            total =parseFloat(total.toFixed(2));
            return { ...state, total }

        default:
            return state;

    }

}


export default reducer