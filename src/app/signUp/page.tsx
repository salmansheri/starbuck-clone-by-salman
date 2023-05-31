export default function sigUpPage() {
    return (
        <div className="flex flex-col items-center justify-center px-10">
            <div className="flex flex-col gap-3 items-center justify-center w-[50%]">
                <h1 className="my-16 text-3xl font-bold">Create an Account</h1>
                <h3 className="text-xl font-semibold">Starbucks Rewards</h3>
                <p className='text-lg font-medium text-center'>
                Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
                </p>
            </div>
            <div className="my-32 rounded-lg shadow-xl w-[100%]  lg:w-[50%]">
                <form className="w-full p-10">
                    <div className="my-5 flex flex-col space-y-2">
                        <label className="text-xl font-semibold">Name</label>
                        <input className="w-full p-5 border border-myGreen focus:outline-myGreen" />
                    </div>
                    <div className="my-5 flex flex-col space-y-2">
                        <label className="text-xl font-semibold">Email</label>
                        <input className="w-full p-5 border border-myGreen focus:outline-myGreen" />
                    </div>
                    <div className="my-5 flex flex-col space-y-2">
                        <label className="text-xl font-semibold">Password</label>
                        <input className="w-full p-5 border border-myGreen focus:outline-myGreen" />
                    </div>
                    <div className="my-10 flex justify-end">
                        <button className="bg-myGreen p-5 text-xl font-bold inline-flex items-center rounded-full text-white">
                            Create Account
                        </button>
                    </div>


                </form>
            </div>
        </div>
    )
}