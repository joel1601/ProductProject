import React from "react";

export default function DiaryProduct() {
  return (
    <div className="bg-danger">
      <div className="container w-75 h-300 ">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-12 col-md-6 well well-sm">
            <div>
              <h1 className="heading pt-5">Diary Product</h1>
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
                    <td>milk</td>
                    <td>litre</td>
                    <td>₹40</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>butter</td>
                    <td>KG</td>
                    <td>₹160</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>cheese.</td>
                    <td>KG</td>
                    <td>₹600</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>ice cream</td>
                    <td>KG</td>
                    <td>₹200</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Curd</td>
                    <td>Litre</td>
                    <td>₹40</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Butter Milk</td>
                    <td>Litre</td>
                    <td>₹40</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Milk Powder</td>
                    <td>KG</td>
                    <td>₹100</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Ghee</td>
                    <td>Litre</td>
                    <td>₹400</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Milk Shake</td>
                    <td>Litre</td>
                    <td>₹400</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Rose Milk</td>
                    <td>Litre</td>
                    <td>₹40</td>
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
