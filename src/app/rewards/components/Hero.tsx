import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen  bg-coffeeBlue px-10 pt-10 lg:mt-0">
        <div className="w-full h-full flex flex-col lg:items-start items-center lg:justify-center">
            <h1 className="text-5xl font-bold text-darkGreen  leading-snug text-center lg:text-start">Free Cofee
                <br />
                is Tap Away
            </h1>
            <p className="text-2xl font-medium tracking-wider my-5 text-center lg:text-start">Join Now Enjoy the Rewards</p>
            <div className="py-10">
                <Link href="/signUp">
                <button className="p-5 rounded-full bg-myGreen text-white font-bold text-xl">
                    Join Now
                </button>
                </Link>
            </div>
            
        </div>
       
    </div>
  )
}

export default Hero