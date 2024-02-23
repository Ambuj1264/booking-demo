import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, FormGroup, FormLabel } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { createStyles, makeStyles } from "@mui/styles";

const validationSchema = Yup.object().shape({
  userId: Yup.string()
    .required("UserId is required")
    .min(6, "UserId must be at least 6 characters")
    .max(20, "UserId must not exceed 20 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must not exceed 20 characters"),
});

const Login = () => {
  const spacehandler = (event: any) => {
    if (event.which === 32 && event.target.value === "") {
      event.preventDefault();
    }
  };

  const navigate = useNavigate();
  const classes = useStyles();
  const {
    values: valueData,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      try {
        console.log(values);
        navigate("/selectLocations");
      } catch (error) {
        console.log("Something went wrong");
      }
    },
  });

  return (
    <div className={classes.container}>
      <form action="" onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          className="grid-input-field"
          alignItems="center"
          direction="column"
        >
          <Grid item xs={12} sm={6} marginBottom={3}>
            <FormGroup>
              <FormLabel sx={{ marginBottom: "3px" }}>UserId</FormLabel>
              <TextField
                placeholder="Enter UserId"
                id="userId"
                name="userId"
                fullWidth
                variant="outlined"
                onChange={handleChange}
                onKeyDown={spacehandler}
                value={valueData.userId}
                error={touched.userId && Boolean(errors.userId)}
                helperText={touched.userId && errors.userId}
                onBlur={handleBlur}
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12} sm={6} marginBottom={3}>
            <FormGroup>
              <FormLabel sx={{ marginBottom: "3px" }}>Password</FormLabel>
              <TextField
                id="password"
                placeholder="Enter Password"
                fullWidth
                variant="outlined"
                name="password"
                type="password"
                onChange={handleChange}
                onKeyDown={spacehandler}
                value={valueData.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onBlur={handleBlur}
              />
            </FormGroup>

            <div className={classes.buttonSections}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#34eba1",
                  borderRadius: "50%",
                  width: "50px",
                  height: "57px",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Go
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: "60px",
    },
    buttonSections: {
      display: "flex",
      justifyContent: "flex-end",
      width: "inherit",
      marginTop: "20px",
    },
  })
);
export default Login;
