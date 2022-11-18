
import MainBar from "../components/MainBar";
import SideBar from "../components/SideBar";
import { SearchContext, SearchContext2 } from "../Context";
import { useContext } from "react";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
  const { box, setbox } = useContext(SearchContext);


  return (
    <div className="flex">
      <SideBar />
    <div>
    {
      <div className="grid grid-cols-4">
        {box.map((item) => (
          <Link
          key={item.videoId}
          // href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
          href={`/${item.id.videoId}`}
          >
            <Card
              image={item.snippet.thumbnails.high.url}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              time={item.snippet.publishTime}
            />
          </Link>
        ))}
      </div>
    }
    <MainBar />
  
    </div>
    </div>
  );
}
