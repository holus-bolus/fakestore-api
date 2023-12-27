import classes from './ProductItem.module.css';
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
    <li className={classes.productitem} key={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={addItemToCartHandler}>Add item to cart</button>
    </li>
  );
};

export default ProductItem;
