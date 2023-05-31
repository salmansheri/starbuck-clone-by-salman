'use client'; 

import React, { FormEvent, useCallback } from 'react'

const Form = () => {
    const handleSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        

    }, [])
  return (
    <div className="bg-white shadow-xl w-[70%] md:w-[40%]">
        <form className="p-10" onSubmit={(event) => handleSubmit(event)}>
            <div className="flex flex-col space-y-3 my-5">
                <label className="text-xl font-medium">Email: </label>
                <input className="border border-darkGreen w-full p-5 focus:outline-darkGreen" />
            </div>
            <div className="flex flex-col space-y-3 my-5">
                <label className="text-xl font-medium">Password </label>
                <input className="border border-darkGreen w-full p-5 focus:outline-darkGreen" />
            </div>
            <div className='flex justify-end'>
                <button className="bg-myGreen px-10 py-5  rounded-full inline-flex items-center text-white text-xl font-bold justify-end">Sign in</button>
            </div>
        </form>
    </div>
  )
}

export default Form