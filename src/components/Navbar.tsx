'use client';
import { useState } from 'react';
export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
  setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed w-screen p-2 border-b-2 border-gray-500 backdrop-blur md:h-16 md:border-b-0 md:flex md:p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" text-gray-50 text-lg sm:ml-3 sm:text-2xl md:w xl:text-4xl">
            Special <span className=" text-green-500 "> Pinoy </span> Recipe   
        </h1>

        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <button className=" focus:outline-none">
            {/* Burger Icon */}
            <div className= "text-4xl  text-gray-50 " onClick={toggleMenu} >
                &#8801;
            </div>
          </button>
        </div>
      </div>

      {/* Menu Links - Adjusted to appear below the logo and burger */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto`}>
        <ul className=" md:flex xl:space-x-1  md:mt-0 text-gray-50">
          <li>
            <a href="blog" className="block px-4 py-2 hover:bg-gray-400 md:hover:bg-transparent md:text-md xl:text-xl">
              Blog
            </a>
          </li>
          <li>
            <a href="ingredients" className="block px-4 py-2 hover:bg-gray-400 md:hover:bg-transparent md:text-md xl:text-xl">
              Ingredients
            </a>
          </li>
          <li>
            <a href="historys" className="block px-4 py-2  hover:bg-gray-400 md:hover:bg-transparent md:text-md xl:text-xl">
              History
            </a>
          </li>
          <li>
            <a href="aboutUs" className=" md:w-32 block px-4 py-2  hover:bg-gray-400 md:hover:bg-transparent md:text-md xl:text-xl">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>    
  );
}