import React,{useContext, useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import { SearchContext, SearchContext2 } from '../Context';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


const SearchBar = () => {
const {box,setBox} = useContext(SearchContext)
const {search,setSearch} = useContext(SearchContext2)


  const getResult = (e) => {
  e.preventDefault();
    fetch(`https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`, options)
      .then(response => response.json())
      .then(response => setBox(response.items))
      .catch(err => console.error(err));
  }

  return (
    <>
      <form onSubmit={getResult}>
<div className='flex relative text-white'>

         <input value={search} onChange={(e)=> setSearch(e.target.value)}  type="text" className='border text-white border-gray-500 rounded-full w-40 md:w-[30rem]  rounded-r-none h-8 md:px-4 pl-2 bg-black' placeholder='Search' />
<BsSearch onClick={getResult} className='absolute -top-1 -right-1 cursor-pointer text-white p-1  border-2 -ml-[2px] border-gray-500 rounded-full rounded-l-none' size={30} />  
</div>
      </form>

  </>
  )
}

export default SearchBar
