import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Watch = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const videoId = queryParams.get("v");

  // const [videoData, setVideoData] = useState(null);
  const [searchParams]=useSearchParams();
  console.log(useSearchParams());
  const videoId=searchParams.get("v");
  console.log(videoId);



  if (!videoId) return <div>No video selected</div>;

  return (
    <div className="p-4 w-full">
       <div className="w-full flex justify-center">
        <iframe
          className="rounded-lg"
          width="80%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          allowFullScreen
        >
        </iframe>
      </div> 
    </div>
  );
};

export default Watch;