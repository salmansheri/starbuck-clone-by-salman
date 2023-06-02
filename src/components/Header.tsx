"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai'; 
import Avatar from "react-avatar";
import { User } from "@prisma/client";

interface HeaderProps {
  currentUser?: User | null; 
}

const Header: React.FC<HeaderProps> = ({
  currentUser,
}) => {
  const router = useRouter(); 
    const [hasOpen, setHasOpen] = useState(false); 
  const pathname = usePathname();
  const navItems = [
    {
      id: 1,
      label: "Home",
      action: pathname === "/",
      href: "/",
    },
    {
      id: 2,
      label: "Menu",
      action: pathname.includes("/menu"),
      href: "/menu",
    },
    {
      id: 3,
      label: "Rewards",
      action: pathname.includes("/rewards"),
      href: "/rewards",
    },
    {
      id: 4,
      label: "Gift Cards",
      action: pathname.includes("/giftcards"),
      href: "/gift",
    },
  ];
  return (
    <>
      {/* desktop  */}
      <div className="flex flex-row justify-end  md:justify-between px-10 h-28 border">
      {
        pathname !== "/signIn" && pathname !== "/signUp" && (
          <>
          
        <div className="hidden md:flex flex-row space-x-10">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={` h-full flex items-center ${
                item.action && "border-b-[5px] border-b-lightGreen"
              } text-base font-bold uppercase`}
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <span> Find a store</span>
          {currentUser?.email ? (
            <Avatar
              size="80"
              className="rounded-full" 
              name={currentUser?.name}
              color="#00754a"
            />

          ): (
            <div className="flex flex-row space-x-5">
            <button className="px-5 py-1 border-2 border-coffeeBlack rounded-full inline-flex items-center bg-coffeeWhite hover:bg-black/10 transition-all ease-in" onClick={() => router.push("/signIn")}>
              Sign in
            </button>
            <button className="px-5 py-1 bg-coffeeBlack rounded-full text-white inline-flex items-center hover:bg-opacity-70" onClick={() => router.push("/signUp")}>
              Join now
            </button>
          </div>
            
          )}
         
        </div>
      
          <div className="flex justify-center items-center  md:hidden cursor-pointer relative" onClick={() => setHasOpen(hasOpen => !hasOpen)}>
            {hasOpen ? (
                <AiOutlineClose size={30} />
            ) : (

            <GiHamburgerMenu size={30} />
            )}
            {hasOpen && (
                  <div className="absolute top-24 z-50   w-[500px] h-screen py-10  px-5 transition-all duration-500 shadow-2xl bg-white ">
                  <div className="border-b border-black flex flex-col space-y-7 py-5 text-xl font-medium">
      
                  <Link href="/menu">Menu</Link>
                  <Link href="/rewards">Rewards</Link>
                  <Link href="/giftcards">Gift Cards</Link>
                  </div>
                  {currentUser?.email ? (
                     <Avatar

                     size="50"
                     className="rounded-full my-5" 
                     name={currentUser?.name}
                     color="#00754a"
                   />

                  ): (
                    
                  <div className="py-5 flex flex-row space-x-5">
                      <button className="px-5 py-1 border-2 border-coffeeBlack rounded-full inline-flex items-center bg-coffeeWhite hover:bg-black/10 transition-all ease-in">Sign in</button>
                      <button className="px-5 py-1 bg-coffeeBlack rounded-full text-white inline-flex items-center hover:bg-opacity-70">
              Join now
            </button>
                  </div>
                  )}
                </div>
            )}
        
          </div>
          </>
        )
      }
    
     
      </div>
    </>
  );
};

export default Header;
