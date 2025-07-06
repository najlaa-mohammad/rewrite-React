import "./Products.css"
import Product from "./Product";

const productList = [
  {
    id: 1,
    image: "../assets/images/product_01.jpg",
    title: "Classic Denim Jacket",
    price: 49.99,
    description: "A stylish denim jacket for all seasons.",
    reviews: 21,
    rating: 4,
  },
  {
    id: 2,
    image: "../assets/images/product_02.jpg",
    title: "Casual Sneakers",
    price: 64.5,
    description: "Comfortable sneakers perfect for daily wear.",
    reviews: 58,
    rating: 5,
  },
  {
    id: 3,
    image: "../assets/images/product_03.jpg",
    title: "Leather Handbag",
    price: 120.0,
    description: "Elegant leather handbag for every occasion.",
    reviews: 37,
    rating: 3,
  },
  {
    id: 4,
    image: "../assets/images/product_04.jpg",
    title: "Winter Scarf",
    price: 25.75,
    description: "Keep warm with this soft winter scarf.",
    reviews: 14,
    rating: 4,
  },
  {
    id: 5,
    image: "../assets/images/product_05.jpg",
    title: "Sunglasses",
    price: 34.2,
    description: "Trendy UV-protection sunglasses.",
    reviews: 66,
    rating: 5,
  },
  {
    id: 6,
    image: "../assets/images/product_06.jpg",
    title: "Fitness Watch",
    price: 89.99,
    description: "Track your health with this smart watch.",
    reviews: 42,
    rating: 4,
  },
];

const Products = () => {
  return (
    <ul className="item-list">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
};



export default Products;
