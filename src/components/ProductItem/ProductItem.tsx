import styles from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice.ts';

interface ProductItemProps {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductItem = ({
  id,
  image,
  name,
  description,
  price,
}: ProductItemProps) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(addToCart({ id, name, price }));
  };
  return (
    <li className={styles.productItem}>
      <img src={image} alt={name} className={styles.productImage} />
      <h2 className={styles.productTitle}>{name}</h2>
      <p>{description}</p>
      <p className={styles.productPrice}>$ {price}</p>
      <button onClick={addItemToCartHandler} className={styles.addToCartButton}>
        Add item to cart
      </button>
    </li>
  );
};

export default ProductItem;
