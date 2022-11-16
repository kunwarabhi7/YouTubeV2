import Image from 'next/image';
import React,{useState,useEffect} from 'react'
import Card from './Card';



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



const MainBar = () => {
  const [videos,setVideos] = useState([]);


const getData = () => { 
  fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options)
  .then(response => response.json())
  .then(response => setVideos(response.items))
  .catch(err => console.error(err));
}
  useEffect(()=>{
getData()
  },[])
  
  


    return (
      <div className='grid grid-cols-4'>
      {videos.map((video)=>(
        <div key={video.id}>
          {/* <Card image={} /> */}
        <div>{video.snippet.title}</div>
        <div>{video.snippet.channelTitle}</div>
        <Image alt={video.snippet.title} src={video.snippet.thumbnails.high.url} width='40' height={40} />
        <div>{video.snippet.publishTime}</div>
        </div>
      ))}
    </div>
  )
}


export default MainBar
