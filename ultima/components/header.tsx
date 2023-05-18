import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import useUltimaStore from '../store/store'


function Header() {

  const user = useUltimaStore(state => state.user);
  const setDropDown = useUltimaStore((state) => state.setDropDown);
  const dropdown = useUltimaStore((state) => state.dropdown)

  return (
    <div id="header" className="relative w-screen h-24 pl-0 pr-0 lg:pr-8 lg:pl-8 brightness-125 bg-white overflow-x-scroll">
      <div className="flex h-full w-full justify-between">
        <div className="flex w-64 justify-start text-4xl items-center">
          <Image className="ml-6" src='/diamond.png' alt="me" width="44" height="44"/>
          <Link href='/'><h1 className="ml-2">Ultima</h1></Link>
        </div>
        <div className="w-64 justify-between items-center hidden lg:flex">
          <Link href='/'><h1 className="hover:cursor-pointer hover:text-lg">Home</h1></Link>
          <a href="#prompt" className="hover:cursor-pointer hover:text-lg">Models</a>
          <a href="#loc-header" className="hover:cursor-pointer hover:text-lg">Locations</a>
        </div>
        {user === null ? <div className="flex w-64 justify-end items-center lg:justify-start">
          <Link href="/LogIn" className="py-2 px-7 hover:border-2 hover:border-black hover:rounded-md hover:cursor-pointer">Log In</Link>
          <Link href="/SignUp" className='shadow-2xl bg-black text-white ml-0 py-3 px-2 text-sm lg:text-md lg:px-5 rounded-md m-3 active:text-black hover:bg-white hover:text-black hover:shadow-inner hover:border-2 hover:border-black'>Register</Link>
        </div> : <div className="flex w-64 justify-end items-center lg:justify-start">
            <button onClick={() => setDropDown(!dropdown)} className='flex hover:shadow-2xl justify-center mr-6 items-center border-2 p-2 border-black rounded-3xl w-fit ml-auto'>
              <RxHamburgerMenu className='text-2xl mr-2'/>
              <CgProfile className='text-3xl'/>
            </button>
        </div>}
      </div>
    </div>
  );
}

export default Header;
