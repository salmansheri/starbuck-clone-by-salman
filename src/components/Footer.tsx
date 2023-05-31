import Link from "next/link";
import React from "react";
import { ImFacebook } from 'react-icons/im'; 

const Footer = () => {
  const date = new Date(); 
   
  return (
    <footer className="h-screen border-t border-2">
      {/* TOP  */}
      <div className="hidden md:flex flex-row justify-evenly mr-32 my-8">
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
          <Link href="/">Our Company</Link>
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="text-2xl font-semibold">About Us</h1>
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
        <div className="flex flex-col md:flex-row items-start md:items-center mr-10 mt-16">
          <Link  className="px-7  py-3 md:border-r  border-black " href="/">Privicy Notice</Link>
          <Link className="px-7 py-3  md:border-r border-black " href="/">Terms of Use</Link>
          <Link className="px-7 py-3  md:border-r border-black " href="/">Do Not Personal Informations</Link>
          <Link className="px-7 py-3  md:border-r border-black " href="/">CA Supply Chain Act</Link>
          <Link className="px-7 " href="/">Privicy Notice</Link>
        </div>
        <div className="my-5 px-5">
        ©{date.getFullYear()} Starbucks Coffee Company. All rights reserved.


        </div>
    </footer>
  );
};

export default Footer;
