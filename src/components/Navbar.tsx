import logo from "../assets/images/logo.png";
import lens from "../assets/images/lens.png";
import account from "../assets/images/account.png";
import heart from "../assets/images/heart.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
// import bag from "../assets/images/";

const Navbar = () => {
  return (
    <div
      className="flex text-xs font-bold gap-8  p-4 pl-8 text-gray-700 items-center"
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <img src={logo} alt="logo" className="w-20 h-12" />
      <h1 className=" cursor-pointer">MEN</h1>
      <h1 className=" cursor-pointer">WOMEN</h1>
      <h1 className=" cursor-pointer">KIDS</h1>
      <h1 className=" cursor-pointer">HOME & LEVING</h1>
      <h1 className=" cursor-pointer">BEAUTY</h1>
      <h1
        className="cursor-pointer"
        style={{ position: "relative", display: "inline-block" }}
      >
        STUDEO
        <span
          style={{
            position: "absolute",
            fontSize: "8px",
            color: "red",
            top: -5,
            right: -23,
          }}
        >
          NEW
        </span>
      </h1>
      <div className="border border-gray-300 flex items-center rounded bg-gray-100 pl-2 w-96 ml-24 font-normal">
        <img src={lens} alt="lens" className="h-3 w-3" />
        <input
          className="bg-gray-100 outline-none text-gray-900 text-sm block w-full p-2 pl-4"
          placeholder="Search for products,brands and more"
        />
      </div>
      <div className="flex gap-6 items-center ml-8">
        <div className="flex flex-col items-center">
          <img src={account} alt="acount" className="h-5 w-5" />
          <h1 className="font-bold" style={{ fontSize: "11px" }}>
            Profile
          </h1>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img src={heart} alt="heart" className="h-5 w-5" />
          <h1 className="font-bold" style={{ fontSize: "11px" }}>
            Wishlist
          </h1>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <HiOutlineShoppingBag size="24px" />
          <h1 className="font-bold" style={{ fontSize: "11px" }}>
            Bag
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
