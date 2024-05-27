import React from 'react'
import Image from 'next/image'
import Deno from "../../../public/Deno.png"
import dagster from "../../../public/dagster.png"
import dgsouth from "../../../public/dgsouth.png"
import hyper from "../../../public/hyper.png"
import modal from "../../../public/modal.png"
import statsig from "../../../public/statsig.svg"

const Teams = () => {
  return (
    <div >
        <div className='flex flex-row flex-wrap divide-x-2 divide-gray-800 max-w-600 justify-center pt-10'>
        <div className='mr-8 p-10'><Image src={statsig} alt='deno'  /></div>
        <div className='mr-8 p-10'><Image src={Deno} alt='deno'/></div>
        <div className='mr-8 p-10'><Image src={modal} alt='deno' /></div>
        <div className='mr-8 p-10'><Image src={hyper} alt='deno' /></div>
        
        <div className='mr-8 p-10 mt-24'><Image src={dagster} alt='deno' /></div>
        <div className='mr-8 p-10 mt-24'><Image src={dgsouth} alt='deno' /></div>


        </div>
        <p className='max-w-[400px] divide-0 text-center text-white mx-auto mt-24 text-2xl'>Used by teams at Statsig, Deno, Dagster, Evidence and more.</p>
    </div>
  )
}

export default Teams