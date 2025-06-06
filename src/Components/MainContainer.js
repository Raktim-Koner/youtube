import { Outlet } from "react-router-dom";
import InnerContainer from "./InnerContainer";
import SideBar from "./SideBar";

const MainContainer =()=>{
    return(
        <div className="flex">
            
            <SideBar/>
            <Outlet/>
        </div>
    )
}

export default MainContainer;