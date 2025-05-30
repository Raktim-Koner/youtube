import SideBarItems from "./SideBarItems";

const SideBar =()=>{
    return(
        <div className="h-80 w-1/5 bg-gray-400">
            
            <ul>
                <li>Home</li>
                <li>Sports</li>
                <li>Newes</li>
            </ul>
            <SideBarItems/>
        </div>
    )
}

export default SideBar;