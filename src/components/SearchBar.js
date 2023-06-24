import React,{useEffect} from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({setSearch,search,setSearchResults,posts}) => {
  // useEffect(() => {
  //   const filteredResult = posts?.filter((post) => ((post.productname).toLowerCase()).includes(search.toLowerCase()) || ((post.sellername).toLowerCase()).includes(search.toLowerCase()));

  //     setSearchResults(filteredResult?.reverse())
  //   },[search,posts,setSearchResults]);
  return (
    <main className='w-full text-black relative' >
        <BsSearch className='absolute top-[8px] left-[5px] text-[#A3A3A3]' />
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='pl-[28px] w-full h-[33px] rounded-lg shadow-lg outline-none p-2' placeholder='Search here... ' />
    </main>
  )
}

export default SearchBar