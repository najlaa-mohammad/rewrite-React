import { useContext } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-hot-toast";

const Product = ({ product }) => {
  const { title, image, price, description, rating, reviews, id } = product;
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAdd = () => {
    const exists = cartItems.find((item) => item.id === id);

    if (!exists) {
      setCartItems([...cartItems, product]);
      toast.success(" Product added to cart!");
    } else {
      toast("⚠️ Product already in cart!");
    }
  };

  return (
    <div
      className="product-card"
      style={{ border: "1px solid #ccc", padding: 10 }}
    >
      <img src={image} alt={title} width="100" height="100" />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>💵 ${price}</p>
      <p>
        ⭐ {rating} ({reviews} reviews)
      </p>
      <button onClick={handleAdd}>🛒 Add to Cart</button>
    </div>
  );
};

export default Product;
