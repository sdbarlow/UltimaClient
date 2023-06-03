import React, {useRef, useEffect} from 'react'
import Link from 'next/link'
import useUltimaStore from '../store/store'
import {signOut} from 'next-auth/react'

function DropDown() {
    const setDropDown = useUltimaStore((state) => state.setDropDown);
    const setUser = useUltimaStore((state) => state.setUser)
    const dropdown = useUltimaStore((state) => state.dropdown);
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    function toggleHandle(){
        setDropDown(!dropdown)
      }

      function logOut(){
        signOut();
        setUser(null)
        setDropDown(!dropdown)
      }

  return (
    <div ref={dropdownRef} className="absolute border-2 flex flex-col border-black shadow-md mr-24 w-32 lg:w-48 bg-white overflow-hidden right-[-75px] lg:right-[-50px] top-20 text-sm rounded-xl text-center z-20">
    <Link href='/rentals' onClick={toggleHandle} className="pt-2 pb-2 border-b-2 hover:bg-gray-400">My Rentals</Link>
    <button className="pt-2 pb-2 border-b-2 border-red-200 hover:bg-gray-400">Profile</button>
    <button onClick={logOut} className="pt-2 pb-2 hover:bg-gray-400 text-red-400">
      Log Out
    </button>
  </div>
  )
}

export default DropDown

