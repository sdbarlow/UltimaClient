import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/header'
import { FiMapPin } from "react-icons/fi";
import { useEffect, useState, useRef } from 'react';
import useUltimaStore from '../../store/store'
import Koenigsegg from '../../public/KoenigseggDiag.png'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const setUser = useUltimaStore((state) => state.setUser)
  const user = useUltimaStore(state => state.user);
  const setDropDown = useUltimaStore((state) => state.setDropDown);
  const dropdown = useUltimaStore((state) => state.dropdown)
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log(user)

useEffect(() => {

  setMounted(true);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function() {
      let radio = document.getElementById('item-1');
      let lamb = document.getElementById('lamb');
      let rect = lamb.getBoundingClientRect();
      let visible = (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
      if (visible) {
        radio.checked = true;
      }
    });
}
},[])

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
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [dropdownRef]);

function logOut(){
  console.log('hello')
  setUser(null)
  setDropDown(!dropdown)
}



if (!mounted) return null;

  return (
    <>
      <Header/>
      <div className='text-center'>
      {dropdown && (
        <div ref={dropdownRef} className="absolute border-2 flex flex-col border-black shadow-md mr-6 right-0 w-32 lg:w-48 bg-white overflow-hidden lg:right-[-8px] lg:mr-72 top-20 text-sm">
          <button className="pt-2 pb-2 border-b-2 hover:bg-gray-400">My Rentals</button>
          <button className="pt-2 pb-2 border-b-2 border-red-200 hover:bg-gray-400">Profile</button>
          <button onClick={logOut} className="pt-2 pb-2 hover:bg-gray-400">
            Log Out
          </button>
        </div>
      )}
      {user ? <h1 id='wel-text' className='opacity-0 text-white animate-reveal h-0 tracking-widest bg-black'>Welcome, {user.data.first_name}!</h1> : null}
      </div>
      <div className='flex justify-center text-gray-900 bg-black w-screen' style={{ height: `calc(100vh - 6rem)` }}>
              <div className='flex flex-col justify-center pl-64 w-full items-start'>
              <h1 className='text-white text-2xl'>Plan your trip now</h1><br/>
                <h1 className='text-white text-5xl'>Experience <span id='ultima'>Ultima</span>te Luxury</h1><br/>
                <h1 className='text-white'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</h1>
              </div>
              <div className='justify-center items-end w-full pr-64 hidden lg:flex'>
                <Image priority className="brightness-125 object-cover" src={Koenigsegg} width={900} height={500} alt=""/>
              </div>
              </div>
            <div className="flex justify-center pl-64 pr-64 items-center w-screen h-screen bg-black">
            <div className="w-full max-w-3xl max-h-fit h-4/5 flex justify-center flex-col items-center ">
              <h1 id="prompt" className='pb-16 text-6xl'>Browse By Make</h1>
              <input type="radio" name="slider" id="item-1"/>
              <input type="radio" name="slider" id="item-2"/>
              <input type="radio" name="slider" id="item-3"/>
              <input type="radio" name="slider" id="item-4"/>
              <input type="radio" name="slider" id="item-5"/>
            <div className="cards">
              <label className="absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-1" id="item-1-photo">
                <Image className="w-full h-full object-cover" width={500} height={300} src="/LamborghiniLogo.png" alt="song"/>
              </label>
              <label className="absolute w-3/6 left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-2" id="item-2-photo">
                <Image className="w-fit h-10/12" src="/PorscheLogo.png" width={500} height={300}  alt="song"/>
              </label>
              <label className="absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-3" id="item-3-photo">
                <Image className="w-full h-full object-cover" src="/KoenigseggLogo.png" width={500} height={300}  alt="song"/>
              </label>
              <label className="absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-4" id="item-4-photo">
                <Image className="w-fit h-full object-cover pl-12" src="/Ferrar.png" width={500} height={300}  alt="song"/>
              </label>
              <label className="absolute w-3/6 h-full left-0 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" htmlFor="item-5" id="item-5-photo">
                <Image className="w-full h-full object-cover" src="/Mercedes.png" width={500} height={300}  alt="song"/>
              </label>
            </div>
            <div id="player" className="w-full max-w-3xl max-h-fit h-1/5 flex justify-center items-center ">
              <input type="radio" name="text-slider" id="item-text-1" />
              <input type="radio" name="text-slider" id="item-text-2"/>
              <input type="radio" name="text-slider" id="item-text-3"/>
            <div className="texts">
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-1-text" htmlFor="item-1">
                <h1 id='lamb' className="texts text-center text-4xl object-cover">Lamborghini</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-2-text" htmlFor="item-2">
                <h1 className="texts text-center text-4xl object-cover">Porsche</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-3-text" htmlFor="item-3">
                <h1 className="texts text-center text-4xl object-cover">Koenigsegg</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-4-text" htmlFor="item-4">
                <h1 className="texts text-center text-4xl object-cover">Ferrari</h1>
              </label>
              <label className="absolute w-1/5 h-10 right-0 m-auto transition-all duration-1000 hover:cursor-pointer" id="item-5-text" htmlFor="item-5">
                <h1 className="texts text-center text-4xl object-cover">Mercedes</h1>
              </label>
            </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center pl-64 pr-64 w-vw h-vh overflow-hidden bg-black">
              <div className="flex justify-center w-full h-2/4">
              <h1 id='loc-header' className='loc-header text-white text-center pt-16 text-6xl'>Browse By Location</h1>
              </div>
              <div className="relative m-auto w-fit h-3/4">
              <Image id="usmap" className="w-full h-full object-contain brightness-200" width={900} height={300} src="/UnitedStates.jpg" alt="map" />
              <div id='parent-1' className="map-pin absolute group hover:cursor-pointer top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
              </div>
              <div id='parent-3' className="map-pin absolute group hover:cursor-pointer hover:right-[83%] top-[50%] right-[84%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
              </div>
              <div id='parent-5' className="map-pin absolute group hover:cursor-pointer hover:right-[12%] top-[77%] right-[13%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
              </div>
              <div id='parent-7' className="map-pin absolute group hover:cursor-pointer hover:right-[77.5%] top-[45%] right-[78.5%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
              </div>
              <div id='parent-9' className="map-pin absolute group hover:cursor-pointer top-[25%] right-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <FiMapPin className="absolute text-blue-600 group-hover:text-white group-hover:h-10 group-hover:w-10 h-8 w-8" />
              </div>
              <div id='parent-10' className="absolute top-[37%] right-[-91%] transform -translate-x-1/2 -translate-y-1/2">
                <svg height="50" width="500">
                  <line x1="0" y1="0" x2="200" y2="200" className="stroke-white" />
                  <foreignObject x="60" y="30" width="500" height="50">
                    <div xmlns="http://www.w3.org/1999/xhtml" className='text-white text-2xl'>
                      <sup className='loc-text'>New York City</sup>
                    </div>
                  </foreignObject>
                  <line x1="170" y1="50" y2="50" x2="50" className="stroke-white"/>
                </svg>
              </div>
              <div id='parent-6' className="absolute top-[70%] right-[-45%] h-32 w-50 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="h-24 w-64 m-8" width="500">
                <foreignObject x="65" y="0" width="500" height="50">
                    <div xmlns="http://www.w3.org/1999/xhtml" className='text-white text-2xl'>
                      <sup className='loc-text'>Miami</sup>
                    </div>
                  </foreignObject>
                  <line x1="0" y1="80" x2="40" y2="20" className="stroke-white" />
                  <line x1="130" y1="20" y2="20" x2="40" className="stroke-white"/>
                </svg>
              </div>
              <div id='parent-2' className="absolute top-[77%] right-[-51%] transform -translate-x-1/2 -translate-y-1/2">
                <svg height="140" width="500">
                  <line x1="13" y1="0" x2="200" y2="300" className="stroke-white" />
                  <foreignObject x="115" y="120" width="500" height="50">
                    <div xmlns="http://www.w3.org/1999/xhtml" className='text-white text-2xl'>
                      <sup className='loc-text'>Dallas</sup>
                    </div>
                  </foreignObject>
                  <line x1="175" y1="140" y2="140" x2="100" className="stroke-white"/>
                </svg>
              </div>
              <div id='parent-4' className="absolute top-[58%] right-[-1%] transform -translate-x-1/2 -translate-y-1/2">
                <svg height="140" width="500">
                  <line x1="90" y1="50" x2="50" y2="200" className="stroke-white" />
                  <foreignObject x="3" y="120" width="500" height="50">
                    <div xmlns="http://www.w3.org/1999/xhtml" className='text-white text-2xl'>
                      <sup className='loc-text'>Los Ang.</sup>
                    </div>
                  </foreignObject>
                  <line x1="67" y1="140" y2="140" x2="-20" className="stroke-white"/>
                </svg>
              </div>
              <div id='parent-8' className="absolute top-[61%] right-[-17.8%] transform -translate-x-1/2 -translate-y-1/2">
                <svg height="140" width="500">
                  <line x1="13" y1="0" x2="120" y2="300" className="stroke-white" />
                  <foreignObject x="67" y="120" width="500" height="50">
                    <div xmlns="http://www.w3.org/1999/xhtml" className='text-white text-2xl'>
                      <sup className='loc-text'>Las Vegas</sup>
                    </div>
                  </foreignObject>
                  <line x1="145" y1="140" y2="140" x2="63" className="stroke-white"/>
                </svg>
              </div>
            </div>
            </div>
        </>
  )
}
