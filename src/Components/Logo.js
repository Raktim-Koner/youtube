import React from 'react'
import { Link } from 'react-router-dom'

const Logo =()=>{
    return(
        <React.Fragment>
            <Link to="/">
                <img className="h-15 w-24 mx-2 my-2 mr-[16.2rem]" src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png" alt="youtube logo"/>
            </Link>
        </React.Fragment>

    )
}

export default Logo;