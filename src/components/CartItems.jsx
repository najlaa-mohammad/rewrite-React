import { useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-hot-toast";

const CartItems = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success("🗑️ Product removed from cart!");
  };

  
  return (
    <div style={{ padding: 20, borderTop: "1px solid #ccc" }}>
      <h2>🛒 Your Cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width="200"
                    height="100"
                  />
                  <strong>{item.title}</strong> – ${item.price}
                </div>
                <button onClick={() => handleRemove(item.id)}>❌ Remove</button>
              </li>
            ))}
          </ul>

          <h3>
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
};

export default CartItems;
