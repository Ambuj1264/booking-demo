import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import OfficeImage from "../../../utility/assets/images/office-building.png"
import axios from "axios";

const Top20 = () => {
    const classes = useStyles();
    const [apiData, setApiData]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setApiData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Box>
                <Grid className={classes.container}>
                    <img src={OfficeImage} alt="Images" className={classes.upperImageSections}/> 
                    <Typography variant="h6" color={"#34eba1"}>Track Top 20 SKUs</Typography>
                </Grid>
                <Grid className={classes.AllImages}> 
                    {
                        apiData?.map((value:any, index:number)=>{
                            return(
                                <img 
                                    src={value?.image} 
                                    alt={`data`+index} 
                                    className={classes.image} 
                                />
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Top20;

const useStyles = makeStyles(() =>
  createStyles({
    container: {
        marginTop: "20px",
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    upperImageSections: {
        borderRadius: "50%",
        width: "50px",
        height: "50px"
    },
    AllImages: {
        marginTop: "35px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent:"center",
        margin: "0 30px 0 30px"
    },
    image: {
        border: "2px solid black",
        width: "150px",
        height: "150px",
        '@media (max-width:600px)': {
            width: "100px",
            height: "100px",
        }
    }
  })
);
