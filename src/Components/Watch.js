import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Watch = () => {
  const [vId,setVId]=useState([])

  const [searchParams]=useSearchParams();
  console.log(useSearchParams());
  const videoId=searchParams.get("v");
  console.log(videoId);

const isIdValid=async()=>{
  const responce=await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyDAJlc9xSgznn66Mxbb99NjkvRI-yAX7Zs`)
  const jsonResponce=await responce.json()
  // console.log(jsonResponce)
  setVId(jsonResponce.items)
}

useEffect(()=>{
  isIdValid()
},[])

// console.log(isIdValid())
// const validVideoId=/^[a-zA-Z0-9_-]{11}$/.test(videoId);

  if (!videoId) return <div>No video selected</div>;
  if (!vId.length) return <div className="text-center">This video isn't availavle any more</div>;

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