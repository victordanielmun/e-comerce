import { FcGoogle } from "react-icons/fc";
import React from 'react'

const OAuth = () => {
    

  return (
    <div className="mt-6">
    <button className=" flex item-center justify-center sm:text-xs lg:text-xl md:text-md w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-800 focus:outline-none focus:bg-[#FB8500] hover:shadow-lg">
      
      <FcGoogle className="text-2xl bg-white rounded-full mr-2 align-middle "/>
      
      
      Cuenta Google
      
    </button>
  </div>
  )
}

export default OAuth