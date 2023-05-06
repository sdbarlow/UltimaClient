import React from 'react'
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../../components/header'), {
    ssr: false
  });
  

function inspect() {
  return (
    <>
    <Header/>
    <div>inspect</div>
    </>
  )
}

export default inspect