import { Button, FormGroup, FormLabel, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftImage from "../../utility/assets/images/left-arrow.png"
import RightImage from "../../utility/assets/images/right-arrow.png";
import HomeImage from "../../utility/assets/images/home.png"
const Picker = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const navigate = useNavigate();
    const handleButtonClick = (value:any) => {
        setSelectedButton(value);
    };
    useEffect(()=>{
       if(selectedButton && selectedButton ==="Track Top 20 SKUs"){
        navigate("/top20");
       }
    },[selectedButton,navigate])
    return (
        <>
            <FormGroup>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "50px" }}>
                    <FormLabel sx={{ marginBottom: "1rem" ,color:'black'}}>What do you want to do today</FormLabel>
                    <Button
                        variant={'contained'}
                        onClick={() => handleButtonClick('Track Top 20 SKUs')}
                        style={{marginTop:"10px", marginBottom: '10px', width: "250px", height:"50px" , borderRadius: "20px", backgroundColor: selectedButton === 'Track Top 20 SKUs' ? '#4caf50' : '#fff', color: selectedButton === 'Track Top 20 SKUs' ? '#fff' : '#000', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                        Track Top 20 SKUs
                    </Button>
                    <Button
                        variant={'contained'}
                        onClick={() => handleButtonClick('Track Competition Price')}
                        style={{marginTop:"10px", marginBottom: '10px',  width: "250px", height:"50px" , borderRadius: "20px", backgroundColor: selectedButton === 'Track Competition Price' ? '#4caf50' : '#fff', color: selectedButton === 'Track Competition Price' ? '#fff' : '#000', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                       Track Competition Price
                    </Button>
                    <Button
                       variant={'contained'}
                        onClick={() => handleButtonClick('Visibility Reporting')}
                        style={{ marginTop:"10px",marginBottom: '10px', width: "250px", height:"50px" ,borderRadius: "20px", backgroundColor: selectedButton === 'Visibility Reporting' ? '#4caf50' : '#fff', color: selectedButton === 'Visibility Reporting' ? '#fff' : '#000', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                       Visibility Reporting
                    </Button>
                    {/* <p>Selected Button: {selectedButton}</p> */}    
                </div>
            </FormGroup>
            <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "30px",
          width:"98%"
        }}
        spacing={4}
      >
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/selectLocations" style={{ marginRight: "120px" }}>
            {" "}
            <img src={LeftImage} alt="leftImage" style={{ width: "30px", }} />{" "}
          </Link>
          <Link to="/" style={{marginRight: "120px"}}>
            <img src={HomeImage} alt="HomeImage" style={{ width: "30px",  }} />
          </Link>
          <Link to="#">
            <img src={RightImage} alt="RightImage" style={{ width: "30px",}} />
          </Link>
        </div>
      </Grid>
        </>
    );
}

export default Picker;
