import { NavLink } from "react-router"

export function Landing() {
return (
    <>
   <main className="min-h screen flex justify-center align-center">
    <header className=" flex flex-col items center  justify-center gap-6  p-3">
      {/* <nav className="flex gap-6 ">
    </nav> */}
    </header>
</main>
   <div className="flex flex-col justify-center align-center items-center">
    <div>
      <h1 className="  flex justify-center align-center items-center mt-35 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-500 text-shadow-3d transform perspective-1000 rotate-x-15 hover:rotate-x-0 transition-transform duration-300 animate-pulse">You Just Need the Second Algorithym </h1> 
         </div>
        <button className="mt-9 w-40 h-15 cursor-pointer text-2xl bg-amber-100  text-black backdrop-blur-2xl p-4">
          <NavLink to="https://paystack.com/buy/secondalgotiktok">Get it</NavLink>
        </button>
   </div>
  </>
)
}
