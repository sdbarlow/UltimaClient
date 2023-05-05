import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Ferrari from '../../public/FerrariDiag.png'
import Mercedes from '../../public/MercedesDiag.png'
import Koenigsegg from '../../public/KoenigseggDiag2.png'
import Lamborghini from '../../public/LamborghiniMerciDiag.png'
import Porsche from '../../public/PorscheDiag.png'
import Ferarribg1 from '../../public/FerrariBG1.jpg'
import Ferarribg2 from '../../public/FerrariBG2.jpg'
import Ferarribg3 from '../../public/FerrariBG3.jpg'
import Mercedesbg1 from '../../public/MercedesBG1.jpg'
import Mercedesbg2 from '../../public/MercedesBG2.jpg'
import Mercedesbg3 from '../../public/MercedesBG3.jpg'
import Koenigseggbg1 from '../../public/KoenigseggBG1.jpg'
import Koenigseggbg2 from '../../public/KoenigseggBG2.jpg'
import Koenigseggbg3 from '../../public/KoenigseggBG3.jpg'
import Porschebg1 from '../../public/PorscheBG1.jpg'
import Porschebg2 from '../../public/PorscheBG2.jpg'
import Porschebg3 from '../../public/PorscheBG3.jpg'
import Lamborghinibg1 from '../../public/LamborghiniBG1.jpg'
import Lamborghinibg2 from '../../public/LamborghiniBG2.jpg'
import Lamborghinibg3 from '../../public/LamborghiniBG3.jpg'
 
const Header = dynamic(() => import('../../components/header'), {
  ssr: false
});


function browse() {
  return (
  <>
    <Header/>
    <div className='flex flex-col justify-center w-full bg-black overflow-hidden overflow-y-hidden' style={{ height: `calc(100vh - 6rem)` }}>
      <div id='display' className='flex flex-col h-5/6 w-screen bg-gradient-to-t from-black to-white'>
        <div id='pic-showcase' className='flex h-1/2 w-full justify-center'>
        <div className='slant-container h-full w-1/6 mr-8 mt-24 -skew-x-12'>
              <Image src={Lamborghinibg1} className='object-fill' alt='ferrari' width={900} height={300}/>
            </div>
          <div className='slant-container h-full w-1/6 pt-12 mr-6 mt-12 -skew-x-12'>
            <Image src={Lamborghinibg2} className='object-fill'  alt='ferrari' width={900} height={300}/>
          </div>
          <div className='slant-container h-full w-1/6 pt-12 mt-12 -skew-x-12'>
            <Image src={Lamborghinibg3} className='object-fill' alt='ferrari' width={900} height={300}/>
          </div>

        </div>
        <div id='pic-platform' className='h-1/2 z-10 w-full'>
              <input type="radio" name="slider" id="car-1" defaultChecked/>
              <input type="radio" name="slider" id="car-2"/>
              <input type="radio" name="slider" id="car-3"/>
              <input type="radio" name="slider" id="car-4"/>
              <input type="radio" name="slider" id="car-5"/>
          <div id='platform' className='flex justify-center items-start overflow-hidden'>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-1" id="car-1-photo">
            <Image src={Ferrari} className='object-cover' alt='ferrari' quality="100" width={800} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-2" id="car-2-photo">
            <Image className="object-cover" src={Mercedes} alt='mercedes' quality='100' width={700} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-3" id="car-3-photo">
            <Image className='object-cover' src={Koenigsegg} alt='koenigsegg' quality='100' width={800} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-4" id="car-4-photo">
            <Image src={Lamborghini} className='object-cover' alt='lamb' width={800} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-5" id="car-5-photo">
            <Image src={Porsche} className='object-cover' alt='porsche' width={800} height ={300} />
            </label>
          </div>
        </div>
      </div>
      <div id='footer' className='h-1/6 w-screen bg-white overflow-hidden'>

      </div>
    </div>
  </>
  )
}

export default browse