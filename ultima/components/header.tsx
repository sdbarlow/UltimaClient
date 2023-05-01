import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function Header() {
  return (
    <div id="header" className="h-24 w-screen brightness-125 bg-white animate-headerdown">
      <div className="flex h-full w-full justify-between">
        <div className="flex w-64 justify-start text-4xl items-center">
          <Image className="ml-6" src='/diamond.png' alt="me" width="44" height="44"/>
          <h1 className="ml-2">Ultima</h1>
        </div>
        <div className="flex w-64 justify-between items-center">
          <a className="hover:cursor-pointer hover:text-lg">Home</a>
          <a href="#prompt" className="hover:cursor-pointer hover:text-lg">Models</a>
          <a className="hover:cursor-pointer hover:text-lg">Locations</a>
        </div>
        <div className="flex w-64 justify-start items-center">
          <a className="py-2 px-7 hover:border-2 hover:border-black hover:rounded-md hover:cursor-pointer">Log In</a>
          <Link href="/SignUp" className='shadow-2xl bg-black text-white ml-8 py-3 px-5 rounded-md m-3 active:text-black hover:bg-white hover:text-black hover:shadow-inner hover:border-2 hover:border-black'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
