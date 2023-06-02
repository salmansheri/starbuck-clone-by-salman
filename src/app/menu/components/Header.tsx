'use client'; 

import React from 'react'
import HeaderItemList from './HeaderItemList'
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname  = usePathname(); 
  const HeaderItems = [
    {
      id: 1,
      title: "All Products",
      active: pathname === "/menu",
      href:"/menu"
    },
    {
      id: 2,
      title: "Orders",
      active: pathname.includes("/order"),
      href:"/menu/orders"
    },
    {
      id: 3,
      title: "Favorites",
      active: pathname.includes("/favorites"),
      href:"/menu/favorites"
    },
  ]
  return (
    <div className="h-14 flex flex-row space-x-10 items-center px-40 lg:px-52 border-b-2">
      {HeaderItems.map((item) => (
        <HeaderItemList 
          key={item.id}
          title={item.title}
          active={item.active}
          href={item.href}

        />
      ))}
    </div>
  )
}

export default Header