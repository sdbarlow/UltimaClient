import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Header/>
      <div className='flex justify-center items-end text-gray-900 bg-black h-screen flex-col w-screen animate-bodyshrink' style={{ height: `calc(100vh - 6rem)` }}>
        <div className='flex w-3/5 pr-16'>
          <img className="animate-drive brightness-125 object-cover hidden" src='/KoenigseggSide.png' alt="me"/>
          <img className="brightness-125 object-cover" src='/KoenigseggDiag.png' alt=""/>
        </div>
        </div>
      <div className="w-screen h-screen bg-black">Hello</div>
  </>
  )
}
