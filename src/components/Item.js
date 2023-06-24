import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


const Item = ({item}) => {
    const discount = Math.round((item.sellingprice / item.costprice)*100 ,2)
    // console.log(discount);
  return (
    <>
    <Fade bottom >
        <Link to={`/items/kitchen/${item.productid}`}>
            <article className='w-[90%] h-fit p-2 rounded-lg bg-white flex justify-start items-start shadow-lg'>
              <div className='w-[45%] pr-4'>
                <img src={item.imageurl} className='rounded-lg' alt="" />
              </div>
              <div className='w-[55%] flex flex-col justify-start items-start'>
                <p className=' w-full text-left flex flex-col' > <span className='font-[600] text-[#FD7D61]' > {item.productname} </span>
                <span>By {item.sellername}</span>
                </p>
                <p className='text-[1.8rem]' >₹{item.costprice} <span className='text-[12px]' >{discount}% off</span></p>
                <p><del>₹{item.sellingprice}</del> Original Prize </p>
                <p className='flex items-center justify-start gap-1'>
                  <img className='w-[20%] mb-1' src={require('../assests/items/start.png')} alt="" />
                  <span>{item.rating}</span>
                </p>
                <p>Get it by Tomorrow, 25 June</p>
              </div>
            </article>
        </Link>

    </Fade>
    </>
  )
}

export default Item