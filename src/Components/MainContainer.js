import InnerContainer from "./InnerContainer";
import SideBar from "./SideBar";

const MainContainer =()=>{
    return(
        <div className="flex">
            
            <SideBar/>
            <InnerContainer/>
        </div>
    )
}

export default MainContainer;