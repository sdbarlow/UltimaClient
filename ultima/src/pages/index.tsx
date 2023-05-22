import Image from 'next/image'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import Header from '../../components/header'
import { FiMapPin } from "react-icons/fi";
import { useEffect, useState, useRef } from 'react';
import useUltimaStore from '../../store/store'
import Koenigsegg from '../../public/KoenigseggDiag.png'
import KoenigseggFront from '../../public/KoenigseggFront.png'
import { FaFlagCheckered } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

const DropDownDynamic = dynamic(() => import("../../components/dropDown"), {
  ssr: false,
});


export default function Home() {
  const setDropDown = useUltimaStore((state) => state.setDropDown);
  const dropdown = useUltimaStore((state) => state.dropdown)
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    setMounted(true);
  
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', function() {
        let radio = document.getElementById('item-1');
        let lamb = document.getElementById('lamb');
  
        if (lamb) {
          let rect = lamb.getBoundingClientRect();
          let visible = (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
  
          if (visible) {
            if(radio instanceof HTMLInputElement){
              radio.checked = true;
            }
          }
        }
      });
    }
  }, []);
  

useEffect(() => {
  if(typeof document !== 'undefined'){
    const elementToAnimate = document.getElementById('usmap');
    const targetElement = document.getElementById('loc-header');
  
    // Create the observer for the target element
    if (elementToAnimate && targetElement) {
      const targetObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the animation class when the target element comes into view
            elementToAnimate.classList.add('animate-comeup');
          }
        });
      });
      targetObserver.observe(targetElement);
    }

    if (typeof document !== 'undefined') {
      const elementsToAnimate = document.getElementsByClassName('map-pin');
      const targetElement = document.getElementById('loc-header');
      // Create the observer
      if (elementToAnimate && targetElement) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Add the animation class to the elements to animate when the target element comes into view
              for (let i = 0; i < elementsToAnimate.length; i++) {
                elementsToAnimate[i].classList.add('animate-comedown');
              }
            }
          });
        });
        observer.observe(targetElement);
      }
    }
  }
}, [mounted]);

useEffect(() => {
  const ultima = document.getElementById('ultima');
  const animationInterval = 3000; // 3 seconds delay between iterations
  
  const animate = () => {
    const ultima = document.getElementById('ultima');
    if (ultima !== null) {
      ultima.style.animation = 'animate 750ms ease-in-out';
      ultima.style.animationIterationCount = '1';
    }
  };
  
  const applyAnimations = () => {
    const ultima = document.getElementById('ultima');
    if (ultima !== null) {
      animate();
      setTimeout(() => {
        if (ultima !== null) {
          ultima.style.animation = 'none'; // Reset animation after completion
        }
      }, animationInterval);
    }
  };
  
  applyAnimations();
  setInterval(applyAnimations, animationInterval * 2);
}, [])

function handleClick(){
  router.push('/browse')
}

useEffect(() => {

  const emblemInputs = [
    document.querySelector('#item-1'),
    document.querySelector('#item-2'),
    document.querySelector('#item-3'),
    document.querySelector('#item-4'),
    document.querySelector('#item-5')
  ];

  const carImages = [
    document.querySelector('#Lamborghini'),
    document.querySelector('#Porsche'),
    document.querySelector('#Koenigsegg'),
    document.querySelector('#Ferarri'),
    document.querySelector('#Mercedes'),
  ]

  emblemInputs.forEach((input, index) => {
    carImages[0]?.addEventListener('click', handleClick);

    if (input instanceof HTMLInputElement) {
      input.addEventListener('change', () => {
        if (input.checked) {
          carImages.forEach((carImage) => {
            carImage?.removeEventListener('click', handleClick);
          });

        const selectedCarImage = carImages[index];
              if (selectedCarImage) {
                selectedCarImage.addEventListener('click', handleClick);
              }
        }
      })
    }

  })
})



