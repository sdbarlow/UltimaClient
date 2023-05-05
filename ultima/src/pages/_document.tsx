import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html id='html' className='m-0 p-0 scroll-smooth' lang="en">
      <Head />
      <body id='body' className='m-0 p-0'>
        <div className='relative overflow-x-hidden overflow-y-hidden'>
        <Main />
        <NextScript />
        </div>
      </body>
    </Html>
  )
}
