import Form from "@/components/Form";
import Link from "next/link";

export default function SignInPage() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="my-10">
                <h1 className="text-3xl font-bold">

                Sign in or create an account
                </h1>
            </div>
           
                
            <Form />
            <div className='my-20 px-5 flex flex-col space-y-5'>
                <h4 className="text-center text-xl font-bold uppercase leading-3 tracking-widest text-myGreen">

                    join starbucks Rewards
                    
                </h4>
                <p className="text-center text-xl font-medium">
                Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.
                </p>
                <div className="flex items-center justify-center">
                    <Link href="/signUp">

                    <button className="border-4 border-solid border-myGreen rounded-full text-myGreen  px-5 py-2 font-bold text-lg hover:bg-myGreen/5 active:px-4 active:py-1.5">Join Now</button>
                    </Link>
                </div>
            </div>

           
        </div>
    )
}