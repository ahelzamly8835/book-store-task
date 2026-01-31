
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; 
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/ui/Footer';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "At least 3 characters"),

    firstName: Yup.string()
    .required("First name is required")
    .min(2, "At least 2 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "At least 2 characters"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),

  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});


const SignupPage = () => {
  const navigate = useNavigate();
  const handlerigester = async (values) => {
    try {
      const data = {
        username: values.username,
        firstName: values.firstName,  
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
  
      await axios.post(
        "http://localhost:1337/api/auth/local/register",
        data
      );
  
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };
  



  return (
    <>
    <div className='min-h-screen pt-10 md:pt-0 flex flex-col bg-[#F5F5F5]'>
    <button className='lg:hidden cursor-pointer flex items-center gap-2 ml-6'><MdArrowBackIosNew />Create account</button>
      <Navbar />
      <div className='flex justify-center items-center px-4 md:py-10 py-8'>
    <Formik initialValues={{username:"",lastName:"",firstName:"",email:"",password:"",ConfirmPassword:""}}  validationSchema={SignupSchema} onSubmit={handlerigester}>
        <Form className="form flex flex-col w-full max-w-xl">
                <div className="mobile-only md:hidden">
                <label htmlFor="name" className='capitalize p-1'>name
                </label>

         <Field type="text" name="username" className=' bg-white w-full mb-3 px-3 py-2 sm:px-4 rounded-lg border border-transparent focus:border-mainColor focus:outline-none transition-all text-sm sm:text-base' placeholder="John Smith" />
                <ErrorMessage name="username" component={"p"} className="text-red-500 text-sm ml-1"/>
                </div>
                
            <div className="md:flex hidden gap-4">
                <label htmlFor="">
                    <p className='capitalize p-1'>first name</p>
        <Field name="firstName" type="text" className='bg-white mb-3 focus:outline-none px-4 w-70 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="John" />
                <ErrorMessage name="firstName" component={"p"} className="text-red-500 text-sm ml-1"/>
                </label>
                <label htmlFor="">
                    <p className='capitalize p-1'>Last Name</p>
        <Field name="lastName" id="lastName" type="text" className='bg-white mb-3 focus:outline-none px-4 w-70 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="Smith" />
                <ErrorMessage name="lastName" component={"p"} className="text-red-500 text-sm ml-1"/>
                </label>
            </div>

          <p className='text-[#222222] my-2 text-[18px] ml-1'>Email</p>
          <Field name="email" type="text" className='bg-white mb-3 focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder="example@gmail.com" />
          <ErrorMessage name="email" component={"p"} className="text-red-500 text-sm ml-1"/>
          <p className='text-[#222222] my-2 text-[18px] ml-1'>Password</p>
          <Field name="password" type="password" className='bg-white mb-3 focus:outline-none px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder='Enter password' />
          <ErrorMessage name="password" component={"p"} className="text-red-500 text-sm ml-1"/>

          <p className='text-[#222222] my-2  text-[18px] ml-1'>Confirm password</p>
          <Field name="ConfirmPassword" type="password" className='bg-white focus:outline-none mb-3 px-4 py-2 rounded-lg border border-transparent focus:border-mainColor transition-all' placeholder='Enter password' />
          <ErrorMessage name="ConfirmPassword" component={"p"} className="text-red-500 text-sm ml-1"/>

          <div className="justify-between items-center flex ml-1 mt-3 text-sm md:text-base">
            <div className="checkbox flex gap-2 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <p>Agree with <span className='text-mainColor'>Terms & Conditions</span></p>
            </div>
          </div>
            
          
          <button type='submit' className="btn cursor-pointer bg-mainColor flex justify-center items-center mt-8 rounded-lg py-2.5 text-white font-bold transition-opacity hover:opacity-90">
          Sign Up
          </button>
          
          <div className="log-in flex flex-col mx-auto mt-8">
            <p className='text-center'>Already have an account? <span className='text-mainColor cursor-pointer'>Login</span></p>
            <span className='mx-auto mt-6 md:mt-10 text-[#00000080]'>or</span>
          </div>
          

          <div className="btns mb-10 md:mb-20 mx-auto  flex md:flex-col mt-10 gap-4">
            <button className='bg-white focus:outline-none md:px-32 md:py-3 px-6 py-5 rounded-lg flex justify-center items-center gap-4 cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors'> 
              <span><FaFacebook className='text-[#1877F2] text-xl'/></span> <span className='hidden md:flex'>Sign with</span>Facebook
            </button>
            <button className='bg-white focus:outline-none md:px-32 md:py-3 px-6 py-5 rounded-lg  flex justify-center items-center gap-4 cursor-pointer border border-gray-100 hover:bg-gray-50 transition-colors'> 
              <span><FcGoogle className='text-xl' /></span><span className='hidden md:flex'>Sign with</span>Google
            </button>
          </div>
        </Form>
      </Formik>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignupPage





