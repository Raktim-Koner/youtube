import SideBarItems from "./SideBarItems";
import { Link } from "react-router-dom";

const SideBar =()=>{
    return(
        <div className="h-80 w-1/5 bg-gray-400">
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/watch">Watch</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/demo">Demo</Link></li>
            </ul>
            <SideBarItems/>
        </div>
    )
}

export default SideBar;