import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import WomenImage from "../utility/assets/images/woman.png";
import "../utility/assets/css/Header.css"
const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Stack direction="row" spacing={2} className={classes.actionContainer} my={3}>
        <Box className={classes.cardContainer}>
          <Avatar alt="Remy Sharp" src={WomenImage} className={classes.avatar} />
          <Box border={3} borderColor={"#34eba1"} width={150} height={50} sx={{"display":"flex", 
          justifyContent:"center", alignItems:"center", boxShadow: "inset 0 0 3px rgba(0,0,0,0.5)" }}>
            <Typography fontSize={25} fontWeight={50} className={`${classes.title} poppins-thin`} >
              DISA
            </Typography>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    actionContainer: {
      justifyContent: "center",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative", 
    },
    avatar: {
      position: "absolute",
      top: 15, 
      zIndex: 1, 
    },
    title: {
      letterSpacing: `.3em !important`, // Adjust the spacing as needed
    },
  })
);

export default Header;
