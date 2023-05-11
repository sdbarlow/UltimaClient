import React from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import useUltimaStore from '../../store/store';
import KoenigseggDiag from '../../public/KoenigseggDiag2.png'
import MercedesDiag from '../../public/MercedesDiag.png'
import PorscheDiag from '../../public/PorscheDiag.png'
import LamborghiniDiag from '../../public/LamborghiniMerciDiag.png'
import FerarriDiag from '../../public/FerrariDiag.png'
import { CgCloseO } from "react-icons/cg";

const Header = dynamic(() => import('../../components/header'), {
  ssr: false
});

interface Rental {
  id: string;
  car_id: string;
  rental_start: string;
  rental_end: string;
  total_price: number;
}

function Rentals() {
  const user = useUltimaStore(state => state.user);
  const setUser = useUltimaStore((state) => state.setUser);

  const [carImages, setCarImages] = useState({
    Mercedes: {
      img: MercedesDiag
    },
    Koenigsegg: {
      img: KoenigseggDiag
    },
    Porsche: {
      img: PorscheDiag
    },
    Lamborghini: {
      img: LamborghiniDiag
    },
    Ferrari: {
      img: FerarriDiag
    }
  });

  if (!user) {
    // Handle the case when user is null
    return null; // or display a loading state, redirect, or other UI
  }

  function handleDelete(e: any) {
    const id = e.target.id || e.currentTarget.id;
    console.log(id);
    fetch(`https://ultima-appp.onrender.com/rental/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.status === 200) {
            fetch(`https://ultima-appp.onrender.com/users/${user.data.id}`)
                .then((res) => {
                    if (res.status === 200) {
                    res.json()
                    .then((data) => {
                        setUser({ data });
                    });
                    }
                });
          } else {
            console.log('Delete request failed');
          }
        })
        .catch((error) => {
          console.log('Error occurred during delete request:', error);
        });
    }
 
  return (
    <>
      <Header />
      <div className="w-screen bg-black" style={{ minHeight: `calc(100vh - 6rem)` }}>
        <div className="flex flex-wrap ml-8 pt-8">
        {user.data.rentals.map((rental: Rental, index: number) => {
            const uniqueId = `close-icon-${index}`;
            return (
                <div key={index} className="rental-card bg-white rounded-lg p-4 mb-4 mr-4">
                <div>
                    <CgCloseO id={rental.id} onClick={handleDelete} className='text-xl hover:cursor-pointer hover:text-red-600 z-10'/>
                    <Image className='select-none' src={carImages[rental.car.make].img} height={900} width={300} alt='koen'/>
                </div>
                <p className="text-black font-bold">
                    {rental.car.make} {rental.car.model}
                </p>
                <p className="rent-title text-black">Rental Start: <span className='rent-desc'>{rental.rental_start.slice(0,10)}</span></p>
                <p className="rent-title text-black">Rental End: <span className='rent-desc'>{rental.rental_end.slice(0,10)}</span></p>
                <p className="rent-title text-black">Total Price: <span className='rent-desc'>${rental.total_price}</span></p>
                </div>
            );
            })}
        </div>
      </div>
    </>
  );
}

export default dynamic (() => Promise.resolve(Rentals), {ssr: false})
