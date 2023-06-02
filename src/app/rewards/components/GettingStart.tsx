import React from 'react'

const GettingStart = () => {
  return (
    <div className="h-screen bg-coffeeWhite px-10 lg:px-40 flex flex-col justify-center">
        <div>
            <h1 className="text-center text-3xl font-bold py-5">Getting Started</h1>
            <p className="text-center text-2xl font-semibold">Earn Stars and Get Reward</p>


        </div>
        <div className="flex flex-col md:flex-row gap-5 py-10 items-center">
            <div className="flex flex-row md:flex-col w-full  gap-5 items-center">
                <div className="border-2 border-myGreen h-12 w-12 rounded-full text-2xl font-medium flex items-center justify-center text-lightGreen">1</div>
                <div>
                    <h2>Create An Account</h2>

                </div>

            </div>
            <div className="flex flex-row md:flex-col w-full  gap-5 items-center">
                <div className="border-2 border-myGreen h-12 w-12 rounded-full text-2xl font-medium flex items-center justify-center text-lightGreen">2</div>
                <div>
                    <h2>Create An Account</h2>

                </div>

            </div>
            <div className="flex flex-row md:flex-col w-full  gap-5 items-center">
                <div className="border-2 border-myGreen h-12 w-12 rounded-full text-2xl font-medium flex items-center justify-center text-lightGreen">3</div>
                <div>
                    <h2>Create An Account</h2>

                </div>

            </div>
           
           
            

        </div>
    </div>
  )
}

export default GettingStart