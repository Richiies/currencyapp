import React from 'react'
import {Link} from "react-router-dom"


import "./index.css"

 function Header(props) {
     

    return (
        <div>
            <nav className = "nav-item">
                <div >
                <Link to = "/"><h1 className ="logo">CV</h1></Link>
                </div>
                
                    
                <div className="max-navitems">
                    
                    
                    <ul >
                        <li><Link to ="/login">Logout</Link></li>
                        <li><Link to ="/about">About App</Link></li>
                        <li><a href="#/">Contact Us</a></li>
                    </ul>
                    

                </div>
                
            </nav>
        </div>
    )
}

export default Header