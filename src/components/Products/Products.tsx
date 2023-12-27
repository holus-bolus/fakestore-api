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
  const [filteredProducts, setFilteredProducs] = useState<Product[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json: Product[]) => {
        setProducts(json);
        setFilteredProducs(json);
      });
  }, []);

  useEffect(() => {
    setFilteredProducs(
      products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice,
      ),
    );
  }, [minPrice, maxPrice, products]);

  return (
    <div>
      <div className={styles.filterSection}>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </div>
      <ul className={styles.productsList}>
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
