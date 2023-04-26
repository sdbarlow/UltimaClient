import React from 'react';

function Header() {
  return (
    <div className="flex border-2 border-black justify-center items-center bg-gray-900 text-white" style={{ height: '80px' }}>
  <a href="/" className="flex items-center text-gray-300 hover:text-white focus:outline-none">
    <span id="home-button" className="ml-2">Log Out</span>
  </a>
  <div className="flex items-center">
    <h1 className="text-4xl font-large text-transparent bg-clip-text flex-shrink-0">Net</h1>
    <h1 className="text-4xl font-large text-transparent bg-clip-text flex-shrink-0">Hive</h1>
  </div>
  <a href="/ProfilePage">
    <img id="profile-button" className="w-full h-full rounded-full object-cover" src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" alt="Default Profile" width="40" height="40" />
  </a>
</div>


  
  );
}

export default Header;
