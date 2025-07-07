import "./ProductList.css";
import Product from "./Product";
import { Toaster } from "react-hot-toast";

const productList = [
  {
    id: 1,
    image: "/images/product_01.jpg",
    title: "Classic Denim Jacket",
    price: 49.99,
    description: "A stylish denim jacket for all seasons.",
    reviews: 21,
    rating: 3,
  },
  {
    id: 2,
    image: "/images/product_02.jpg",
    title: "Casual Sneakers",
    price: 64.5,
    description: "Comfortable sneakers perfect for daily wear.",
    reviews: 58,
    rating: 5,
  },
  {
    id: 3,
    image: "/images/product_03.jpg",
    title: "Leather Handbag",
    price: 120.0,
    description: "Elegant leather handbag for every occasion.",
    reviews: 37,
    rating: 3,
  },
  {
    id: 4,
    image: "/images/product_04.jpg",
    title: "Winter Scarf",
    price: 25.75,
    description: "Keep warm with this soft winter scarf.",
    reviews: 14,
    rating: 2,
  },
  {
    id: 5,
    image: "/images/product_05.jpg",
    title: "Sunglasses",
    price: 34.2,
    description: "Trendy UV-protection sunglasses watch.",
    reviews: 66,
    rating: 1,
  },
  {
    id: 6,
    image: "/images/product_06.jpg",
    title: "Fitness Watch",
    price: 89.99,
    description: "Track your health with this smart watch.",
    reviews: 42,
    rating: 4,
  },
];

const ProductList = () => {
  return (
    <div className="product-list-grid">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};




export default ProductList;

