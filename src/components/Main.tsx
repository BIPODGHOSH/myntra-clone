import Banner from "./Banner";
import Home from "./Home";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" mt-5">
        <Banner />
        <Home />
      </div>
    </div>
  );
};

export default Main;
