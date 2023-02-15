import { useState }from 'react'
import React from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignIn = () => {
  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState(
    {email:"",
    password:"",}
  );

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.id]: e.target.value,
    }
    ))
  }

  return (
    <section>
      <div
        className="rounded-2xl flex 
      justify-center 
      flex-wrap 
      items-center 
      px-6 py-12 
      max-w-6xl 
      mx-auto 
      w-full 
      p-6 
      m-auto 
      bg-white  
      shadow-md "
      >
        <div className="md:w-[40%] lg:w-[50%] mb-0 md:mb-3 sm:mb-0 sm:w-[30%]">
          <img
            src="https://img.freepik.com/vector-gratis/ilustracion-concepto-acceder-al-perfil-movil_114360-83.jpg?w=826&t=st=1676245114~exp=1676245714~hmac=de969bb845bc2cbf77a76ed30fc0704dc93d15f44af9c1fa4f587f203604a8e2"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 relative flex flex-col justify-center min-h-fit overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-black ">
              Iniciar sesion
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block sm:text-xs lg:text-lg md:text-md font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-[#023047] bg-white border rounded-md focus:border-[#00B4D8] focus:ring-[#90E0EF] focus:outline-none focus:ring focus:ring-opacity-40" 
                  id="email" 
                  value={email} 
                  onChange={onChange} 
                />
              </div>
              <div className="mb-2 relative">
                <label
                  htmlFor="password"
                  className="sm:text-xs lg:text-lg md:text-md block font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="block w-full px-4 py-2 mt-2 text-[#023047] bg-white border rounded-md focus:border-[#00B4D8] focus:ring-[#90E0EF] focus:outline-none focus:ring focus:ring-opacity-40"  
                  id="password" 
                  value={password} 
                  onChange={onChange}
                />
                {showPassword ? (
                  <AiFillEyeInvisible className='absolute right-3 lg:top-12 md:top-9 sm:top-9 max-sm:top-11  text-xl cursor-pointer' 
                  onClick={()=>setShowPassWord
                    ((prevState)=> !prevState)} 
                    />
                ) : (
                  <AiFillEye className='absolute right-3 lg:top-12 md:top-9 sm:top-9 max-sm:top-11  text-xl cursor-pointer' 
                  onClick={()=>setShowPassWord
                    ((prevState)=> !prevState)} 
                  />
                )}

              </div>
              <p href="#" className="sm:text-xs lg:text-lg md:text-md text-[#FB8500] hover:underline">
                
                <Link to="/ForgotPassword" > Olvidaste tu constraseña? </Link>
              </p>
              <div className="mt-6">
                <button className="sm:text-xs lg:text-xl md:text-md w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#03045E] rounded-md hover:bg-[#90E0EF] focus:outline-none focus:bg-[#FB8500] hover:shadow-lg">
                  Login
                </button>
              </div>
            </form>
            <p className="sm:text-xs lg:text-lg md:text-md mt-4 font-light text-center text-[#03045E]">
              {" "}
              No tienes una cuenta?{" "}
              </p>
              <p
                href="#"
                className="sm:text-xs lg:text-lg md:text-md text-center text-[#FB8500] hover:underline"
              >
                
                <Link to="/SignUp" > Registrate </Link>
              </p>
            <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className="sm:text-s lg:text-xl md:text-lg font-semibold text-black ">
               o inicia sesion
            </p>
            </div>
            <OAuth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
