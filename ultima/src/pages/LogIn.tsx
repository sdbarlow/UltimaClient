import React from 'react'
import { AiOutlineRollback } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import useUltimaStore from '../../store/store'

function LogIn() {
    interface FormData {
        email: string;
        password: string;
      }
      
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
   const setUser = useUltimaStore((state) => state.setUser);
   const router = useRouter()

   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    } as FormData);
  };

  function logIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData)
    fetch('https://ultima-appp.onrender.com/login', {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) {
          res.json()
          .then((data) => {
            console.log('hello')
            setUser({ data });
            router.push('/');
          });
        }
      });
  }
  

  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='w-full max-w-sm'>
            <div className='bg-white rounded-md shadow-lg p-6'>
            <h2 className='form-head text-2xl font-bold mb-4 flex items-center'>
                <Link className="group" href="/">
                    <AiOutlineRollback className="h-6 w-6 group-hover:h-8 group-hover:w-8" />
                </Link>
                <span className="flex-1 mr-6 text-center">
                    Log In
                </span>
                </h2>
                <form onSubmit={(e) => logIn(e)} className='space-y-4'>
                    <div className='flex flex-col'>
                        <label className='form-text mb-1' htmlFor='name'>Email</label>
                        <input
                            id='email'
                            name='email'
                            onChange={handleInputChange}
                            value={formData.email}
                            className='border border-gray-400 p-2 rounded-md focus:border-dashed focus:outline-none focus:border-black'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='form-text mb-1' htmlFor='name'>Password</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            onChange={handleInputChange}
                            value={formData.password}
                            className='border border-gray-400 p-2 rounded-md focus:border-dashed focus:outline-none focus:border-black'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                        type='submit'
                        className='form-submit bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black hover:shadow-inner hover:border-2 hover:border-black focus:outline-none focus:border-black'
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LogIn