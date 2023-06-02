'use client'; 

import { Product } from '@prisma/client';
import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';

interface ProductProps {
    data: Product | null; 
}

const Product: React.FC<ProductProps> = ({
    data,
}) => {
    const router = useRouter(); 
  return (
    <div onClick={() => router.push(`/menu/product/${data?.id}`)}>
        <div className="border p-20 rounded-full bg-gradient-to-b from-myGreen cursor-pointer">
            <Image 
                src={data?.imageUrl as string}
                alt={data?.title as string}
                width={200}
                height={200}

            />
        </div>

    </div>
  )
}

export default Product