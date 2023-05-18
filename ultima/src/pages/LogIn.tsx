import React from 'react'
import { AiOutlineRollback } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import useUltimaStore from '../../store/store'
import {useSession, signIn} from 'next-auth/react'


function LogIn() {
  const { data: session, status } = useSession();

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

  const generateRandomPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    
    // Generate a random character from the characters string
    const getRandomCharacter = () => {
      const randomIndex = Math.floor(Math.random() * characters.length);
      return characters.charAt(randomIndex);
    };
    
    // Generate a random password
    for (let i = 0; i < 8; i++) {
      password += getRandomCharacter();
    }
    
    // Check if the password meets the requirements, regenerate if necessary
    if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/[0-9]/)) {
      password = generateRandomPassword();
    }
    
    return password;
  };

  useEffect(() => {
    if (status === 'authenticated' && session?.user && session?.user.name && session?.user.email) {
      const { name, email } = session.user;
      
      const [first_name, last_name] = name.split(' ');

      const randomPassword = generateRandomPassword();

        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('password', randomPassword);
  
        fetch('https://ultima-appp.onrender.com/signup', {
          method: 'POST',
          body: formData,
        })
          .then((res) => {
            if (res.status === 201) {
              res.json().then((data) => {
                setUser(data);
                router.push('/');
              });
            } else if (res.status === 400) {
              const formData = new FormData();
              formData.append('email', email);
              fetch('https://ultima-appp.onrender.com/logingoogle', {
                method: "POST",
                body: formData
              })
                .then((res) => {
                  if (res.status === 200) {
                    res.json()
                    .then((data) => {
                      setUser({ data });
                      router.push('/');
                    });
                  }
                });
            }
          })
    }
  }, [session, status, router]);

  const handleSignInWithGoogle = () => {
    signIn('google');
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
                    <div className=" justify-center mt-4">
                      <h1 className='text-center'>OR</h1>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={handleSignInWithGoogle}
                        className="google-signup-button bg-white text-black hover:text-sky-400 hover:border-sky-400 py-2 px-4 rounded-md border-2 border-black focus:outline-none"
                      >
                        Log In with Google
                        <FcGoogle className="inline-block ml-4"/>
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LogIn