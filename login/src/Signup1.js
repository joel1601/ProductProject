import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useState } from 'react';
// import axios from "axios";
import * as Yup from 'yup'
import {Formik } from 'formik';

function Copyright(props) {  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// const validate = values => {
//   const formik.errors = {};

//   if (!values.firstName) {
//     formik.errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     formik.errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     formik.errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     formik.errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     formik.errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     formik.errors.email = 'Invalid email address';
//   }

//   return formik.errors;
// };


export default function SignUp() {

 
//     validationSchema:Yup.object({
//       firstName : Yup.string().max(15, 'Must be 15 character or less').required('required'),
//       lastName : Yup.string().max(20, 'Must be 20 character or less').required('required'),
//       email:Yup.string().email('Invaild email address').required('required'),
//       password: Yup.string().required('required')
// })
// })
//     const [ formData, setFormData] = useState({
//         firstName : '',
//         lastName : '',
//         email : '',
//         password : '',
// }); 
    

//     const  = (e) => {
//         const { name, value } = e.target
//         console.log( name,value);
//         setFormData({...formData,[name ]:value});
//     };

//     const saveData = async() => {
//         console.log('save Data', formData);
//        let response = await axios.post('http://localhost:8082/api/signup/create',formData);
//         console.log('responsed',response);        
//     };




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Formik
      initialValues={{
        firstName : '',
        lastName : '',
        email : '',
        password: '',
      }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .max(20, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      // validate,
      // onSubmit: values => {
      //   alert(JSON.stringify(values, null, 2));
      // },
    >
      {formik=>(
      <form>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <input
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...formik.getFieldProps('firstName')}
                  // value={firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div> )
              : null }

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              // onClick={saveData}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </form>
      )}
    </Formik>
  );
}