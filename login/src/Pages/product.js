import React from "react";
// import Meat from "../img/meat.jpg";
// import Diary from "../img/diary.jpg";
// import Drinks from "../img/drink.jpg";
// import Grocery from "../img/grocery.jpg";
// import HealthCare from "../img/healthcare.jpg";
// import Skincare from "../img/skincare.jpg";
// import Products from "../img/food.jpg"
import { ProductData } from "../Component/ProductData";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
export default function product() {
  return (
    <div className="bg-success postion-absolute">
        <Navbar/>
      <div className="container w-75 h-700">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-12 col-md-6 well well-sm">
            <div style={{color:"white"}}> <h1 className="heading pt-5">Product Cartegory</h1></div>
            <div className="col-md-06 pt-5">
            <table className="table table-bordered border-danger w-50 h-300">
              <thead className="heading" style={{color:"white"}}> 
                <tr className="pt-5">
                  <th scope="col">image</th>
                  <th scope="col">Cartegory Name</th>
                  <th scope="col">Remarks</th>
                </tr>
              </thead>
              <tbody>
              {ProductData.map((item, index)=>{
                        return(
                            <tr>
                            <td key={index} className={item.cName}>{item.img}</td>
                            <td className="rowdetail" style={{textdecoration:"none", color:"black"}}>
                                <Link style={{color:"Black",textDecoration:"none"}} to={item.path}>
                                <span>{item.title}</span>
                                </Link>
                            </td>
                            </tr>
                        )

                    })}
                {/* // <tr>            
                //   <td scope="row" width={100}>
                //     <img src={Meat} width="100%"></img>
                //   </td>
                //   <td><a href="/Meat">Meat</a></td>
                //   <td> </td>
                // </tr>
                // <tr>
                //   <td scope="row" width={100}>
                //     <img src={Diary} width="100%"></img>
                //   </td>
                //   <td><a href="/Diary">Diary</a></td>
                //   <td> </td>
                // </tr>
                // <tr>
                //   <td scope="row" width={100}>
                //     <img src={Drinks} width="100%" height={80}></img>
                //   </td>
                //   <td><a href="/Drink">Drink</a></td>
                //   <td> </td>
                // </tr>
                // <tr>
                //   <td scope="row" width={100}>
                //     <img src={Grocery} width="100%"></img>
                //   </td>
                //   <td><a href="/Grocery">Grocery</a></td>
                //   <td> </td>
                // </tr>
                // <tr>
                //   <td scope="row" width={100}>
                //     <img src={HealthCare} width="100%"></img>
                //   </td>
                //   <td><a href="/HealthCare">HealthCare</a></td>
                //   <td> </td>
                // </tr>
                // <tr>
                //   <td scope="row" width={100}>
                //     <img src={Skincare} width="100%"></img>
                //   </td>
                //   <td><a href="/SkinCare">SkinCare</a></td>
                //   <td> </td>
                // </tr> */}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
