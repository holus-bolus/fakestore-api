import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <ul>
        {cartItems &&
          cartItems.map((item) => {
            return (
              <li key={item.id}>
                {item.name} - {item.price} X {item.quantity}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cart;
