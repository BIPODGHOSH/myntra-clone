import Banner from "./Banner";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-5">
        <Banner />
        <Home />
        <Products />
      </div>
    </div>
  );
};

export default Main;
