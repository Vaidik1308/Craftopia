import React from 'react'
import Fade from 'react-reveal/Fade';


const Footer = () => {
  return (
    <main className='flex justify-evenly items-center w-full h-fit bg-white pb-4 my-8' >
        <Fade left cascade >
            <section className='w-[15%] border-r-[1px] border-solid border-black flex flex-col justify-center items-center'>
                <h2 className=' w-[55%] flex font-[500] justify-center items-center text-[1.8rem]'>Trending</h2>
                <button className=' hover:scale-[1.04] duration-300 hover:bg-[#ffd1b69c] bg-[#FF5C009C] w-[65%] rounded-lg h-[40px] font-[600]' >View all</button>
            </section>
        </Fade>
        <Fade bottom cascade>

        <section className='flex w-[70%] justify-evenly' >
            <article className='w-[18%]'>
                <img className='w-full hover:scale-[1.09] duration-300' src={require('../assests/homePage/recent1.png')} alt="" />
            </article>
            <article className='w-[18%]'>
                <img className='w-full hover:scale-[1.09] duration-300' src={require('../assests/homePage/recent2.png')} alt="" />
            </article>
            <article className='w-[18%]'>
                <img className='w-full hover:scale-[1.09] duration-300' src={require('../assests/homePage/recent3.png')} alt="" />
            </article>
            <article className='w-[18%]'>
                <img className='w-full hover:scale-[1.09] duration-300' src={require('../assests/homePage/recent4.png')} alt="" />
            </article>
            
           
        </section>
        </Fade>
    </main>
  )
}

export default Footer