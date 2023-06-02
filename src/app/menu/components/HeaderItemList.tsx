'use client'; 

import React from 'react'; 
import { useRouter } from 'next/navigation'; 


interface HeaderItemListProps {
    title: string; 
    active?: boolean; 
    href: string; 

}
const HeaderItemList: React.FC<HeaderItemListProps> = ({
    title,
    active,
    href

}) => {
    const router = useRouter(); 
  return (
    <div className={`${active ? "border-b-2 border-solid  border-black": "border-none"} cursor-pointer`} onClick={() => router.push(href)}>
        {title}
    </div>
  )
}

export default HeaderItemList