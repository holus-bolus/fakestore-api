import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem.tsx';
import styles from './Products.module.css';
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <ul className={styles.productsList}>
      {products &&
        products.map((product: any) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.title}
              description={product.description}
              price={product.price}
              id={product.id}
            />
          );
        })}
    </ul>
  );
};

export default Products;
