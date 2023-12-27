import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { removeFromCart } from '../../store/cartSlice.ts';
import styles from './Cart.module.css';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const deleteItemFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

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
    </div>
  );
};

export default Cart;
