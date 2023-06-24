import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import {BsFillCartCheckFill} from 'react-icons/bs'
// import React from 'react';
import Fade from 'react-reveal/Fade';
 
const NavBar = ({setSearch,search}) => {
  return (
    <Fade top cascade>

    <main className='w-full flex justify-center items-center bg-[#FF9D66] h-[55px] gap-20 text-white shadow-l fixed z-10 top-0' >
        <article className='w-[12%]'>
            <Link to='/'>
              <img className='w-[100%]' src={require('../assests/loginPage/logo.png')} alt="" />
            </Link>
        </article>
        <article className='w-[30%]' >
          <SearchBar setSearch={setSearch} search={search}/>
        </article>
        <article className='flex w-[35%] gap-8'>
          <select className='bg-[#FF9D66] outline-none rounded-lg ' >
            <option className='bg-[#FF9D66]' >
              <Link href="">User</Link>
            </option>
            <option className='bg-[#FF9D66]' >
              <Link href="">Admin</Link>
            </option>
            <option className='bg-[#FF9D66]' >
              <Link href="">User</Link>
            </option>
          </select>
          <Link className='flex justify-center items-center' href="">Become a Seller</Link>
          <select className='bg-[#FF9D66] outline-none rounded-lg ' >
            <option className='bg-[#FF9D66]' >
              More
            </option>
            <option className='bg-[#FF9D66]' >
              Seller
            </option>
            <option className='bg-[#FF9D66]' >
              Buyer
            </option>
            
          </select>
          <div className='flex justify-center items-center gap-2'>
            <BsFillCartCheckFill className='text-[#FF5C00] text-[1.8rem]' />
            <Link href="">Cart</Link>
          </div>
        </article>
    </main>
    </Fade>
  )
}

export default NavBar