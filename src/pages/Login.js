import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Login = () => {
  return (
    <main className='flex justify-center items-center w-full h-[100vh]'>
        <Fade left cascade>
        <section className='w-[44%] relative' >
            <img className='w-[65%]' src={require('../assests/loginPage/sidePic.png')} alt="" />
            <img src={require('../assests/loginPage/icon.png')} className='absolute w-[45%] top-[125px] left-[70px]  ' alt="" />
        </section>
        </Fade>
        <Fade bottom cascade >
        <section className='flex flex-col w-[20%] gap-6'>
            <article className='w-full'>
                <img className='w-[100%]' src={require('../assests/loginPage/logo.png')} alt="" />
            </article>
            <article className='w-full'>
                <form className='w-full flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
                    <div className='w-full'>
                        <h1 className=' w-full text-[28px] drop-shadow-lg'>Log In</h1>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start'>
                        <label  htmlFor="email">Email</label>
                        <input  type="email" className='h-[35px] outline-none border-[1px] border-solid border-black p-2 w-[100%] rounded-md' name="" id="email" />
                    </div>
                    <div className='w-full flex flex-col justify-start items-start'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className='h-[35px] outline-none border-[1px] border-solid border-black p-2 w-[100%] rounded-md' name="" id="email" />
                    </div>
                    
                    <div className='w-full'>
                        <a className='text-[#414141] underline' href="">Forgot Password?</a>
                    </div>
                    <div className='w-full'>
                        <Link className='text-[#414141] underline' to="/signup">New Here? Create a free account!</Link>
                    </div>
                    <div className=' rounded-sm w-full bg-[#FF9D66] h-[5vh] flex justify-center items-center'>
                        <button className='text-white w-full h-[5vh] font-[500]'>Sign In</button>
                    </div>
                    <div className=' rounded-sm w-full bg-[#55ADFF] h-[5vh] flex justify-center items-center'>
                        <div className='bg-white w-[35px] flex justify-center items-center h-[25px] text-[1.2rem] rounded-sm'>
                            <FcGoogle/>
                        </div>
                        <button className='text-white w-[70%] h-[5vh] font-[500]'>Sign up with Google </button>
                    </div>
                    <div></div>
                </form>
            </article>
        </section>
        </Fade>
    </main>
  )
}

export default Login