import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <section className="flex flex-col md:flex-row-reverse h-screen bg-lightGreen my-5">
      <div className="md:flex-1 w-full md:h-full h-[70%] relative">
        <Image 
          className="absolute object-cover"
          src="/images/home1.jpg"
          alt="home1"
          fill
        />
      </div>
      <div className="flex flex-col items-center md:flex-1 text-white my-10 px-5 md:justify-center">
        <h1 className="text-2xl font-bold mb-5">Find your Adventure</h1>
        <p className="text-center text-xl font-semibold">Starbucks® Summer Game is here! Play for your chance to win—more than 10 million prizes are up for grabs!*</p>
        <button className="border-2 border-white rounded-full px-4 py-1 border-solid my-3">Pay Now</button>

      </div>

    </section>
    <section className="flex flex-col md:flex-row h-screen  bg-lightGreen my-5">
      <div className="md:flex-1 w-full md:h-full h-[70%] relative">
        <Image 
          className="absolute object-cover"
          src="/images/home2.png"
          alt="home2"
          fill
        />
      </div>
      <div className="flex flex-col items-center md:flex-1 text-white my-10 px-5 md:justify-center">
        <h1 className="text-2xl font-bold mb-5">A new blend created by our baristas</h1>
        <p className="text-center text-xl font-semibold">Introducing Starbucks® Green Apron Blend™, from those who know our coffee best. Enjoy its honeybell orange and graham cracker notes hot or over ice—just like our baristas do.</p>
        <button className="border-2 border-white rounded-full px-4 py-1 border-solid my-3 inline-flex items-center">Order Now</button>

      </div>

    </section>
    <section className="flex flex-col md:flex-row-reverse h-screen  bg-coffeeBlue my-5">
      <div className="md:flex-1 w-full md:h-full h-[70%] relative">
        <Image 
          className="absolute object-cover"
          src="/images/home3.png"
          alt="home1"
          fill
        />
      </div>
      <div className="flex flex-col items-center md:flex-1 text-black my-10 px-5 md:justify-center">
        <h1 className="text-2xl font-bold mb-5">For your enjoy-mint</h1>
        <p className="text-center text-xl font-semibold">Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino® blended beverage.</p>
        <button className="border-2 border-black rounded-full px-4 py-1 border-solid my-3">Order now</button>

      </div>

    </section>
    <div className="h-44 p-10 text-center">
      <p>
      *NO PURCHASE NECESSARY. Participating stores only. Starbucks Partners (employees) are not eligible to win prizes. Ends 6/18/23. To play and for Official Rules visit starbuckssummergame.com.
Entrants can receive a maximum of 2 plays per day, plus, bonus opportunities to earn additional plays.
      </p>
    </div>
   </main>
  )
}
