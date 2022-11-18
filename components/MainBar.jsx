import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import Card from './Card';
import ReactPlayer from 'react-player';


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
      <div className='grid md:grid-cols-4'>
      {videos.map((video)=>(
        <div key= {video.id}>
          <ReactPlayer controls width="320px" height='240px'  url={`https://www.youtube.com/watch?v=${video.id.videoId} ` }/>
          <Card image={video.snippet.thumbnails.high.url}  title={video.snippet.title} channel={video.snippet.channelTitle} time={video.snippet.publishTime} />
          
        </div>
      ))}
    </div>
  )
}


export default MainBar
