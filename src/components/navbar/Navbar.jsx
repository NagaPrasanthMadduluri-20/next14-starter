import Links from "./links/Links"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center max-w-[1200px] mx-auto bg-[#1E1E1E] h-20 px-8">
            <Link className="text-white mr-10 text-2xl" href="/">* Scout</Link>
            <div className="mr-auto ">
               <Links/>
            </div>
            <div className="marg">
              <Link href="/login" className="text-[#CBD5E1] text-[18px] mr-7  border-1 border-solid border-white">Login</Link>
              <Link href="/register" className="text-[#CBD5E1] text-[18px]">SignUp </Link>
            </div>
        </div>
    )
}

export default Navbar