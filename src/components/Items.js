import React from 'react'
import NavBar from '../components/NavBar'
import SearchBar from './SearchBar'
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom';
import Item from './Item';


const Items = ({posts,setContent,content}) => {
  return (
    <main className='w-full'>
      <NavBar/>

        <Fade left >
          <section className='mt-20' >
            <h1 className='text-[2.1rem]  font-[700] text-left pl-2' >{content && content.toString().toUpperCase()}</h1>
          </section>
        </Fade>
        <section className='ml-4 w-full grid grid-cols-1 lg:grid-cols-3 gap-6' >
          {posts.map((item) => (
            <Item key={item.productid} item={item} />
          ))}
        </section>

    </main>
  )
}

export default Items