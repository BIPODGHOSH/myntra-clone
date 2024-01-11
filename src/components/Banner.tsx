import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
const Banner = () => {
  return (
    <div className="mt-28 ">
      <img src={banner1} alt="banner1" className="p-4 max-h-80 w-screen" />
      <img src={banner2} alt="banner2" className="p-4 max-h-80 w-screen" />
    </div>
  );
};

export default Banner;
