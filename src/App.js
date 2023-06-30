import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React, {useState} from 'react';

function App() {
  const products = [
    {
      price: 999999,
      name: 'Iphone 10S max',
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi 10s pro max",
      quantity: 0,
    }
  ]

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  return (
    <>
    <Navbar />
    <main className="container mt-5">
    <ProductList productList={productList}/>
    </main>
    </>
  );
}

export default App;
