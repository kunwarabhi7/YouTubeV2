import React,{useState,useEffect} from 'react'
import Card from './Card';


const MainBar = () => {
  // const [videos,setVideos] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  useEffect(()=>{
    fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  },[])
  
  


    return (
      <div className='grid grid-cols-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}


export default MainBar
