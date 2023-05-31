import Link from "next/link";
import React from "react";
import { ImFacebook } from 'react-icons/im'; 

const Footer = () => {
  return (
    <footer className="h-screen border-t border-2">
      {/* TOP  */}
      <div className="hidden md:flex flex-row justify-evenly">
        <div className="flex flex-col space-y-5">
          <h1>About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1>About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1>About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1>About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1>About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1>About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
      </div>
        {/* BOTTOM  */}
        <div className="my-5 px-5">
            <div className="flex space-x-3">
                <div className="text-white bg-gray-700 w-14 h-14 rounded-full inline-flex items-center justify-center">
                    <ImFacebook size={30} />
                </div>
                <div className="text-white bg-gray-700 w-14 h-14 rounded-full inline-flex items-center justify-center">
                    <ImFacebook size={30} />
                </div>
                <div className="text-white bg-gray-700 w-14 h-14 rounded-full inline-flex items-center justify-center">
                    <ImFacebook size={30} />
                </div>
                <div className="text-white bg-gray-700 w-14 h-14 rounded-full inline-flex items-center justify-center">
                    <ImFacebook size={30} />
                </div>
                <div className="text-white bg-gray-700 w-14 h-14 rounded-full inline-flex items-center justify-center">
                    <ImFacebook size={30} />
                </div>

            </div>
        </div>
    </footer>
  );
};

export default Footer;
