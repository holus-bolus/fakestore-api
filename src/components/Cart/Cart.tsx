import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { removeFromCart } from '../../store/cartSlice.ts';
import styles from './Cart.module.css';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number | undefined;
}

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const deleteItemFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  // @ts-ignore
  const totalPrice = cartItems.reduce((acc: number, item: CartItem) => {
    const quantity = item.quantity ?? 1;
    return acc + item.price * quantity;
  }, 0);
  return (
    <div className={styles.cartContainer}>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            {item.name} - {item.price} X {item.quantity}
            <button
              onClick={() => deleteItemFromCartHandler(item.id)}
              className={styles.removeItemButton}
            >
              Remove item
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.totalPrice}>Total Price: {totalPrice}</div>
    </div>
  );
};

export default Cart;
