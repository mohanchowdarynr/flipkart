import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
          <nav className="flex justify-between items-center w-full py-3 text-white bg-blue-500 font-serif">
              <h1 className="px-4 font-black text-right"><Link to="/">flipkart</Link></h1>
              <input classname="flex-1 w-4/5  p-4" type="search" placeholder="search any item" />
              <ul className="flex items-center text-base">
                 <li className="mr-6 text-lg  bg-white text-gray-900 px-6 py-1"><Link to="/">Login</Link></li> 
                 {/* <li className="mr-6 "><Link to="/ProductsPage">More</Link></li>  */}
                 <li className="mr-6  "><Link to="/Cart">Cart</Link></li> 
              </ul>
          </nav>  
        </>
    )
}

export default Navbar