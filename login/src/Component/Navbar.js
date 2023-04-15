import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'

export default function Navbar() {
    const [sidebar,setsidebar] = useState(false);

    const showSidebar = () =>{
        setsidebar(!sidebar);
    }
  return (
    <div>
        <IconContext.Provider value={{color:"#fff"}}>
      <div className='navbar'>
        <Link to="#" className="menu-bars">
         <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toogle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )

            })}
        </ul>
      </nav>
      </IconContext.Provider>
    </div>
  )
}
