import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  const [phone, setPhone] = useState<any>();
  return (
    <div className="flex  items-center flex-col h-screen bg-rose-50 pt-6">
      <div className="h-full bg-white " style={{ width: "30%" }}>
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
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Mobile Number"
              buttonClass=" bg-white "
              inputStyle={{ width: "320px" }}
            />
          </div>
          <h1 className="text-xs mt-6 text-gray-700">
            By continue,I agree to the{" "}
            <span className=" text-red-500 font-bold">Terms of use </span> &{" "}
            <span className="text-red-500 font-bold">Privacy Policy</span>
          </h1>

          <button className="w-full bg-rose-500 h-10 mt-4">Continue</button>

          <h1 className="text-xs mt-5 text-gray-700">
            Have to trouble loggin in?{" "}
            <span className="text-red-500 font-bold">Get help</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
