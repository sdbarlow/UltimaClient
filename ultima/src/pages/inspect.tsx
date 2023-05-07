import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import MercedesFront from '../../public/MercedesFront.png'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const Header = dynamic(() => import('../../components/header'), {
    ssr: false
  });
  

function inspect() {
  return (
    <>
    <Header/>
    <div className='flex w-full' style={{ height: `calc(100vh - 6rem)` }}>
      <div id='car-slides' className='flex justify-center items-center w-3/4 h-full border-2 border-red-400'>
        <div id='left-arrow' className='flex h-fit group hover:cursor-pointer'>
          <SlArrowLeft className='h-16 w-16 group-hover:h-20 group-hover:w-20'/>
        </div>
        <div id='image-container' className='flex w-3/4 h-2/3 '>
          <Image src={MercedesFront} className='object-fit' height={900} width={900} alt='mercedes'/>
        </div>
        <div id='right-arrow' className='flex h-fit group hover:cursor-pointer'>
          <SlArrowRight className='h-16 w-16 group-hover:h-20 group-hover:w-20'/>
        </div>
      </div>
      <div id='car-stats' className='flex w-1/4 h-full border-2 border-cyan-300'>
        <div id='pick-description'>
          <div id='pick-description-price'>
            <span>Rent Per Day</span>
          </div>
          <div id='pick-description-table' className='grid grid-cols-2'>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2'>Make</span></div>
            <div className="p-4 border border-black border-l-0"><span>Mercedes</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2'>Model</span></div>
            <div className="p-4 border border-black border-l-0"><span>AMG</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2'>Year</span></div>
            <div className="p-4 border border-black border-l-0"><span>2022</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2'>Color</span></div>
            <div className="p-4 border border-black border-l-0"><span>Matte Blue</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2'>Location</span></div>
            <div className="p-4 border border-black border-l-0"><span>Dallas, TX</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2'>Availability</span></div>
            <div className="p-4 border border-black border-l-0"><span>Available</span></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default inspect