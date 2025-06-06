import { useEffect, useState } from "react";
import Button from "./Button";
import Cards, { CardsHOC } from "./Cards";
import { API_URI_YT } from "../Utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const InnerContainer =()=>{
    const [apiData,setApiData]=useState([]);
    useEffect(()=>{
        getApi()
    },[])
    const getApi=async ()=>{
        const responce=await fetch(API_URI_YT)
        const youtubeResponce=await responce.json()
        // console.log(youtubeResponce)
        setApiData(youtubeResponce.items) //replace by 50 items
    }
    if(!apiData.length) return <Shimmer/>
    return(
        <div className=" w-4/5 bg-slate-200">
            <Button/>
            <div className="flex flex-wrap">
                {/* {apiData.length?<CardsHOC data={apiData[0]}/>:""} */}
                {apiData.length && <CardsHOC data={apiData[0]}/>}
                {
                    apiData.map((items)=>{
                        return(
                            
                            <Link to={"/watch?v="+items.id}>
                            <Cards data={items} key={items.id}/> 
                            </Link>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default InnerContainer;