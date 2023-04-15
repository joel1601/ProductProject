import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useState } from 'react';
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(10, "Must be 10 character or less")
    .required("required"),
  lastName: Yup.string()
    .max(10, "Must be 10 character or less")
    .required("required"),
  email: Yup.string().email("invalid email address").required("required"),
  password: Yup.string().required("required"),
  conformpassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password"), null], "password is must match"),
});

export default function SignUp5() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conformpassword:"",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      let response = await axios.post(
        "http://localhost:8082/api/signups/create",
        formik.values
      );
      console.log(response);
      setSubmitting(false);
      navigate("/");
    },
  });

  //     // const onChange = (e) => {
  //         const { name, value } = e.target
  //         console.log( name,value);
  //         setFormData({...formData,[name ]:value});
  //     };

  //     const saveData = async() => {
  //         console.log('save Data', formData);
  //        let response = await axios.post('http://localhost:8082/api/signup/create',formData);
  //         console.log('responsed',response);
  //     };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  placeholder="First Name"
                  id="firstName"
                  label="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && formik.errors.firstName}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  autoFocus
                />
                {/* <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="firstName"
                  /> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && formik.errors.lastName}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  autoComplete="family-name"
                />
                {/* <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="lastName"
                  /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  autoComplete="email"
                  placeholder="email"
                />
                {/* <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="email"
                  /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                  placeholder="password"
                  autoComplete="new-password"
                />
                {/* <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="password"
                  /> */}
                  
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conformpassword"
                  label="conformPassword"
                  type="password"
                  id="password"
                  value={formik.values.conformpassword}
                  onChange={formik.handleChange}
                  error={formik.touched.conformpassword && formik.errors.conformpassword}
                  helperText={formik.touched.conformpassword && formik.errors.conformpassword}
                  placeholder="conform-password"
                  autoComplete="new-password"
                />
                {/* <ErrorMessage
                    component="label"
                    className="form-label text-danger"
                    name="password"
                  /> */}
                  
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={()=>{
              //   navigate("/")
              // }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
