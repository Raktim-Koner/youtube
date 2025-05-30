const Cards = ({ data }) => {
  return (
    <div className="mx-4 my-2 w-72"> 
      <img src={data?.snippet?.thumbnails?.medium?.url} alt="thumbnail" className="rounded-xl w-full h-40 object-cover"/>
      <h3 className="mt-2">{data?.snippet?.title}</h3>
      <h5 className="">{data?.snippet?.channelTitle}</h5>
    </div>
  );
}
export const CardsHOC=({data})=>{
  return(
    <div className="border border-black"><Cards data={data}/></div>
  )
}
export default Cards;
