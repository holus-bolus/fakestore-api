import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem.tsx';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <ul>
      {products &&
        products.map((product: any) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
    </ul>
  );
};

export default Products;
