// import { useState } from "react";

import ProductList from "./components/ProductList";
import CartProvider from "./components/CartContext";
import { Toaster } from "react-hot-toast";
import CartItems from "./components/CartItems";

function App() {
  return (
    <>
      <CartProvider>
        <h1>Hello React</h1>

        <Toaster />
        <ProductList />
        <CartItems />
      </CartProvider>
    </>
  );
}

export default App;
