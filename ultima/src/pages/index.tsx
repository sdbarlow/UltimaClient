import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Header/>
      <div className='flex text-gray-900 bg-black h-screen flex-col w-screen animate-bodyshrink' style={{ height: `calc(100vh - 6rem)` }}>
      <Image className="animate-reveal brightness-125" src='/KoenigseggDiag.png' alt="me" width="1200" height="1200"/>
      </div>
  </>
  )
}
