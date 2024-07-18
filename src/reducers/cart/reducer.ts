import { produce } from 'immer';
import { ActionTypes, Actions } from './action';
import { OrderInfo } from './../../pages/Cart';


export interface Item {
  id: string;
  quantity: number;
}

export interface Order extends OrderInfo {
  id: number;
  items: Item[];
}

interface CartState {
  cart: Item[];
  orders: Order[];
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAdd = draft.cart.find(item => {
          return item.id === action.payload.item.id
        })

        if (itemAdd) {
          itemAdd.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemRemove = draft.cart.findIndex(item => {
          return item.id === action.payload.itemId
        })

        draft.cart.splice(itemRemove, 1)
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const incrementItem = draft.cart.find(item => {
          return item.id === action.payload.itemId
        })

        if (incrementItem?.id) {
          incrementItem.quantity += 1
        }
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const decrementItem = draft.cart.find(item => {
          return item.id === action.payload.itemId
        })

        if (decrementItem?.id && decrementItem.quantity > 1) {
          decrementItem.quantity -= 1
        }
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []
        
        action.payload.callback(`/order/${newOrder.id}/success`)
      })

    default:
      return state
  }
}