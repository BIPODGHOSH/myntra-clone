import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase";
import Navbar from "./Navbar";
import { redirect } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>();
  const recaptchaRef = useRef<any>(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setPhone("");
      console.log(confirmation);
      setUser(confirmation);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    console.log(otp);
    try {
      await user.confirm(otp);
      setOtp("");
      return redirect("/");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(auth);

  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col h-screen w-screen bg-rose-50 pt-28">
        <div
          className=" h-full bg-white"
          style={{ width: "70%", maxWidth: "384px", minWidth: "340px" }}
        >
          <div className="">
            <img
              src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg"
              alt=""
            />
          </div>
          <div className="p-8">
            <h1 className="font-bold text-lg text-gray-700">
              Login <span className="font-normal text-sm">or </span>Signup
            </h1>
            <div className="mt-5">
              {!user && (
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone("+" + phone)}
                  placeholder="Mobile Number"
                  buttonClass=" bg-white "
                  //  inputStyle={{ width: "320px" }}
                  inputClass=" w-3/4 "
                  inputProps={{
                    ref: (el: any) =>
                      recaptchaRef.current &&
                      (recaptchaRef.current.phoneNumberInput = el),
                  }}
                />
              )}
            </div>
            <div id="recaptcha" className="mt-5 ml-2"></div>
            <h1 className="text-xs mt-6 text-gray-700">
              By continue, I agree to the{" "}
              <span className=" text-red-500 font-bold">Terms of use </span> &{" "}
              <span className="text-red-500 font-bold">Privacy Policy</span>
            </h1>

            {!user && (
              <button
                className="w-full bg-rose-500 h-10 mt-4"
                onClick={sendOtp}
              >
                Continue
              </button>
            )}
            {/* <div id="recaptcha"></div> */}
            {user && (
              <input
                className="border border-spacing-1 outline-none text-gray-900 text-sm block w-full mt-2 p-2 pl-4"
                placeholder="Enter otp"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            )}

            {otp && (
              <button
                className="w-full bg-rose-500 h-10 mt-4"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            )}

            <h1 className="text-xs mt-5 text-gray-700">
              Have trouble logging in?{" "}
              <span className="text-red-500 font-bold">Get help</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
