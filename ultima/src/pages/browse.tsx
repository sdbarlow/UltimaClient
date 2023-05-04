import React from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Ferrari from '../../public/FerrariDiag.png'
import Mercedes from '../../public/MercedesDiag.png'
import Koenigsegg from '../../public/KoenigseggDiag2.png'

const Header = dynamic(() => import('../../components/header'), {
  ssr: false
});


function browse() {
  return (
  <>
    <Header/>
    <div className='flex flex-col justify-center w-full bg-black overflow-hidden' style={{ height: `calc(100vh - 6rem)` }}>
      <div id='display' className='flex flex-col h-5/6 w-screen bg-black'>
        <div id='pic-showcase' className='h-1/2 w-full bg-black'>

        </div>
        <div id='pic-platform' className='h-1/2 w-full bg-black'>
          <div id='platform' className='flex justify-center items-start'>
            <Image src={Ferrari} className='animate-slideout' alt='ferrari' quality="100" width={800} height={300}/>
            <Image className="absolute left-[90vw]" src={Mercedes} alt='mercedes' quality='100' width={700} height={300}/>
            <Image className='absolute left-[180vw]' src={Koenigsegg} alt='koenigsegg' quality='100' width={800} height={300}/>
          </div>
        </div>
      </div>
      <div id='footer' className='h-1/6 w-screen bg-white'>

      </div>
    </div>
  </>
  )
}

export default browse