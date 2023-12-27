import classes from './ProductItem.module.css';

const ProductItem = (props: any) => {
  return (
    <li className={classes.productitem} key={props.id}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button>Add item to cart</button>
    </li>
  );
};

export default ProductItem;
