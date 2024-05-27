import Link from "next/link"

const Footer = () =>{
    return(
        <div className="flex flex-row justify-between items-center max-w-[1200px] mx-auto bg-[#1E1E1E] h-20 px-8">
        <div className="text-[#f5f5f5] text-[13px]">Copyright 2024 Scout. All rights reserved.</div>
        <div>
            <Link href="#" className="">*</Link>
            <Link href="#" className=""> *</Link>
            <Link href="#" className="">*</Link>
        </div>
        </div>
    )
}

export default Footer