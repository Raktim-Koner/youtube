import Hamburger from "./Hamburger";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import UserIcon from "./UserIcon";

const Head =()=>{
    return(
        <div className="flex items-center">
            <Hamburger/>
            <Logo/>
            <SearchBox/>
            <UserIcon/>
        </div>
    )
}

export default Head;