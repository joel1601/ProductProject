import React from "react";

export default function HealthCareProduct() {
  return (
    <div className="bg-danger">
      <div className="container w-75 h-300 ">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-12 col-md-6 well well-sm">
            <div>
              <h1 className="heading pt-5">HealthCare Product</h1>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
