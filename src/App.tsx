import './App.css';
import Products from './components/Products/Products.tsx';
import Cart from './components/Cart/Cart.tsx';
import { useEffect } from 'react';
import { saveCartState } from './localStorage.ts';
import { store } from './store/store.ts';

function App() {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveCartState(store.getState().cart);
    });

    return () => {
      unsubscribe();
    };
  });
  return (
    <>
      <Cart />
      <Products />
    </>
  );
}

export default App;
