'use client'; 

import React from 'react'; 
import { useRouter } from 'next/navigation'; 

const Sidebar = () => {
  const router = useRouter(); 
  return (
    <div className=" my-5 basis-1/4">
        <h1 className="text-3xl font-bold text-gray-500">Drinks</h1>
        <div className="my-5">

        <span className=" text-xl font-semibold" onClick={() => router.push("/orlletto")}>Orlletto</span>
        </div>
    </div>
  )
}

export default Sidebar