if (!mounted) return null;

  return (
    <>
      <Header/>
      {dropdown && (
        <DropDownDynamic/>
      )}
      <div className='flex justify-center text-gray-900 bg-black w-screen' style={{ height: `calc(100vh - 6rem)`}}>
              <div className="skew-div absolute left-0 top-[6rem] flex-col sm:w-20 md:w-48 lg:w-96 bg-gradient-to-b from-white to-black z-20 justify-center "  style={{ height: `calc(100vh - 6rem)`}}></div>
              <div className="flex flex-col bg-gradient-to-b from-white to-black z-20 justify-center sm:ml-0 md:ml-0 lg:ml-8 -skew-x-12">
              <h1 className='text-black sm:text-lg md:text-2xl lg:text-2xl lg:ml-4 skew-x-12'>Plan your trip now</h1><br/>
                <h1 className='text-black sm:text-xl sm:mr-3 md:text-3xl md:ml-3 lg:text-5xl lg:pl-4 skew-x-12'>Experience <span id='ultima'>Ultima</span>te Luxury</h1><br/>
                <h1 className='text-black sm:hidden lg:inline-block skew-x-12 lg:ml-1 lg:pl-10'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h1>
                <div className='flex sm:w-full sm:items-center sm:justify-end lg:justify-start lg:mt-6 sm:pl-0 lg:pl-14 lg:overflow-hidden lg:ml-2'>
                <Link href='/browse' className='main-button skew-x-12 md:pt-3 md:pb-3 md:pl-6 md:pr-6 md:bg-transparent md:mt-4 md:mr-4 md:shadow-sm md:border-2 md:border-white md:shadow-white lg:pt-3 lg:pb-3 lg:pl-6 lg:pr-6 sm:p-0 sm:m-0 sm:text-sm lg:bg-transparent sm:bg-transparent text-white lg:mt-4 lg:mr-4 rounded-sm sm:shadow-none lg:shadow-sm lg:border-2 lg:border-white lg:shadow-white hover:shadow-lg hover:shadow-slate-300 hover:bg-black hover:border-white'><span className='sm:hidden md:inline-block md:pr-2 md:text-base lg:inline-block lg:pr-2 lg:text-base'>Book Ride</span><FaCalendarCheck className='inline sm:pl-0 pl-2 text-2xl lg:text-base'/><span className='md:hidden pr-1 pl-1 text-xs'>Book Ride</span></Link>
                <button className='main-button skew-x-12 md:pt-3 md:pb-3 md:pl-6 md:pr-6 md:block md:mr-4 md:bg-transparent md:mt-4 md:shadow-sm md:border-2 md:border-white md:shadow-white lg:pt-3 lg:pb-3 lg:pl-6 lg:pr-6 sm:text-sm sm:p-0  sm:m-0 sm:hidden lg:block lg:bg-transparent text-white lg:mt-4 rounded-sm sm:bg-transparent sm:shadow-none lg:shadow-sm lg:border-2 lg:border-white lg:shadow-white hover:shadow-lg hover:shadow-slate-300 hover:bg-black hover:border-white'><span className='sm:hidden md:inline-block lg:inline-block md:pr-2 md:text-base lg:pr-2 lg:text-base'>Learn More</span><FaFlagCheckered className='inline pl-2 sm:pl-0 text-2xl lg:text-base'/></button>
              </div>
              </div>
              <div className='justify-center bg-black sm:items-center sm:flex w-full pr-8 lg:flex md:flex md:w-1/2'>
                <Image priority className="sm:hidden md:inline md:pl-4 lg:pl-0 brightness-125 object-cover" src={Koenigsegg} width={900} height={900} alt=""/>
                <Image priority className="hidden sm:inline sm:absolute sm:right-14 md:hidden lg:hidden brightness-125 object-cover" src={KoenigseggFront} width={900} height={900} alt=""/>
              </div>
              </div>
            <div className="flex justify-center items-center w-screen h-screen bg-black">
            <div className="w-full max-w-3xl max-h-fit h-4/5 flex justify-center flex-col items-center ">
              <h1 id="prompt" className='pb-16 sm:text-2xl md:text-4xl lg:text-6xl'>Browse By Make</h1>
              <input type="radio" name="slider" id="item-1"/>
              <input type="radio" name="slider" id="item-2"/>
              <input type="radio" name="slider" id="item-3"/>
              <input type="radio" name="slider" id="item-4"/>
              <input type="radio" name="slider" id="item-5"/>
            <div className="cards">
              <label className="absolute w-2/6 md:w-3/6 md:h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-1" id="item-1-photo">
                <Image id='Lamborghini' className="w-full h-full object-cover" width={500} height={300} src="/LamborghiniLogo.png" alt="song"/>
              </label>
              <label className="absolute sm:w-2/6 md:w-3/6 md:h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-2" id="item-2-photo">
                <Image id='Porsche' className="w-full h-full" src="/PorscheLogo.png" width={500} height={300}  alt="song"/>
              </label>
              <label className="absolute sm:w-2/6 md:w-3/6 md:h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-3" id="item-3-photo">
                <Image id='Koenigsegg' className="w-full h-full object-cover" src="/KoenigseggLogo.png" width={500} height={300}  alt="song"/>
              </label>
              <label className="absolute sm:w-2/6 md:w-3/6 md:h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-4" id="item-4-photo">
                <Image id='Ferrari' className="w-fit h-full object-cover pl-12" src="/Ferrar.png" width={500} height={300}  alt="song"/>
              </label>
              <label className="absolute sm:w-2/6 md:w-3/6 md:h-full left-0  right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-5" id="item-5-photo">
                <Image id='Mercedes' className="w-full h-full object-cover" src="/Mercedes.png" width={500} height={300}  alt="song"/>
              </label>
            </div>
            <div id="player" className="w-full max-w-3xl max-h-fit sm:h-1/5 sm:mb-80 md:mb-0 flex justify-center items-center">
              <input type="radio" name="text-slider" id="item-text-1" />
              <input type="radio" name="text-slider" id="item-text-2"/>
              <input type="radio" name="text-slider" id="item-text-3"/>
            <div className="texts">
              <label className="absolute w-1/5 md:h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-1-text" htmlFor="item-1">
                <h1 id='lamb' className="texts text-center sm:text-xl md:text-4xl object-cover">Lamborghini</h1>
              </label>
              <label className="absolute md:w-1/5 md:h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-2-text" htmlFor="item-2">
                <h1 className="texts text-center sm:text-xl md:text-4xl object-cover">Porsche</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-3-text" htmlFor="item-3">
                <h1 className="texts text-center sm:text-xl md:text-4xl object-cover">Koenigsegg</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-4-text" htmlFor="item-4">
                <h1 className="texts text-center sm:text-xl md:text-4xl object-cover">Ferrari</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-5-text" htmlFor="item-5">
                <h1 className="texts text-center sm:text-xl md:text-4xl object-cover">Mercedes</h1>
              </label>
            </div>
                </div>
              </div>
            </div>
            <div onClick={handleClick} className="flex flex-col justify-center md:pl-0 md:pr-0 lg:pl-64 lg:pr-64 w-screen h-screen overflow-hidden bg-black">
              <div className="flex justify-center w-full h-1/12 border-2">
              <h1 id='loc-header' className='loc-header text-white text-center pt-0 pb-2 md:text-4xl lg:text-6xl'>Browse By Location</h1>
              </div>
              <div className="relative block m-auto max-w-[1200px] max-h-[800px] border-2">
              <Image id="usmap" className="align-top relative w-full brightness-200" width={900} height={300} src="/UnitedStates.jpg" alt="map" />
              <div id='parent-1' className="map-pin absolute group hover:cursor-pointer top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
                <div id='parent-2' className="inline absolute">
                <svg height="140" width="500">
                  <line x1="13" y1="0" x2="200" y2="300" className="stroke-white" />
                  <foreignObject x="115" y="120" width="500" height="50">
                    <div className='text-white text-2xl'>
                      <sup className='loc-text'>Dallas</sup>
                    </div>
                  </foreignObject>
                  <line x1="175" y1="140" y2="140" x2="100" className="stroke-white"/>
                </svg>
              </div>
              </div>
              <div id='parent-3' onClick={handleClick} className="map-pin absolute group hover:cursor-pointer hover:right-[83%] top-[50%] right-[84%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
                <div id='parent-4' className="inline absolute left-[-80px]">
                <svg height="140" width="500">
                  <line x1="90" y1="50" x2="50" y2="200" className="stroke-white" />
                  <foreignObject x="3" y="120" width="500" height="50">
                    <div className='text-white text-2xl'>
                      <sup className='loc-text'>Los Ang.</sup>
                    </div>
                  </foreignObject>
                  <line x1="67" y1="140" y2="140" x2="-20" className="stroke-white"/>
                </svg>
              </div>
              </div>
              <div id='parent-5' onClick={handleClick} className="map-pin absolute group hover:cursor-pointer hover:right-[12%] top-[77%] right-[13%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
                <div id='parent-6' className="inline absolute top-[-90px]">
                <svg className="h-24 w-64 m-8" width="500">
                <foreignObject x="65" y="0" width="500" height="50">
                    <div className='text-white text-2xl'>
                      <sup className='loc-text'>Miami</sup>
                    </div>
                  </foreignObject>
                  <line x1="0" y1="80" x2="40" y2="20" className="stroke-white" />
                  <line x1="130" y1="20" y2="20" x2="40" className="stroke-white"/>
                </svg>
              </div>
              </div>
              <div id='parent-7' onClick={handleClick} className="map-pin absolute group hover:cursor-pointer hover:right-[77.5%] top-[45%] right-[78.5%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
                <div id='parent-8' className="inline absolute top-[60px] left-[10px]">
                <svg height="140" width="500">
                  <line x1="13" y1="0" x2="120" y2="300" className="stroke-white" />
                  <foreignObject x="67" y="120" width="500" height="50">
                    <div className='text-white text-2xl'>
                      <sup className='loc-text'>Las Vegas</sup>
                    </div>
                  </foreignObject>
                  <line x1="145" y1="140" y2="140" x2="63" className="stroke-white"/>
                </svg>
              </div>
              </div>
              <div id='parent-9' onClick={handleClick} className="map-pin absolute group hover:cursor-pointer top-[25%] right-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="absolute text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
                <div id='parent-10' className="inline absolute left-[30px] top-[45px]">
                <svg height="50" width="500">
                  <line x1="0" y1="0" x2="200" y2="200" className="stroke-white" />
                  <foreignObject x="60" y="30" width="500" height="50">
                    <div className='text-white text-2xl'>
                      <sup className='loc-text'>New York City</sup>
                    </div>
                  </foreignObject>
                  <line x1="170" y1="50" y2="50" x2="50" className="stroke-white"/>
                </svg>
              </div>
              </div>
            </div>
            </div>
        </>
  )
}
