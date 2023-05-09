import React, { use } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import MercedesFront from '../../public/MercedesFront.png'
import MercedesDiag from '../../public/MercedesDiag.png'
import MercedesSide from '../../public/MercedesSide.png'
import MercedesBack from '../../public/MercedesBack.png'
import KoenigseggFront from '../../public/KoenigseggFront.png'
import KoenigseggDiag from '../../public/KoenigseggDiag.png'
import KoenigseggSide from '../../public/KoenigseggSide.png'
import KoenigseggBack from '../../public/KoenigseggBack.png'
import PorscheFront from '../../public/PorscheFront.png'
import PorscheDiag from '../../public/PorscheDiag.png'
import PorscheSide from '../../public/PorscheSide.png'
import PorscheBack from '../../public/PorscheBack.png'
import LamborghiniFront from '../../public/LamborghiniFront.png'
import LamborghiniDiag from '../../public/LamborghiniMerciDiag.png'
import LamborghiniSide from '../../public/LamborghiniSide.png'
import LamborghiniBack from '../../public/LamborghiniBack.png'
import FerarriFront from '../../public/FerrariFront.png'
import FerarriDiag from '../../public/FerrariDiag.png'
import FerarriSide from '../../public/FerrariSide.png'
import FerarriBack from '../../public/FerrariBack.png'
import useUltimaStore from '../../store/store'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useEffect, useState } from 'react';

const Header = dynamic(() => import('../../components/header'), {
  ssr: false
});

function inspect() {
  const cartoshow = useUltimaStore((state) => state.cartoshow)
  const car = useUltimaStore((state) => state.car)
    
      const [carImages, setCarImages] = useState({
        mercedes: {
          front: MercedesFront,
          diag: MercedesDiag,
          side: MercedesSide,
          back: MercedesBack,
        },
        koenigsegg: {
          front: KoenigseggFront,
          diag: KoenigseggDiag,
          side: KoenigseggSide,
          back: KoenigseggBack,
        },
        porsche: {
          front: PorscheFront,
          diag: PorscheDiag,
          side: PorscheSide,
          back: PorscheBack,
        },
        lamborghini: {
          front: LamborghiniFront,
          diag: LamborghiniDiag,
          side: LamborghiniSide,
          back: LamborghiniBack,
        },
        ferarri: {
          front: FerarriFront,
          diag: FerarriDiag,
          side: FerarriSide,
          back: FerarriBack
        }
      });

      useEffect(() => {
        const images = document.querySelectorAll('#image-container img');
      
        let currentIndex = 0;
      
        const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
      
        if (leftArrow && rightArrow) {
          leftArrow.addEventListener('click', () => {
            images[currentIndex].classList.add('hidden');
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.remove('hidden');
          });
      
          rightArrow.addEventListener('click', () => {
            images[currentIndex].classList.add('hidden');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.remove('hidden');
          });
        }
}, [])

console.log(car)
    
  return (
    <>
    <Header/>
    <div className='flex w-full shadow-inner bg-slate-50 shadow-black' style={{ height: `calc(100vh - 6rem)` }}>
      <div id='car-slides' className='flex justify-center items-center w-3/4 h-full shadow-inner shadow-black'>
        <div id='left-arrow' className='flex h-fit group hover:cursor-pointer mr-4'>
          <SlArrowLeft className='h-16 w-16 group-hover:h-20 group-hover:w-20'/>
        </div>
        <div id='image-container' className='flex flex-col w-3/4 h-full'>
          <div className='w-full flex justify-center items-center mb-10 mt-2 tracking-widest text-2xl'>
            <h1>Porsche 918 Spyder</h1>
          </div>
        {typeof window !== 'undefined' && cartoshow ? 
        <>
          <Image src={carImages[cartoshow].front} className='object-fit brightness-125 select-none' height={900} width={900} alt='mercedes' key="front"/>
          <Image src={carImages[cartoshow].diag} className='object-fit brightness-125 select-none hidden' height={900} width={900} alt='mercedes' key="diag"/>
          <Image src={carImages[cartoshow].side} className='object-fit brightness-125 select-none hidden' height={900} width={900} alt='mercedes' key="side"/>
          <Image src={carImages[cartoshow].back} className='object-fit brightness-125 select-none hidden' height={900} width={900} alt='mercedes' key="back"/>
        </>
        : <p>Loading...</p>
      }
        </div>
        <div id='right-arrow' className='flex h-fit group hover:cursor-pointer ml-4'>
          <SlArrowRight className='h-16 w-16 group-hover:h-20 group-hover:w-20'/>
        </div>
      </div>
      <div id='car-stats' className='flex w-1/4 h-full items-center justify-center shadow-inner shadow-black'>
        <div id='pick-description'>
          <div id='pick-description-price' className='text-center p-4 bg-gradient-to-l from-slate-200 to-slate-400 text-2xl outline outline-black'>
            <span id='table-price'>${car.data.price_per_day} / Rent Per Day</span>
          </div>
          <div id='pick-description-table' className='grid grid-cols-2'>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2 border-black'>Make</span></div>
            <div className="p-4 border border-black border-l-0"><span>{car.data.make}</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2 border-slate-300'>Model</span></div>
            <div className="p-4 border border-black border-l-0"><span>{car.data.model}</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2 border-black'>Year</span></div>
            <div className="p-4 border border-black border-l-0"><span>{car.data.year}</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2 border-slate-300'>Color</span></div>
            <div className="p-4 border border-black border-l-0"><span>{car.data.color}</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2 border-black'>Location</span></div>
            <div className="p-4 border border-black border-l-0"><span>{car.data.location}</span></div>
            <div className="p-4 border border-black border-r-0"><span className='block border-r-2 border-slate-300'>Availability</span></div>
            {car.data.availability ? <div className="p-4 border border-black border-l-0"><span>Available</span></div> : <div className="p-4 border border-black border-l-0"><span>Not Available</span></div>}
          </div>
          <button id='table-reserve' className="bg-black text-slate-300 text-center w-full mt-4 p-4 text-2xl hover:text-3xl border-2 border-slate-300">Reserve Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default dynamic (() => Promise.resolve(inspect), {ssr: false})