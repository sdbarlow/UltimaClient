import React from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import useUltimaStore from '../../store/store';
import KoenigseggDiag from '../../public/KoenigseggDiag2.png'
import MercedesDiag from '../../public/MercedesDiag.png'
import PorscheDiag from '../../public/PorscheDiag.png'
import LamborghiniDiag from '../../public/LamborghiniMerciDiag.png'
import FerarriDiag from '../../public/FerrariDiag.png'
import { CgCloseO } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = dynamic(() => import('../../components/header'), {
  ssr: false
});
const DropDownDynamic = dynamic(() => import("../../components/dropDown"), {
  ssr: false,
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
  const dropdown = useUltimaStore((state) => state.dropdown);
  const router = useRouter()
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [targetedEle, setTargetedEle] = useState(null)

  const successNotify = () => toast.success('Reservation Successfully Deleted', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

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

  if (user == null) {
     router.push('/')
     return
  }

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    handleDelete(targetedEle);
  };

  function handleDelete(id:any) {
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
                        successNotify()
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

    function handleToggle(e:any){
      const id = e.target.id || e.currentTarget.id;
      setShowDeleteModal(true)
      setTargetedEle(id)
    }
 
  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
      <Header />
      {dropdown && (
        <DropDownDynamic/>
      )}
      <div className="w-screen bg-black" style={{ minHeight: `calc(100vh - 6rem)` }}>
        <div className="flex flex-wrap ml-8 pt-8">
          {user.data.rentals.length === 0 ? (
            <div className="flex border-2 border-red-400 w-full items-center justify-center">
            <p className="text-white text-center bg-gray-900 px-4 py-2 rounded-lg">
              You have no rentals.
            </p>
            <Link href="/browse">
              <button className="bg-gray-900 text-white py-2 px-4 rounded-lg ml-4">
                Browse Rentals
              </button>
            </Link>
          </div>
          ) : (
            <>
              {user.data.rentals.map((rental: Rental, index: number) => {
                const uniqueId = `close-icon-${index}`;
                return (
                  <div key={index} className="rental-card bg-white rounded-lg p-4 mb-4 mr-4">
                    {rental.car && rental.car.make && (
                      <div>
                        <CgCloseO
                          id={rental.id}
                          onClick={(e) => handleToggle(e)}
                          className="text-xl hover:cursor-pointer hover:text-red-600 z-10"
                        />
                        <Image
                          className="select-none"
                          src={carImages[rental.car.make].img}
                          height={900}
                          width={300}
                          alt="koen"
                        />
                      </div>
                    )}
                    {rental && rental.car && rental.car.make && (
                      <p className="text-black font-bold">
                        {rental.car.make} {rental.car.model}
                      </p>
                    )}
                    <p className="rent-title text-black">
                      Rental Start: <span className="rent-desc">{rental.rental_start.slice(0, 10)}</span>
                    </p>
                    <p className="rent-title text-black">
                      Rental End: <span className="rent-desc">{rental.rental_end.slice(0, 10)}</span>
                    </p>
                    <p className="rent-title text-black">
                      Total Price: <span className="rent-desc">${rental.total_price}</span>
                    </p>
                  </div>
                );
              })}
              {showDeleteModal && (
                <>
                  <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50"></div>
                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md p-6 z-50">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Confirm Delete</h2>
                    <p className="mb-4">Are you sure you want to delete your Reservation?</p>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setShowDeleteModal(false)}
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded  mr-2"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleConfirmDelete}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

    </>
  );
}

export default dynamic (() => Promise.resolve(Rentals), {ssr: false})
