
import MainBar from "../components/MainBar";
import SideBar from "../components/SideBar";
import { SearchContext, SearchContext2 } from "../Context";
import { useContext } from "react";
import Card from "../components/Card";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function Home() {
  const { box, setbox } = useContext(SearchContext);


  return (
    <div className="flex">
      <SideBar />
    <div>
    {
      <div className="grid md:grid-cols-4">
        {box.map((item) => (
          <div
          key={item.videoId}
          // href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
        
          >

            <ReactPlayer controls width="320px" height='240px'  url={`https://www.youtube.com/watch?v=${item.id.videoId} ` }/>
            <Card
              image={item.snippet.thumbnails.high.url}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              time={item.snippet.publishTime}
            /> 
          </div>
        ))}
      </div>
    }
    <MainBar />
  
    </div>
    </div>
  );
}
