'use client'; 

import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'; 
import ShowCase from './ShowCase';

interface PriceListProps {
    label: number; 
    active?:boolean;
    image?: string; 
    onClick?: () => void; 
}



const PricesList: React.FC<PriceListProps> = ({
    label,
    active,
   
    onClick,
}) => {
    return(
        <>
        <div className={`flex  w-full items-center ${active ? "border-b-4 border-myGreen border-solid" : "border-none"} justify-center h-24 cursor-pointer transition-all duration-100`} onClick={onClick}>
            <h1 className="text-3xl font-medium">{label}</h1>
            <div className="flex flex-col justify-end">

            <AiFillStar size={10} className="text-yellow-600" />

            </div>
        </div>
        
            
      
        </>
    )
}

const Favorite = () => {
    const [price, setPrice] = useState(25)
    const stars = [
        {
            id: 1, 
            label: 25,
            active: price === 25, 
            

        },
        {
            id: 2, 
            label: 100,
            active: price === 100,
             
        },
        {
            id: 3, 
            label: 200,
            active: price === 200,
           

        },
        {
            id: 4, 
            label: 300,
            active: price === 300,
            

        },
        {
            id: 5, 
            label: 400,
            active: price === 400,
             

        },

    ]

   

    const images = {
        25: "/images/025.png",
        100:"/images/100.png",
        200:"/images/200.png",
        300:"/images/300.png",
        400: "/images/400.png",
    }

 
    
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Get Your Favorites for Free</h1>

        <div className="flex justify-between w-[70%]">
            {stars.map((star) => (
                <PricesList 
                    key={star.id}
                    label={star.label}
                    active={star.active}
                    onClick={() => setPrice(star.label)}
                />
            ))}
        </div>
       <ShowCase 
        price={price}
        images={images}
       />

    </div>
  )
}

export default Favorite