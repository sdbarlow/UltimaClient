import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
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
  const router = useRouter()

  useEffect(() => {

    const carInputs = [
      document.querySelector('#car-1'),
      document.querySelector('#car-2'),
      document.querySelector('#car-3'),
      document.querySelector('#car-4'),
      document.querySelector('#car-5')
    ];

    const carImages = [
      document.querySelector('#ferarri-img'),
      document.querySelector('#mercedes-img'),
      document.querySelector('#koenigsegg-img'),
      document.querySelector('#lamborghini-img'),
      document.querySelector('#porsche-img')
    ]
    
    const showcaseDivs = [
      document.querySelector('#ferarri-showcase'),
      document.querySelector('#mercedes-showcase'),
      document.querySelector('#koenigsegg-showcase'),
      document.querySelector('#lamborghini-showcase'),
      document.querySelector('#porsche-showcase')
    ];

    const bulletDivs = [
      document.querySelector('#bullet1'),
      document.querySelector('#bullet2'),
      document.querySelector('#bullet3'),
      document.querySelector('#bullet4'),
      document.querySelector('#bullet5')
    ]
    
    carInputs.forEach((input, index) => {
      showcaseDivs[0]?.classList.add('active');
      bulletDivs[0]?.classList.add('active')
      carImages[0]?.addEventListener('click', handleClick)
      input.addEventListener('change', () => {
        if (input.checked) {
          // Remove the "active" class from all showcases
          showcaseDivs.forEach((showcaseDiv) => {
            showcaseDiv.classList.remove('active');
          });
          bulletDivs.forEach((bulletDiv) => {
            bulletDiv?.classList.remove('active')
          });
          carImages.forEach((carImage) => {
            carImage?.removeEventListener('click', handleClick);
          })
          // Add the "active" class to the corresponding showcase
          showcaseDivs[index].classList.add('active');
          bulletDivs[index].classList.add('active');
          carImages[index].addEventListener('click', handleClick);
        }
      });
    });
    
    
  

  }, [])

  function handleClick() {
    router.push('/inspect')
  }
  


  return (
  <>
    <Header/>
    <div className='flex flex-col justify-center w-full bg-black overflow-hidden overflow-y-hidden' style={{ height: `calc(100vh - 6rem)` }}>
      <div id='display' className='flex flex-col h-5/6 w-screen bg-gradient-to-t from-black to-white'>
        <div id='ferarri-showcase' className='showcase flex h-1/2 mt-0 w-full justify-center'>
          <h1 className='showcase-text absolute left-50 z-10 text-6xl text-white tracking-widest mt-32'>Ferarri J50</h1>
        <div className='slant-container h-full w-1/6 mr-8 mt-12 -skew-x-12'>
              <Image src={Ferarribg1} className='object-fill' alt='ferrari' width={900} height={300}/>
            </div>
          <div className='slant-container h-full w-1/6 pt-12 mr-6 -skew-x-12'>
            <Image src={Ferarribg2} className='object-fill'  alt='ferrari' width={900} height={300}/>
          </div>
          <div className='slant-container h-full w-1/6 pt-12 -skew-x-12'>
            <Image src={Ferarribg3} className='object-fill' alt='ferrari' width={900} height={300}/>
          </div>
        </div>
        <div id='mercedes-showcase' className='showcase mt-12 absolute flex h-1/2 w-full justify-center'>
          <h1 className='showcase-text absolute left-50 z-10 text-6xl text-white tracking-widest mt-32'>Mercedes AMG</h1>
        <div className='slant-container h-full w-1/6 mr-8 mt-12 -skew-x-12'>
              <Image src={Mercedesbg1} className='object-fill' alt='ferrari' width={900} height={300}/>
            </div>
          <div className='slant-container h-full w-1/6 pt-12 mr-6 -skew-x-12'>
            <Image src={Mercedesbg2} className='object-fill'  alt='ferrari' width={900} height={300}/>
          </div>
          <div className='slant-container h-full w-1/6 pt-12 -skew-x-12'>
            <Image src={Mercedesbg3} className='object-fill' alt='ferrari' width={900} height={300}/>
          </div>
        </div>
        <div id='koenigsegg-showcase' className='showcase mt-12 absolute flex h-1/2 w-full justify-center'>
          <h1 className='showcase-text absolute left-50 z-10 text-6xl text-white tracking-widest mt-32'>Koenigsegg Jesko</h1>
        <div className='slant-container h-full w-1/6 mr-8 mt-12 -skew-x-12'>
              <Image src={Koenigseggbg1} className='object-fill' alt='ferrari' width={900} height={300}/>
            </div>
          <div className='slant-container h-full w-1/6 pt-12 mr-6 -skew-x-12'>
            <Image src={Koenigseggbg2} className='object-fill'  alt='ferrari' width={900} height={300}/>
          </div>
          <div className='slant-container h-full w-1/6 pt-12 -skew-x-12'>
            <Image src={Koenigseggbg3} className='object-fill' alt='ferrari' width={900} height={300}/>
          </div>
        </div>
        <div id='lamborghini-showcase' className='showcase mt-12 absolute flex h-1/2 w-full justify-center'>
          <h1 className='showcase-text absolute left-50 z-10 text-6xl text-white tracking-widest mt-32'>Lamborghini Murcielago</h1>
        <div className='slant-container h-full w-1/6 mr-8 mt-12 -skew-x-12'>
              <Image src={Lamborghinibg1} className='object-fill' alt='ferrari' width={900} height={300}/>
            </div>
          <div className='slant-container h-full w-1/6 pt-12 mr-6 -skew-x-12'>
            <Image src={Lamborghinibg2} className='object-fill'  alt='ferrari' width={900} height={300}/>
          </div>
          <div className='slant-container h-full w-1/6 pt-12 -skew-x-12'>
            <Image src={Lamborghinibg3} className='object-fill' alt='ferrari' width={900} height={300}/>
          </div>
          </div>
        <div id='porsche-showcase' className='showcase mt-12 absolute flex h-1/2 w-full justify-center'>
          <h1 className='showcase-text absolute left-50 z-10 text-6xl text-white tracking-widest mt-32'>Porsche 918 Spyder</h1>
        <div className='slant-container h-full w-1/6 mr-8 mt-12 -skew-x-12'>
              <Image src={Porschebg1} className='object-fill' alt='ferrari' width={900} height={300}/>
            </div>
          <div className='slant-container h-full w-1/6 pt-12 mr-6 -skew-x-12'>
            <Image src={Porschebg2} className='object-fill'  alt='ferrari' width={900} height={300}/>
          </div>
          <div className='slant-container h-full w-1/6 pt-12 -skew-x-12'>
            <Image src={Porschebg3} className='object-fill' alt='ferrari' width={900} height={300}/>
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
            <Image id='ferarri-img' src={Ferrari} className='object-cover' alt='ferrari' quality="100" width={800} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-2" id="car-2-photo">
            <Image id='mercedes-img' className="object-cover" src={Mercedes} alt='mercedes' quality='100' width={700} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-3" id="car-3-photo">
            <Image id='koenigsegg-img' className='object-cover' src={Koenigsegg} alt='koenigsegg' quality='100' width={800} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-4" id="car-4-photo">
            <Image id='lamborghini-img' src={Lamborghini} className='object-cover' alt='lamb' width={800} height={300}/>
            </label>
            <label className='z-10 absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer' htmlFor="car-5" id="car-5-photo">
            <Image id='porsche-img' src={Porsche} className='object-cover' alt='porsche' width={800} height ={300} />
            </label>
          </div>
        </div>
      </div>
      <div id='footer' className='flex items-center justify-center h-1/6 w-screen bg-white overflow-hidden'>
        <div className='w-1/6 h-full flex items-center justify-between'>
          <div id='bullet1' className='bullet relative h-3 w-3 border-2 border-black rounded-full z-50'></div>
          <div id='bullet2' className='bullet relative h-3 w-3 border-2 border-black rounded-full z-50'></div>
          <div id='bullet3' className='bullet relative h-3 w-3 border-2 border-black rounded-full z-50'></div>
          <div id='bullet4' className='bullet relative h-3 w-3 border-2 border-black rounded-full z-50'></div>
          <div id='bullet5' className='bullet relative h-3 w-3 border-2 border-black rounded-full z-50'></div>
        </div>
      </div>
    </div>
  </>
  )
}

export default browse