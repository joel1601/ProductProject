import { Field, Form, Formik, ErrorMessage, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
// import { useState } from "react";
import axios from "axios";
// // import gigbackground from './gigbackground.jpg

// export default function Signup4() {
//     const formik = useFormik({
//         initialValues:{
//             yourName:'',

//         }
//     })
//   return (
//     <div>
//         const formik = useformik
//       <section className="vh-150" style={{backgroundColor:'#eee'}}>
//   <div className="container h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-lg-12 col-xl-7" style={{backgroundColor:'palegreen'}}>
//         <div className="card text-black" style={{borderRadius: "25px"}}>
//           <div className="card-body p-md-5"style={{backgroundColor:'blue',color:'white'}}>
//             <div className="row justify-content-center">
//               <div className="col-md-10 col-lg-6 col-xl-12 order-2 order-lg-1">

//                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//                 <form className="mx-1 mx-md-6">

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="text" id="form3Example1c" className="form-control" name='YourName' required aria-describedby='form3Example1c'/>
//                       <label className="form-label" htmlFor="form3Example1c">Your Name</label>
//                     </div>
//                   </div>

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="email" id="form3Example3c" className="form-control" name='email' required aria-describedby='form3Example3c'/>
//                       <label className="form-label" htmlFor="form3Example3c">Your Email</label>
//                     </div>
//                   </div>

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4c" className="form-control" name='password' required aria-describedby='form3Example4c'/>
//                       <label className="form-label" htmlFor="form3Example4c">Password</label>
//                     </div>
//                   </div>

//                   <div className="d-flex flex-row align-items-center mb-4">
//                     <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                     <div className="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4cd" className="form-control" name='repassword' required aria-describedby='form3Example4cd'/>
//                       <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
//                     </div>
//                   </div>

//                   <div className="form-check d-flex justify-content-center mb-5">
//                     <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                     <label className="form-check-label" htmlFor="form2Example3">
//                       I agree all statements in <a href="#!">Terms of service</a>
//                     </label>
//                   </div>

//                   <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                     <button type="button" className="btn btn-primary btn-lg">Register</button>
//                   </div>

//                 </form>

//               </div>
//               {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                 <img src={gigbackground} className="img-fluid" alt="Sample image"/>

//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

export default function SignUp4() {
  const formik= useFormik({
    initialValues:{
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    conformpassword: "",
}});

  // const handleChange = (event) => {
  //   // const { name, value } = e.target;
  //   // console.log(name, value);
  //   const {name,value}=event.target.name;
  //   setFormData({ ...formData, [name]: value });
    

  // };

  // const saveData = async () => {
  //   console.log("save Data", formData);
  //   let response = await axios.post("http://localhost:8082/api/signups/create",formData);
  //   console.log("responsed", response);
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // let response = await axios.post("http://localhost:8082/api/signups/create",formData);
  //   console.log({
  //     // email: data.get('email'),
  //     // password: data.get('password'),
  //     response: data.get('response')
  //   });
  // };
  // const details={
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   conformpassword: "",
  // }
  return (
    <div className="container h-100">
      <div className="row justify-content-center signup-form bg-success">
        <div className="col-xs-12 col-sm-12 col-md-6 well well-sm">
          {/* <Formik render={props => <ContactForm {...props} />} /> */}
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              conformpassword: "",
            }}

           
            validationSchema={Yup.object({
              firstname: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("required"),
              lastname: Yup.string()
                .max(10, "Must be 10 character or less")
                .required("required"),
              email: Yup.string()
                .email("invalid email address")
                .required("required"),
              password: Yup.string().required("required"),
              conformpassword: Yup.string()
                .required("required")
                .oneOf([Yup.ref("password"), null], "password is must match"),
            })}
            onSubmit={ async (values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
               let response = await axios.post("http://localhost:8082/api/signups/create",formik.values);
              console.log(response);
              setSubmitting(false);
            }}
            
          >
            <Form>
              <h1 className="heading pt-3">Product Category</h1>
              <div className="row pt-3">
                <div className="col-md-6">
                  <Field
                    className="form-control"
                    name="firstname"
                    type="text"
                    placeholder="FirstName"
                  //  onChange={handleChange}
                  ></Field>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="firstname"
                  />
                </div>
                <div className="col-md-6">
                  <Field
                    className="form-control"
                    name="lastname"
                    type="text"
                    placeholder="LastName"
                    // onChange={handleChange}
                  ></Field>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="lastname"
                  />
                </div>
                <div className="col-md-12 pt-3">
                  <Field
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  ></Field>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="email"
                  />
                </div>
                <div className="col-md-12 pt-3">
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  ></Field>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="password"
                  ></ErrorMessage>
                </div>
                <div className="col-md-12 pt-3">
                  <Field
                    className="form-control"
                    name="conformpassword"
                    type="password"
                    placeholder="Re-Enter your password"
                  ></Field>
                  <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="conformpassword"
                  ></ErrorMessage>
                </div>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg" href="/">
                  Register
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
