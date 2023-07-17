import React from 'react'
import { BiUser, BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { NavLink } from 'react-router-dom';




const Navbar = () => {
    function showMobileMenu(){
        const MobileMenu = document.querySelector(".mobileNavLinks")

        MobileMenu.classList.add("top-0")
        MobileMenu.classList.remove("-top-full")
    }

    function hideMobileMenu(){
        const MobileMenu = document.querySelector(".mobileNavLinks")
        MobileMenu.classList.remove("top-0")
        MobileMenu.classList.add("-top-full")
    }

  return (
    <div className=' bg-initialColor py-4 px-6 md:px-0'>
        <div className="container mx-auto flex justify-between items-center">
            <NavLink to="/" className="navbar">
                <h2 className='text-gray-50 font-semibold text-2xl'>E-commerce</h2>
            </NavLink> 
           
        {/*================== Dextop Navbar Design ======================*/}  
            <div className="navlinks md:flex space-x-6 items-center text-white text-lg hidden">

                <NavLink to={"/"}>
                    Home
                </NavLink>                
                <NavLink to={"/about"}>
                    About
                </NavLink>                
                <NavLink to={"/products"}>
                    Products
                </NavLink>
                <NavLink to={"/contact"}>
                    Contact
                </NavLink>
                <NavLink to={"/login"}>
                    Login
                </NavLink>
                <NavLink className={"text-4xl relative"} to={"/cart"}>
                     <AiOutlineShoppingCart /> 
                     <div className=' text-xs absolute top-[-10px] right-[-15px] bg-blue-500 p-[5px] rounded-3xl'> <span className=''> 10</span> </div>
                </NavLink>
               
            </div>

        {/* =======================Mobile Menu Bar Design ==================================*/}
                <div className="menuBar text-xxl text-white md:hidden">
                    <button onClick={showMobileMenu}>   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </button>

                </div>

        {/* =======================Mobile Menu Design ==================================*/}

            <div className="mobileNavLinks absolute -top-full duration-500 left-0 h-screen w-full bg-[#ff5833f1] z-10 flex flex-col items-center text-xl text-white space-y-5">

                <div className="closeMenuBtn w-full text-right p-6">
                    <button onClick={hideMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    </button>
                </div>


            <NavLink to={"/"} onClick={hideMobileMenu}>
                    Home
                </NavLink>                
                <NavLink to={"/about"} onClick={hideMobileMenu}>
                    About
                </NavLink>                
                <NavLink to={"/Products"} onClick={hideMobileMenu}>
                    Products
                </NavLink>
                <NavLink to={"/contact"} onClick={hideMobileMenu}>
                    Contact
                </NavLink>
                <NavLink to={"/contact"} onClick={hideMobileMenu}>
                    Login
                </NavLink>
                <NavLink className={"text-4xl relative"} to={"/cart"} onClick={hideMobileMenu}>
                     <AiOutlineShoppingCart /> 
                     <div className=' text-xs absolute top-[-10px] right-[-15px] bg-blue-500 p-[5px] rounded-3xl'> <span className=''> 10</span> </div>
                </NavLink>
            </div>
        </div>


    </div>
  )
}

export default Navbar