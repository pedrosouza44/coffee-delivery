import { ReactNode, createContext, useReducer, useEffect } from 'react';
import { addItemAction, removeItemAction, incrementItemAction, decrementItemAction, checkoutCartAction } from '../reducers/cart/action';
import { cartReducer, Item, Order } from '../reducers/cart/reducer';
import { OrderInfo } from '../pages/Cart';
import { useNavigate } from 'react-router-dom';

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  incrementItem: (itemId: Item['id']) => void
  decrementItem: (itemId: Item['id']) => void
  checkoutCart: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContentProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContentProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-dilevry-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )
  // const [cartState, dispatch] = useReducer(
  //   cartReducer,
  //   {
  //     cart: [],
  //     orders: [],
  //   },
  //   (cartState) => {
  //     const storedStateAsJSON = localStorage.getItem(
  //       '@coffee-dilevry-1.0.0',
  //     )

  //     if (storedStateAsJSON) {
  //       return JSON.parse(storedStateAsJSON)
  //     }

  //     return cartState
  //   }
  // )

  const navigate = useNavigate();

  const { cart, orders } = cartState;

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementItem(itemId: Item['id']) {
    dispatch(incrementItemAction(itemId))
  }

  function decrementItem(itemId: Item['id']) {
    dispatch(decrementItemAction(itemId))
  }

  function checkoutCart(order: OrderInfo) {
    console.log(order)
    dispatch(checkoutCartAction(order, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem('@coffee-dilevry-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        checkoutCart,
        cart,
        orders
      }}
    >
      {children}
    </CartContext.Provider>
  )
}