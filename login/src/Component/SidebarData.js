import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData =[
{
    title:"Home",
    path:"/home",
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
},
{
    title:"Product",
    path:"/productCategory",
    icon: <FaIcons.FaCartPlus/>,
    cName: 'nav-text'
},
{
    title:"Report",
    path:"/Report",
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
},
{
    title:"Team",
    path:"/team",
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
},
{
    title:"Messages",
    path:"/message",
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
}
]