import React, { useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Stack,
  FormGroup,
  FormLabel, // Import FormLabel from Material-UI
} from "@mui/material";
import HomeImage from "../../utility/assets/images/home.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

const Locations = () => {
  const history = useNavigate(); // Initialize useHistory hook

  const formik = useFormik({
    initialValues: {
      location: "",
      store: "",
    },
    validationSchema: Yup.object({
      location: Yup.string().required("Location is required"),
      store: Yup.string().required("Store is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
     
    },
  });
  useEffect(() => {
    const handleNavigate = () => {
      if (formik.values.location && formik.values.store) {
        history("/picker");
      }
    };
    handleNavigate();
  }, [formik.values.location, formik.values.store,history]);
  
  return (
    <Box my={4} textAlign="center">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <img src={HomeImage} alt="homeImage" height={40} />
        </Grid>
      </Grid>
      <Grid my={6}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2} sx={{ width: 300, margin: "0 auto" }}>
            <Autocomplete
              id="location"
              freeSolo
              options={top100Films.map((option) => option.name)}
              value={formik.values.location}
              onChange={(event, value) =>
                formik.setFieldValue("location", value)
              }
              onBlur={formik.handleBlur("location")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Location"
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
              )}
            />
            <Autocomplete
              id="store"
              options={top100Films.map((option) => option.name)}
              sx={{ width: 300 }}
              value={formik.values.store}
              onChange={(event, value) => formik.setFieldValue("store", value)}
              onBlur={formik.handleBlur("store")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Store"
                  error={formik.touched.store && Boolean(formik.errors.store)}
                  helperText={formik.touched.store && formik.errors.store}
                />
              )}
            />
            <Grid item xs={12} sm={6} marginBottom={3}>
              <FormGroup>
                <FormLabel sx={{ marginRight: "200px" }}>Around You</FormLabel>
                <iframe
                  id="google-map"
                  width="300"
                  height="100"
                  title="dat"
                  style={{ border: "0", borderRadius: "10px" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/@28.6621696,77.266944,11z?entry=ttu"
                ></iframe>
              </FormGroup>
            </Grid>
          </Stack>
          {/* <Box mt={2}>
            <button type="submit">Submit</button>
          </Box> */}
        </form>
      </Grid>
    </Box>
  );
};

export default Locations;

const top100Films = [
  {
    id: 1,
    name: "New York City",
    latitude: 40.7128,
    longitude: -74.006,
    country: "United States",
  },
  {
    id: 2,
    name: "London",
    latitude: 51.5074,
    longitude: -0.1278,
    country: "United Kingdom",
  },
  {
    id: 3,
    name: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
    country: "France",
  },
  {
    id: 4,
    name: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
    country: "Japan",
  },
  {
    id: 5,
    name: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
    country: "Australia",
  },
  {
    id: 6,
    name: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
    country: "Brazil",
  },
  {
    id: 7,
    name: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
    country: "Egypt",
  },
  {
    id: 8,
    name: "Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
    country: "Russia",
  },
  {
    id: 9,
    name: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
    country: "Germany",
  },
  {
    id: 10,
    name: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
    country: "Italy",
  },
];
