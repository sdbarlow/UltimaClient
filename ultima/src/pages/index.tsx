import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Header/>
  <div className='flex'>
  <div className='flex text-gray-900 flex-col w-screen border-2 border-black' style={{ height: `calc(100vh - 80px)` }}>
  <Image src='/LamborghiniLogo.png' alt="me" width="200" height="200"/>
  </div>
  <div className='flex text-gray-900 flex-col w-screen border-2 border-blue' style={{ height: `calc(100vh - 80px)` }}></div>
  </div>
 </>
  )
}
