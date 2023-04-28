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
            <div className="flex justify-center items-center w-screen h-screen overflow-hidden bg-black">
            <div className="w-full max-w-3xl max-h-fit h-full flex justify-center flex-col items-center ">
              <input type="radio" name="slider" id="item-1"/>
              <input type="radio" name="slider" id="item-2"/>
              <input type="radio" name="slider" id="item-3"/>
            <div className="cards">
              <label className="absolute w-3/5 h-full left-0 right-0 m-auto transition-transform duration-500 hover:cursor-pointer" htmlFor="item-1" id="item-1-photo">
                <img className="w-full h-full rounded-xl object-cover" src="/LamborghiniLogo.png" alt="song"/>
              </label>
              <label className="absolute w-3/5 h-full left-0 right-0 m-auto transition-transform duration-500 hover:cursor-pointer" htmlFor="item-2" id="item-2-photo">
                <img className="w-full h-full rounded-xl object-cover" src="/PorscheLogo.png" alt="song"/>
              </label>
              <label className="absolute w-3/5 h-full left-0 right-0 m-auto transition-transform duration-500 hover:cursor-pointer" htmlFor="item-3" id="item-3-photo">
                <img className="w-full h-full rounded-xl object-cover" src="/KoenigseggLogo.png" alt="song"/>
              </label>
            </div>
            <div id="player" className="w-full max-w-3xl max-h-fit h-1/5 flex justify-center flex-col items-center ">
              <input type="radio" name="text-slider" id="item-text-1" />
              <input type="radio" name="text-slider" id="item-text-2"/>
              <input type="radio" name="text-slider" id="item-text-3"/>
            <div className="texts">
              <label className="absolute w-3/5 h-10 right-0 m-auto transition-transform duration-500 hover:cursor-pointer" id="item-1-text" htmlFor="item-1">
                <h1 className="text-white text-4xl object-cover">Lamborghini</h1>
              </label>
              <label className="absolute w-3/5 h-10 right-0 m-auto transition-transform duration-500 hover:cursor-pointer" id="item-2-text" htmlFor="item-2">
                <h1 className="text-white text-4xl object-cover">Porsche</h1>
              </label>
              <label className="absolute w-3/5 h-10 right-0 m-auto transition-transform duration-500 hover:cursor-pointer" id="item-3-text" htmlFor="item-3">
                <h1 className="text-white text-4xl object-cover">Koenigsegg</h1>
              </label>
            </div>
                </div>
              </div>
            </div>
    </>
  )
}
