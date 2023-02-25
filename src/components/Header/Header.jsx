import React from 'react'
import {FaCartArrowDown} from 'react-icons/fa'
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"   className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-white hover:text-orange-400 cursor-pointer">First Link</a>
      <a className="mr-5 text-white  hover:text-orange-400 cursor-pointer">Second Link</a>
      <a className="mr-5 text-white  hover:text-orange-400 cursor-pointer">Third Link</a>
      <a className="mr-5 text-white  hover:text-orange-400 cursor-pointer">Fourth Link</a>
    </nav>
    <button className="flex items-center justify-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <FaCartArrowDown size={23} />
    </button>
  </div>
</header>
  )
}

export default Header