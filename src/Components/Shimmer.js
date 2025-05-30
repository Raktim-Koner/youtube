import ShimmerCards from "./ShimmerCards";

const Shimmer=()=>{
    const shimmerItems=[1,2,3,4,5,6,7,8,9]
    return(
        <div className="flex flex-wrap w-4/5">
            {shimmerItems.map((items,index)=>{
                return(
                    <ShimmerCards key={index}/>

                )
            })}
        </div>
    )
}

export default Shimmer;