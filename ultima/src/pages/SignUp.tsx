import { useFormik } from "formik";
import * as yup from "yup";
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { AiOutlineRollback } from "react-icons/ai";
import Link from "next/link";


function SignUp() {
    const router = useRouter();
    const [refreshPage, setRefreshPage] = useState(false);

    useEffect(() => {
        console.log("FETCH! ");
        fetch("https://ultima-appp.onrender.com/users")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }, [refreshPage]);
    
    const formSchema = yup.object().shape({
        first_name: yup.string().required("Must enter a first name").max(15),
        last_name: yup.string().required("Must enter a last name").max(15),
        email: yup.string().email("Invalid email").required("Must enter email"),
        password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
        ),
      });
    
    const formik = useFormik({
        initialValues: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('first_name', values.first_name);
            formData.append('last_name', values.last_name);
            formData.append('email', values.email);
            formData.append('password', values.password);
          fetch('https://ultima-appp.onrender.com/signup', {
            method: "POST",
            body: formData,
          }).then((res) => {
            if (res.status == 201) {
                router.push('/')
            }
          });
        },
      });

  return (
        <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='w-full max-w-sm'>
            <div className='bg-white rounded-md shadow-lg p-6'>
            <h2 className='form-head text-2xl text-center font-bold mb-4' style={{ display: 'flex', alignItems: 'center' }}>
              <Link className="group" href="/"><AiOutlineRollback className="h-6 w-6 group-hover:h-8 group-hover:w-8" /></Link>
              <span className="ml-24 group-hover:ml-16" >Sign Up</span>
            </h2>
            <form onSubmit={formik.handleSubmit} className='space-y-4'>
                <div className='flex flex-col'>
                <label className='form-text mb-1' htmlFor='name'>First Name</label>
                <input
                    id='first_name'
                    name='first_name'
                    onChange={formik.handleChange}
                    value={formik.values.first_name}
                    className='border border-gray-400 p-2 rounded-md focus:border-dashed focus:outline-none focus:border-black'
                />
                <p className='text-red-700 text-sm mt-1'>{formik.errors.first_name}</p>
                </div>

                <div className='flex flex-col'>
                <label className='form-text mb-1' htmlFor='last_name'>Last Name</label>
                <input
                    id='last_name'
                    name='last_name'
                    onChange={formik.handleChange}
                    value={formik.values.last_name}
                    className='border border-gray-400 p-2 rounded-md focus:border-dashed focus:outline-none focus:border-black'
                />
                <p className='text-red-700 text-sm mt-1'>{formik.errors.last_name}</p>
                </div>

                <div className='flex flex-col'>
                <label className='form-text mb-1' htmlFor='email'>Email Address</label>
                <input
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className='border border-gray-400 p-2 rounded-md focus:border-dashed focus:outline-none focus:border-black'
                />
                <p className='text-red-700 text-sm mt-1'>{formik.errors.email}</p>
                </div>

                <div className='flex flex-col'>
                <label className='form-text mb-1' htmlFor='password'>Password</label>
                <input
                    id='password'
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className='border border-gray-400 p-2 rounded-md focus:border-dashed focus:outline-none focus:border-black'
                />
                <p className='text-red-700 text-sm mt-1'>{formik.errors.password}</p>
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

export default SignUp