import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'    
export default function MeatProduct() {
  const [data,setData]=useState([]);
    useEffect (() => {
      axios.get('http://localhost:8082/api/productlists/1')
        .then(res => {
            if(res.data===1){
              setData(res.data)
            }
            else{
              console.log("can not enter the value")
            }
            console.log("Getting data from:",res.data)
            setData(res.data)}).catch(err => console.log(err))         
    },[]);

    const arr = data.map((data, index) => {
        return(
            <tr>
            <td>{index[1]}</td>
            <td>{data.ProductName}</td>
            <td>{data.ProductRate}</td>
            <td>{data.Unit}</td>
          </tr>
        )
        })
  return (
    <div className="bg-danger">
      <div className="container w-75 h-300 ">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-12 col-md-6 well well-sm">
            <div>
              <h1 className="heading pt-5">Meat Product</h1>
            </div>
            <div className="col-md-06 pt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                {arr}
                {/* <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Egg</td>
                    <td>Dozen</td>
                    <td>₹120</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Chicken</td>
                    <td>KG</td>
                    <td>₹160</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mutton</td>
                    <td>KG</td>
                    <td>₹600</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Fish</td>
                    <td>KG</td>
                    <td>₹200</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Prawn</td>
                    <td>KG</td>
                    <td>₹500</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Crab</td>
                    <td>KG</td>
                    <td>₹400</td>
                    <td> </td>
                  </tr>
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import { useEffect, useState } from 'react';
// import axios from 'axios'

// export default function Getform() {
//     const [data,setData]=useState([]);
//     useEffect (() => {
//         axios.get('http://localhost:8080/api/meatproducts/')
//         .then(res => {
//             console.log("Getting data from:",res.data)
//             setData(res.data)}).catch(err => console.log(err))
         
//     },[])

//     const arr = data.map((data, index) => {
//         return(
//             <tr>
//             <td>{data.id}</td>
//             <td>{data.title}</td>
//             <td>{data.body}</td>
//           </tr>
//         )
//     })
//   return (
//     <div className="App">
//     <h1>Getform from the Api</h1>
//     <table>
//   <tr>
//     <th>ID</th>
//     <th>Title</th>
//     <th>Body</th>
//   </tr>
//   {arr}
// </table>    
//     </div>
//   )
// }
