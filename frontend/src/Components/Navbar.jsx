import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";


const Navbar = () => {
  return (
    <header className="max-w-screen-2xl container mx-auto">
      <div className="navbar xl:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-green">Home</a>
              </li>
              <li>
                <a>Menu</a>
                <ul className="p-2">
                  <li>
                    <a>All</a>
                  </li>
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Service</a>
                <ul className="p-2">
                  <li>
                    <a>Online Order</a>
                  </li>
                  <li>
                    <a>Table Booking</a>
                  </li>
                  <li>
                    <a>Order Tracking</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="text-green">Offers</a>
              </li>
            </ul>
          </div>
          <Link>
            <img src="logo.png" className="cursor-pointer" />

          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-green"><Link to='/'>Home</Link></a>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2">
                  <li>
                    <a>All</a>
                  </li>
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details >
                <summary>Services</summary>
                <ul className="p-2">
                  <li>
                    <a>Online Order</a>
                  </li>
                  <li>
                    <a>Table Booking</a>
                  </li>
                  <li>
                    <a>Order Tracking</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-green">Offers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex space-around gap-4  ">
          <IoSearchOutline size={22}  className="hidden lg:flex"/>
          <LuShoppingCart size={25} className="hidden lg:flex" />
          <a className="btn bg-green rounded-full px-6 text-white flex"><FiPhoneCall />
            Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
