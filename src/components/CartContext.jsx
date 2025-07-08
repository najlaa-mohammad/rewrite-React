import { createContext, useEffect, useState } from "react";

// إنشاء السياق
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ تحميل البيانات من localStorage عند بدء التطبيق
  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  // ✅ حفظ كل تغيير في localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
