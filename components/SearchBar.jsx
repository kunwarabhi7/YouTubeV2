import React,{useState} from 'react'
import { BsSearch } from 'react-icons/bs'


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


const SearchBar = () => {
const [searach, setsearach] = useState()
const [box,setBox] = useState([]);
    
const getResult = () => {
    fetch('https://youtube-v31.p.rapidapi.com/search?q=rajput&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div className='flex'>
         <input type="text" className='border border-gray-500 rounded-full w-[30rem] text-gray-400 rounded-r-none h-8 px-4 bg-black' placeholder='Search' />
<BsSearch onClick={getResult} className='text-white p-1  border-2 -ml-[2px] border-gray-500 rounded-full rounded-l-none' size={30} />    </div>
  )
}

export default SearchBar
