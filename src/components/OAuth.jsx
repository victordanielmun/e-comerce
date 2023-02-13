import { FcGoogle } from "react-icons/fc";
import React from 'react'

const OAuth = () => {
    

  return (
    <div className="mt-6">
    <button className="sm:text-xs lg:text-xl md:text-md w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#db4a39] rounded-md hover:bg-[#c1121f] focus:outline-none focus:bg-[#FB8500] hover:shadow-lg">
      <FcGoogle />
      Cuenta Google
    </button>
  </div>
  )
}

export default OAuth