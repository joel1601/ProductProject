import React from "react"
import Meat from "../img/meat.jpg";
import Diary from "../img/diary.jpg";
import Drinks from "../img/drink.jpg";
import Grocery from "../img/grocery.jpg";
import HealthCare from "../img/healthcare.jpg";
import Skincare from "../img/skincare.jpg";
export const ProductData = [
    {
        title:"Meat",
        path:"/productCategory/Meat",
        // icon: <AiIcons.AiFillHome/>,
        img:
        <img src={Meat} width="100%" height={50}></img>,
        cName: 'nav-text'
    },
    {
        title:"Diary",
        path:"/productCategory/Diary",
        // icon: <FaIcons.FaCartPlus/>,
        img:<img src={Diary} width="100%" height={60}></img>,
        cName: 'nav-text'
    },
    {
        title:"Drinks",
        path:"/productCategory/Drinks",
        // icon: <IoIcons.IoIosPaper/>,
        img:<img src={Drinks} width="100%" height={55}></img>,
        cName: 'nav-text'
    },
    {
        title:"Grocery",
        path:"/productCategory/Grocery",
        // icon: <IoIcons.IoMdPeople/>,
        img:<img src={ Grocery} width="100%" height={55}></img>,
        cName: 'nav-text'
    },
    {
        title:"HealthCareProduct",
        path:"/productCategory/HealthCareProduct",
        // icon: <FaIcons.FaEnvelopeOpenText/>,
        img:<img src={HealthCare} width="100%" height={55}></img>,
        cName: 'nav-text'
    },
    {
        title:"SkinCareProduct",
        path:"/productCategory/SkinCareProduct",
        // icon: <FaIcons.FaEnvelopeOpenText/>,
        img:<img src={Skincare} width="100%" height={55}></img>,
        cName: 'nav-text'
    }
]