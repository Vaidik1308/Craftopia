import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Navigation = ({content,setContent,posts}) => {
  return (
    <Fade left cascade>
        <main className=' mt-12 w-full h-[115px] shadow-lg flex justify-center items-center gap-6'>
            <Link onClick={() => setContent(localStorage.setItem('kitchen'))}  className='hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2' to={`/items/kitchen`}>
                <img className='w-[30%]  hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic1.png')} alt="" />
                <p>Kitchen</p>
            </Link>
            <Link onClick={() => setContent('homedecor')} className='hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to={`/items/homedecor`}>
                <img className='w-[40%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic2.png')} alt="" />
                <p className='w-full'>Home Decor</p>
            </Link>
            <Link onClick={() => setContent('furniture')} className='  hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to='/items/furniture'>
                <img className='w-[40%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic3.png')} alt="" />
                <p>Furniture</p>
            </Link>
            <Link onClick={() => setContent('fashion')} className='  hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to='/items/freelancing'>
                <img className='w-[25%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic4.png')} alt="" />
                <p>FreeLancing</p>
            </Link>
            <Link className='  hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to='/items/dailyneeds' onClick={() => setContent('dailyneeds')} >
                <img className='w-[35%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic5.png')} alt="" />
                <p>Daily Needs</p>
            </Link>
            <Link className='  hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to='/items/stationery' onClick={() => setContent('stationery')}>
                <img className='w-[35%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic6.png')} alt="" />
                <p>Stationery</p>
            </Link>
            <Link onClick={() => setContent('fashion')} className='  hover:bg-[#feede4] rounded-sm w-[8%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to='/items/fashion'>
                <img className='w-[35%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic7.png')} alt="" />
                <p>Fashion</p>
            </Link>
            <Link className='  hover:bg-[#feede4] rounded-sm w-[8.2%] p-2 duration-300 flex flex-col justify-center  items-center gap-2 ' to='/items/toysandgames' onClick={() => setContent('toysandgames')}>
                <img className='w-[30%] hover:scale-[1.09] duration-300' src={require('../assests/homePage/pic8.png')} alt="" />
                <p className='w-full'>Toys & Games</p>
            </Link>
        </main>
    </Fade>
  )
}

export default Navigation