import React from 'react'
import { Fade } from 'react-reveal'
import { useParams } from 'react-router-dom'

const ItemCart = ({posts}) => {
    const {id} = useParams()
    
    const post = posts.find((post) => (post.productid.toString()) === id.toString())
    // console.log(post)
    const discount = Math.round((post.sellingprice / post.costprice)*100 ,2)

  return (
    <main className='w-full flex justify-center items-center h-[100vh]'>
        <section className='p-4 w-[75%] h-fit bg-white justify-start  rounded-lg flex shadow-lg' >
          <Fade left cascade >
            <article className='w-[45%] rounded-lg p-2'>
              <img className='rounded-l-lg' src={post.imageurl} alt="" />
            </article>
          </Fade>
          <Fade bottom cascade >
            <article className='w-[50%] flex flex-col justify-start items-start p-2 gap-1' >
              <p className='text-[#FD7D61] text-[2.1rem] font-[700] mt-4 w-full text-left' >{post.productname}</p>
              <p className='text-[1.3rem] font-[700]' >By{post.sellername}</p>
              <p className='text-left text-[1.1rem]' >{post.productdetails}</p>
              <p className='flex items-center justify-start gap-1'>
                  <img className='w-[10%] mb-1' src={require('../assests/items/start.png')} alt="" />
                  <img className='w-[10%] mb-1' src={require('../assests/items/start.png')} alt="" />
                  <img className='w-[10%] mb-1' src={require('../assests/items/start.png')} alt="" />
                  <img className='w-[10%] mb-1' src={require('../assests/items/start.png')} alt="" />
                  <span>{post.rating}</span>
              </p>
              <div className='w-full flex justify-start items-end gap-1  h-fit'>
                <p className='text-[1.8rem] text-red-500 mb-2'>{discount}%</p>
                <p className='text-[2.8rem]'>₹{post.sellingprice}</p>
              </div>
              <p className='text-[1.1rem] flex justify-start relative bottom-[15px]' >M.R.P: <del>₹{post.sellingprice}</del> </p>
              <div className='w-full flex justify-start gap-4 text-white font-bold'>
                <button className='bg-[#F24E1E] w-[25%] h-[35px] rounded-lg' >Buy Now</button>
                <button className='bg-[#F97F5B] w-[25%] h-[35px] rounded-lg'> Add To Cart</button>
              </div>
            </article>
          </Fade>
        </section>
    </main>
  )
}

export default ItemCart