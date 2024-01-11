import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import OfferTime from "./OfferTime";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();
  const category = location.state?.category;

  const getProducts = async () => {
    try {
      const productsJson = await fetch(
        `https://api.escuelajs.co/api/v1/products`
      );
      const products = await productsJson.json();
      setProducts(products);
      setLoading(false); // Set loading to false when products are loaded
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <OfferTime />
      <h1 className="mt-4 text-lg font-bold ml-16">
        {location.state?.category}
      </h1>
      {loading ? (
        // Render a loading state or spinner while products are being fetched
        <p>Loading products...</p>
      ) : (
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-4"} p-3 `}
        >
          {products
            .filter(
              (product: any) =>
                !location.state ||
                product.category.name === location.state.category
            )
            .map((product: any) => (
              <div
                key={product.id}
                className=" bg-gray-100 w-60 h-52 mb-28 m-auto mt-5"
              >
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showArrows={false}
                  className="w-60 h-52"
                >
                  <div>
                    <img src={product.images[0]} alt="product" />
                  </div>
                  <div>
                    <img src={product.images[1]} alt="product" />
                  </div>
                  <div>
                    <img src={product.images[2]} alt="product" />
                  </div>
                </Carousel>
                <div className="flex flex-col items-start ml-4">
                  <h1 className="text-lg font-bold">
                    {product.title === "nuevo" ? "Clothes" : product.title}
                  </h1>
                  <h1 className="text-sm text-gray-500">
                    {product.category.name}
                  </h1>
                  <div className="flex items-center">
                    <h1 className="font-bold">${product.price}</h1>
                    <h1 className="text-xs text-gray-400 line-through ml-1">
                      {product.price + 60}
                    </h1>
                    <h1 className="text-xs text-orange-400 ml-2">($60 OFF)</h1>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
