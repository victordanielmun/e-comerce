import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //funcion cambiar clase de elementos lista ul navbar
  function pathMathRouter(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="sticky top-0 z-40 md:bg-[#03045E] lg:bg-transparent max-sm:bg-[#03045E]" id="Header">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://fakestoreapi.com/icons/logo.png"
            alt="icon"
            className="h-5 cursor-pointer "
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMathRouter("/") ? "text-white border-b-[#FB8500]" : "text-gray-400  border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMathRouter("/Offer") ? "text-white border-b-[#FB8500]" : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/Offer")}
            >
              Offer
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMathRouter("/SignIn") ? "text-white border-b-[#FB8500]" : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/SignIn")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
