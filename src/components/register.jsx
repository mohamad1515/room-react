import React from "react";
import registerImg from "../img/register.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section>
      <div className="h-screen w-full flex justify-center items-center bgBlueGradient ">
        <div className="m-3 md:m-0 flex flex-col p-4 bg-white justify-start items-center w-[400px] rounded-md shadow-md overflow-hidden">
          <p className="text-center text-3xl pt-3 font-black text-cyan-300">
            ثــبـــت نــــام
          </p>
          <div className="flex items-center justify-center">
            <div className="w-52 h-52 inline-block">
              <img src={registerImg} alt="" />
            </div>
          </div>

          <form className="flex flex-col space-y-6 justify-center items-center w-full p-4 my-3">
            <p className="mt-4 bg-red-200 p-2 text-center w-full rounded-md text-red-700">
              خطای سرور
            </p>
            <div className="w-full">
              <input
                className="textInput"
                placeholder="نام کاربری "
                type="text"
              />
            </div>
            <div className="w-full">
              <input
                className="textInput"
                placeholder="پسورد"
                type="password"
              />
            </div>
            <div className="w-full">
              <input
                className="textInput"
                placeholder="تکرار پسورد"
                type="password"
              />
              <p className="errMsg">متن خطا</p>
            </div>
            <button className="cyanBtn disabled:bg-cyan-200">
              ثــبـــت نــــام
            </button>
          </form>
          <div className="flex justify-center items-center">
            <span className="text-gray-500">قبلا ثبت نام کردید؟</span>
            <Link
              className="mr-2 text-cyan-400 font-semibold hover:text-cyan-500"
              to="/login"
            >
              ورود
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
