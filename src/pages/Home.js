import React from 'react'
import NavBar from '../components/NavBar'
import Navigation from '../components/Navigation'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = ({content,setContent,posts,setSearch,setSearchResults,search}) => {
  return (
    <main className='bg-white'>
        <NavBar setSearchResults={setSearchResults} posts={posts} setSearch={setSearch}search={search}/>
        <Navigation content={content} posts={posts} setContent={setContent} />
        <Carousel/>
        <Footer/>
    </main>
  )
}

export default Home