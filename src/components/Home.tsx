import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import shoes from "../assets/images/shoes.jpg";
import clothes from "../assets/images/clothes.jpg";
import furniture from "../assets/images/furniture.jpg";
import electronics from "../assets/images/electronics.jpg";
import other from "../assets/images/others.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const getProducts = async () => {
    try {
      const productsJson = await fetch(
        `https://api.escuelajs.co/api/v1/products`
      );
      const products = await productsJson.json();
      setProducts(products);
      // console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div
      className={`p-10 flex ${
        isMobile && "flex-col content-center items-center"
      } gap-20 p-auto`}
    >
      <div
        className="h-72 w-60 p-2 pt-48"
        style={{
          backgroundImage: `url(${clothes})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 300px",
        }}
      >
        <div className="bg-pink-800 text-orange-100 flex flex-col items-center">
          <h1 className="text-lg">Clothes</h1>
          <h1 className="text-xl">40%-50%</h1>
          <h1 className="text-lg">Buy Now</h1>
        </div>
      </div>

      <div
        className="h-72 w-60 p-2 pt-48"
        style={{
          backgroundImage: `url(${shoes})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 300px",
        }}
      >
        <div className="bg-pink-800 text-orange-100 flex flex-col items-center">
          <h1 className="text-lg">Shoes</h1>
          <h1 className="text-xl">40%-70%</h1>
          <h1 className="text-lg">Buy Now</h1>
        </div>
      </div>

      <div
        className="h-72 w-60 p-2 pt-48"
        style={{
          backgroundImage: `url(${furniture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 300px",
        }}
      >
        <div className="bg-pink-800 text-orange-100 flex flex-col items-center">
          <h1 className="text-lg">Furniture</h1>
          <h1 className="text-xl">20%-50%</h1>
          <h1 className="text-lg">Buy Now</h1>
        </div>
      </div>

      <div
        className="h-72 w-60 p-2 pt-48"
        style={{
          backgroundImage: `url(${electronics})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 300px",
        }}
      >
        <div className="bg-pink-800 text-orange-100 flex flex-col items-center">
          <h1 className="text-lg">Eloctronics</h1>
          <h1 className="text-xl">10%-30%</h1>
          <h1 className="text-lg">Buy Now</h1>
        </div>
      </div>

      <div
        className="h-72 w-60 p-2 pt-48"
        style={{
          backgroundImage: `url(${other})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "250px 300px",
        }}
      >
        <div className="bg-pink-800 text-orange-100 flex flex-col items-center">
          <h1 className="text-lg">Outhers</h1>
          <h1 className="text-xl">20%-70%</h1>
          <h1 className="text-lg">Buy Now</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
