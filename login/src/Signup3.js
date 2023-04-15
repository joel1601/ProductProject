// import React from 'react'
// import './style2.css';
// import gigleji from './gigleji.png'
// import { Formik } from 'formik';
// import * as Yup from 'yup'

// export default function Signup3() {
//   return (
//     <Formik
//     initialValues={{userName:"", password:"", email:"" }}
//     validationSchema={Yup.object({
//         userName: Yup.string()
//           .max(20, 'Must be 15 characters or less')
//           .required('Required'),
//         password: Yup.string()
//           .max(10, 'Must be 10 characters or less')
//           .required('Required'),
//         email: Yup.string().email('Invalid email address').required('Required'),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}>
//     {formik =>(
       
//         <div className="regform">
//             <figure>
//         <img src={gigleji} alt="gigleji" width="100px" height="50px"/>
//     </figure>
//     <h2>Sign Up</h2>
//   <form action="" onSubmit={formik.handleSubmit}></form>
//   <div className="input">
//     <label className="textlabel" htmlFor="userName" aria-required="true" aria-placeholder="enter your name" aria-describedby='required'>userName</label>
//     <input type="text" name="user name" id="user name" {...formik.getFieldProps('userName')}></input>
//     {formik.touched.userName && formik.errors.userName ? (
//             <div>{formik.errors.userName}</div>
//           ) : null}
//   </div>
//   <div className="input">
//     <label className="textlabel" htmlFor="password">password</label>
//     <input type="password" name="password" id="password" {...formik.getFieldProps('password')}></input>
//     {formik.touched.password && formik.errors.password ? (
//             <div>{formik.errors.password}</div>
//           ) : null}
//   </div>
//   <div className="input">
//     <label className="textlabel" htmlFor="email">email</label>
//     <input type="email" name="email" id="email" {...formik.getFieldProps('email')}></input>
//     {formik.touched.email && formik.errors.email ? (
//             <div>{formik.errors.email}</div>
//           ) : null}
//   </div>
//   <div className="radio">
//     <label htmlFor="radio">male</label>
//     <input type="radio" name="gender" id="male" value="male"></input>
//     <label htmlFor="radio">female</label>
//     <input type="radio" name="gender" id="female" value="female"></input>
// </div>
// <div className="button">
// <button type='submit'>register</button>
// </div>
// </div>

//     )}
// </Formik>
   
//   )
// }
