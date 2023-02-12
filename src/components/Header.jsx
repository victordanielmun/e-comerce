import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    //funcion cambiar clase de elementos lista ul navbar
    function pathMathRouter(route) {
        if (route == location.pathname) {
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50' >
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://fakestoreapi.com/icons/logo.png" 
                className='h-5 cursor-pointer ' 
                onClick={()=>navigate('/')}/>
            </div>
            <div>
                <ul className='flex space-x-10 '>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRouter("/") && "text-black border-b-red-500"}`} 
                    onClick={()=>navigate('/')} 
                    >Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRouter("/Offer") && "text-black border-b-red-500"}`} 
                    onClick={()=>navigate('/Offer')}
                    >Offer</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRouter("/SignIn") && "text-black border-b-red-500"}`} 
                    onClick={()=>navigate('/SignIn')}
                    >Sign In</li>
                </ul>
            </div>

        </header>

    </div>
  )
}

export default Header