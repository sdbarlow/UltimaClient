import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Calendar from '../../components/Calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import MercedesFront from '../../public/MercedesFront.png'
import MercedesDiag from '../../public/MercedesDiag.png'
import MercedesSide from '../../public/MercedesSide.png'
import MercedesBack from '../../public/MercedesBack.png'
import KoenigseggFront from '../../public/KoenigseggFront.png'
import KoenigseggDiag from '../../public/KoenigseggDiag2.png'
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
import { useEffect, useState, useRef } from 'react';

const Header = dynamic(() => import('../../components/header'), {
  ssr: false
});

function inspect() {
  const cartoshow = useUltimaStore((state) => state.cartoshow)
  const car = useUltimaStore((state) => state.car)
  const dropdown = useUltimaStore((state) => state.dropdown)
  const setUser = useUltimaStore((state) => state.setUser)
  const setDropDown = useUltimaStore((state) => state.setDropDown);
  const dropdownRef = useRef();
  const user = useUltimaStore(state => state.user);
  const [toggle, setToggle] = useState(false)
  const notify = () => toast.error('Must Be Logged In', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  const errorNotify = () => toast.error('Reserve Request Failed', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  const successNotify = () => toast.success('Booking Successful!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  const [totalPrice, setTotalPrice] = useState(`${car.data.price_per_day}`)
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  function calculatePrice(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.round(Math.abs((start - end) / oneDay)) + 1; 
  
    return days * car.data.price_per_day; 
  }

  function logOut(){
    setUser(null)
    setDropDown(!dropdown)
  }

  function toggleHandle(){
    setDropDown(!dropdown)
  }

  const handleDateChange = (dateRange) => {
    console.log("dateRange", dateRange);
    const start = dateRange.startDate;
    const end = dateRange.endDate;
    console.log("startDate", start);
    console.log(end)
  
    const price = calculatePrice(start, end);
  
    setSelectedDateRange(dateRange);
  
    setTotalPrice(price);
  };
  

    
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

function formatDateTime(dateTime) {
  const year = dateTime.getFullYear().toString().slice(-2);
  const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
  const day = ('0' + dateTime.getDate()).slice(-2);
  return `${month}/${day}/${year}`;
}

function handleClick(){
  setToggle(!toggle)
}

function handleReserve(){
  if (!user){
    notify()
  } else {
    const formattedData = {
      user_id: user.data.id,
      car_id: car.data.id,
      rental_start: formatDateTime(selectedDateRange.startDate),
      rental_end: formatDateTime(selectedDateRange.endDate),
      total_price: totalPrice
    };
    console.log(formattedData)
    fetch('https://ultima-appp.onrender.com/rental', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
      })
      .then(response => {
        if (!response.ok) {
          {errorNotify()}
        }
        return response.json();
      })
      .then(data => {
        useUltimaStore.getState().appendRental(data);
        successNotify()
        console.log(user)
      })
  }
}

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [dropdownRef]);
    
  return (
    <>
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    <Header/>
    <div className='flex w-full shadow-inner bg-slate-100 shadow-black' style={{ height: `calc(100vh - 6rem)` }}>
    {dropdown && (
        <div ref={dropdownRef} className="absolute border-2 flex flex-col border-black shadow-md mr-24 w-32 lg:w-48 bg-white overflow-hidden lg:right-[-50px] top-20 text-sm">
          <Link href='/rentals' onClick={toggleHandle} className="pt-2 pb-2 text-center border-b-2 hover:bg-gray-400">My Rentals</Link>
          <button className="pt-2 pb-2 border-b-2 border-red-200 hover:bg-gray-400">Profile</button>
          <button onClick={logOut} className="pt-2 pb-2 hover:bg-gray-400">
            Log Out
          </button>
        </div>
      )}
      <div id='car-slides' className='flex justify-center items-center w-3/4 h-full shadow-inner shadow-black'>
        <div id='left-arrow' className='flex h-fit group hover:cursor-pointer mr-4'>
          <SlArrowLeft className='h-16 w-16 group-hover:h-20 group-hover:w-20'/>
        </div>
        <div id='image-container' className='flex flex-col justify-center items-center w-3/4 h-full'>
          <div className='w-full flex justify-center items-center mb-10 mt-2 tracking-widest text-2xl'>
            <h1 className='car-title'>{car.data.make} {car.data.model}</h1>
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
          {toggle ? 
            <div className="h-fit flex flex-col justify-center border-l-2 border-r-2 items-start bg-slate-100 text-black">
              <p className='reserve-form-text bg-white p-2 text-xl w-full border-b-2 border-t-2'>${car.data.price_per_day}/Per Day</p>
              <Calendar value={selectedDateRange} onChange={handleDateChange} className="mb-6" />
              <p className="reserve-form-text text-lg p-2 font-bold bg-white w-full border-b-2 border-t-2">Start Date:<span className="sm-reserve-form-text text-xl font-normal ml-2">{selectedDateRange.startDate.toLocaleDateString()}</span></p>
              <p className="reserve-form-text text-lg p-2 font-bold bg-white w-full border-b-2">End Date:<span className="sm-reserve-form-text text-xl font-normal ml-2">{selectedDateRange.endDate.toLocaleDateString()}</span></p>
              <p className="reserve-form-text text-lg p-2 border-b-2 bg-white w-full font-bold">Total Price:<span className="sm-reserve-form-text text-xl font-normal ml-2">${totalPrice}</span></p>
              <div className='flex w-full p-2 items-center bg-white border-b-2 justify-between'>
              <button className="bg-red-400 text-black px-6 py-3 rounded-full shadow-lg" onClick={handleClick}>Cancel</button>
              <button className="bg-green-400 text-black px-6 py-3 rounded-full shadow-lg" onClick={handleReserve}>Reserve</button>
              </div>
            </div>: 
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
          <button id='table-reserve' onClick={handleClick} className="bg-black text-slate-300 text-center w-full mt-4 p-4 text-2xl hover:text-3xl border-2 border-slate-300">Reserve Now</button>
        </div>}
      </div>
    </div>
    </>
  )
}

export default dynamic (() => Promise.resolve(inspect), {ssr: false})