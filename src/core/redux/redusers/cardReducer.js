const ADD_TO_CART = "ADD_TO_CART"
const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART"
const ITEM_INCREMENT = "ITEM_INCREMENT"
const ITEM_DECREMENT = "ITEM_DECREMENT"
const DELETE_ALL_ITEMS = "DELETE_ALL_ITEMS"
export const addToCartAction = payload => ({ type: ADD_TO_CART, payload })
export const deleteItemFromCartAction = id => ({ type: DELETE_ITEM_FROM_CART, payload: id })
export const incrementItemAction = id => ({ type: ITEM_INCREMENT,payload:id })
export const decrementItemAction = id => ({ type: ITEM_DECREMENT ,payload:id})
export const deleteAllItemsAction = () => ({ type: DELETE_ALL_ITEMS })


const checkProduct = (state, payload) => {
  const productInCart = state.find(el => el.id === payload.id);
  if (!productInCart) { // !productInCart (false) --- productInCart === undefined
    return [...state, { ...payload, count: 1 }]
  } else {
    productInCart.count++
    return [...state]
  }
}
const initialState = JSON.parse(localStorage.getItem('product')) || []

export const cardReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload)
  } 
  else if (action.type === DELETE_ITEM_FROM_CART) {
    return state.filter(el => el.id !== action.payload)
  } 
  else if (action.type === ITEM_INCREMENT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } 
  else if (action.type === ITEM_DECREMENT) {
    const target_item = state.find(el => el.id === action.payload)
    if (target_item.count === 1) {
  
      return state.filter(el => el.id !== action.payload)
    } else {
      target_item.count--
    }
    return [...state]
  } 
  else if (action.type === DELETE_ALL_ITEMS) {
    return []

  }
  else return state
}