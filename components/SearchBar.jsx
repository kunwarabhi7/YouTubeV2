import React,{useContext, useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import { SearchContext } from '../Context';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


const SearchBar = () => {
const {box,setBox} = useContext(SearchContext)
  const [search, setsearach] = useState('');

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
<div className='flex'>

         <input value={search} onChange={(e)=> setsearach(e.target.value)}  type="text" className='border border-gray-500 rounded-full w-[30rem] text-gray-400 rounded-r-none h-8 px-4 bg-black' placeholder='Search' />
<BsSearch onClick={getResult} className='text-white p-1  border-2 -ml-[2px] border-gray-500 rounded-full rounded-l-none' size={30} />  
</div>
      </form>
{/* {box.map((item)=>(
    <Link key={item.videoId} href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
    <Card  image={item.snippet.thumbnails.high.url}  title={item.snippet.title} channel={item.snippet.channelTitle} time={item.snippet.publishTime}  />
    </Link>
))} */}
  </>
  )
}

export default SearchBar
