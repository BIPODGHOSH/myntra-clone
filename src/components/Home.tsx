import { useMediaQuery } from "react-responsive";
import shoes from "../assets/images/shoes.jpg";
import clothes from "../assets/images/clothes.jpg";
import furniture from "../assets/images/furniture.jpg";
import electronics from "../assets/images/electronics.jpg";
import other from "../assets/images/others.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      className={`p-10 flex ${
        isMobile && "flex-col content-center items-center"
      } gap-20 p-auto`}
    >
      <Link to="/products" state={{ category: "nuevo" }}>
        <div
          className="h-72 w-48 p-2 pt-48"
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
      </Link>

      <Link to="/products" state={{ category: "Shoes" }}>
        <div
          className="h-72 w-48 p-2 pt-48"
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
      </Link>

      <Link to="/products" state={{ category: "Furniture" }}>
        <div
          className="h-72 w-48 p-2 pt-48"
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
      </Link>

      <Link to="/products" state={{ category: "Electronics" }}>
        <div
          className="h-72 w-48 p-2 pt-48"
          style={{
            backgroundImage: `url(${electronics})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "250px 300px",
          }}
        >
          <div className="bg-pink-800 text-orange-100 flex flex-col items-center">
            <h1 className="text-lg">Electronics</h1>
            <h1 className="text-xl">10%-30%</h1>
            <h1 className="text-lg">Buy Now</h1>
          </div>
        </div>
      </Link>

      <Link to="/products" state={{ category: "Miscellaneous" }}>
        <div
          className="h-72 w-48 p-2 pt-48"
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
      </Link>
    </div>
  );
};

export default Home;
