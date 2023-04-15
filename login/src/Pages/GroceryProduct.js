import React from "react";

export default function GroceryProduct() {
  return (
    <div className="bg-danger">
      <div className="container w-75 h-300 ">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-12 col-md-6 well well-sm">
            <div>
              <h1 className="heading pt-5">Grocery Product</h1>
            </div>
            <div className="col-md-06 pt-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Rice</td>
                    <td>KG</td>
                    <td>₹60</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cooking Oil</td>
                    <td>Litre</td>
                    <td>₹120</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Dal</td>
                    <td>KG</td>
                    <td>₹100</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Sugar</td>
                    <td>KG</td>
                    <td>₹45</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Aata</td>
                    <td>KG</td>
                    <td>₹40</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Turmeric</td>
                    <td>KG</td>
                    <td>₹200</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Coffee</td>
                    <td>KG</td>
                    <td>₹250</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Tea</td>
                    <td>KG</td>
                    <td>₹250</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Dry Fruits Mix</td>
                    <td>KG</td>
                    <td>₹850</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Green Peas</td>
                    <td>KG</td>
                    <td>₹150</td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

