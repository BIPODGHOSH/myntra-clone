import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/images/logo.png";
import lens from "../assets/images/lens.png";
import account from "../assets/images/account.png";
import heart from "../assets/images/heart.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setShowMobileMenu(false);
    }
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center text-xs font-bold ${
        isMobile ? "gap-2" : "gap-8"
      } p-4 pl-8 text-gray-700  fixed z-10 bg-white w-full`}
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <img
        src={logo}
        alt="logo"
        className={isMobile ? "w-10 h-6" : "w-20 h-12"}
      />
      {isMobile && (
        <div className="border border-gray-300 flex items-center rounded bg-gray-100 pl-2 ml-0 font-normal">
          <img src={lens} alt="lens" className="h-3 w-3" />
          <input
            className="bg-gray-100 outline-none text-gray-900 text-sm block w-full p-2 pl-4"
            placeholder="Search for products, brands and more"
          />
        </div>
      )}
      {isMobile && (
        <div
          className="cursor-pointer ml-auto"
          onClick={toggleMobileMenu}
          style={{ marginRight: "1rem" }}
        >
          ☰
        </div>
      )}

      {isMobile && showMobileMenu && (
        <div className="flex flex-col items-end absolute top-16 left-0 right-0 bg-white border-b border-gray-300 p-4">
          <h1 className="cursor-pointer">MEN</h1>
          <h1 className="cursor-pointer">WOMEN</h1>
          <h1 className="cursor-pointer">KIDS</h1>
          <h1 className="cursor-pointer">HOME & LEVING</h1>
          <h1 className="cursor-pointer">BEAUTY</h1>
          <h1
            className="cursor-pointer relative"
            style={{ display: "inline-block" }}
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

          <div className="flex gap-6 items-center ml-3">
            <div className="flex flex-col items-center">
              <img src={account} alt="account" className="h-5 w-5" />
              <h1 className="font-bold" style={{ fontSize: "11px" }}>
                Profile
              </h1>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src={heart} alt="heart" className="h-4 w-4" />
              <h1 className="font-bold" style={{ fontSize: "11px" }}>
                Wishlist
              </h1>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <HiOutlineShoppingBag size="22px" />
              <h1 className="font-bold" style={{ fontSize: "11px" }}>
                Bag
              </h1>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <>
          <div className="flex gap-8">
            <h1 className="cursor-pointer">MEN</h1>
            <h1 className="cursor-pointer">WOMEN</h1>
            <h1 className="cursor-pointer">KIDS</h1>
            <h1 className="cursor-pointer">HOME & LEVING</h1>
            <h1 className="cursor-pointer">BEAUTY</h1>
            <h1
              className="cursor-pointer relative"
              style={{ display: "inline-block" }}
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
          </div>

          <div className="border border-gray-300 flex items-center rounded bg-gray-100 pl-2 ml-28 font-normal w-96 ">
            <img src={lens} alt="lens" className="h-3 w-3" />
            <input
              className="bg-gray-100 outline-none text-gray-900 text-sm block w-full p-2 pl-4"
              placeholder="Search for products, brands and more"
            />
          </div>

          <div className="flex gap-6 items-center ml-3">
            <div className="flex flex-col items-center">
              <img src={account} alt="account" className="h-5 w-5" />
              <h1 className="font-bold" style={{ fontSize: "11px" }}>
                Profile
              </h1>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <img src={heart} alt="heart" className="h-4 w-4" />
              <h1 className="font-bold" style={{ fontSize: "11px" }}>
                Wishlist
              </h1>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
              <HiOutlineShoppingBag size="22px" />
              <h1 className="font-bold" style={{ fontSize: "11px" }}>
                Bag
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
