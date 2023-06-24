import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Items from './components/Items';
import ItemCart from './pages/ItemCart';
import { useEffect } from 'react';
import { useState } from 'react';
// import axios from "axios";
import api from './api/data'


function App() {
  const [content,setContent] = useState(localStorage.getItem("content"));
  const [posts,setPosts] = useState([])
  const [searchResults,setSearchResults] = useState([])
  const [search ,setSearch] = useState('')
  // const [isLoading,setIsLoading] = useState(true)
  
  useEffect(() => {
    const fetchPost = async (url) => {
      try{
        // setPosts([])
        const response = await api.get(`/${url}`);
        if(response && response.data){
          // console.log(response.data);
          setPosts(response.data);
        }
      }catch(err){
        if(err.response){
          //Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchPost(content);
  },[setPosts,content])

  useEffect(() => {    
      localStorage.setItem("content",content)
  },[content])

  useEffect(() => {
    const filteredResult = posts.filter((post) => ((post.productname).toLowerCase()).includes(search.toLowerCase()) || ((post.sellername).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResult.reverse());
    },[search,posts]);
  return (
    <div className="App font-Inter font-[400]">
      {/* <Login/> */}
      <Routes>
        <Route path='/'  element={<Home  search={search} setSearch={setSearch} searchResults={searchResults} setSearchResults={setSearchResults} posts={searchResults} content={content} setContent={setContent} />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/items/kitchen' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
        <Route path='/items/kitchen/:id' element={<ItemCart posts={posts} />} />

        <Route path='/items/homedecor' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
        <Route path='/items/furniture' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
        <Route path='/items/fashion' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
        <Route path='/items/dailyneeds' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
        <Route path='/items/stationery' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
        <Route path='/items/toysandgames' element={<Items content={content} setContent={setContent} posts={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
