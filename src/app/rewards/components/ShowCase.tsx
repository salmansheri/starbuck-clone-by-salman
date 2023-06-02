'use client'; 

import Image from 'next/image';
import React from 'react'


interface ShowCaseProps {
    price: number; 
    images: Record<string, any>; 
}

const ShowCase:React.FC<ShowCaseProps> = ({
    price,
    images
}) => {
  return (
    <div className="h-96 bg-coffeeBlue w-full flex justify-center items-center">
            <div>
                <Image
                    src={images[price]}
                    alt={images[price]}
                    width={500}
                    height={500}
                
                

                />
            </div>

        </div>
  )
}

export default ShowCase