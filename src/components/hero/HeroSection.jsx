import React from 'react'
import Link from 'next/link'


const HeroSection = () => {
  return (
    <div >
    <div className='mx-auto max-w-[500px] pt-14'>
        <p className='p-2 bg-slate-300 rounded-full mx-auto text-center max-w-[300px]'>*Scout is currently in beta</p>
        <h2 className='text-white text-[50px] text-center mt-8'>AI for teams building whats Next</h2>
        <p className='text-white text-[15px] text-center mt-5 opacity-70 max-w-[350px] mx-auto leading-7'>Scout gives you the tools to build custom agents and workflows in record time.</p>
        <p className='bg-slate-400 px-3 py-2 border border-1 rounded-full mt-[30px] text-center max-w-[120px] mx-auto'> Get Started   </p>
        </div>
    </div>
  )
}

export default HeroSection