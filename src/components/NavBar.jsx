import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to="/" className="ml-3 text-xl">Picoquio's</Link>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/category/LAPTOPS" className="mr-5 hover:text-gray-900">Laptops</Link>
            <Link to="/category/MOBILE" className="mr-5 hover:text-gray-900">Mobile</Link>
            <Link to="/category/TABLETS" className="mr-5 hover:text-gray-900">Tablets</Link>
            <Link to="/category/MONITORS" className="mr-5 hover:text-gray-900">Monitors</Link>
          </nav>
        <CartWidget/>
        </div>
      </header>


    </>
  )
}

export default NavBar