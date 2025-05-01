import React from 'react';
import {Box, Button} from "@mui/material";
import Img1 from "../../assets/images/home/About/Mask group.png"

function AboutUs() {
    return (
        <Box>
<Box sx={{
    fontSize: "36px",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
}}>
    About Us
</Box>
            <Box sx={{
                paddingTop: "90px",
                display: {lg:"flex",xs:'unset'},
            }}>
                <Box sx={{
                    pl:5
                }}>
                    <Box sx={{
                        fontSize:"48px",
                        fontWeight: 700,
                        lineHeight: "100%",
                        mt:{lg:0,xs:4},
                        display: {xs:"flex",lg:'unset'},
                        justifyContent:{xs:"center",lg:"unset"},
                    }}>
                        The Story Behind <br/>
                        the Crunch
                    </Box>
                    <Box sx={{
                        fontSize:"24px",
                        fontWeight: 500,
                        lineHeight: "34px",
                        pt:4,
                        width:"93%"
                    }}>
                        The demand for snacks is rising around the world, snack producing companies are in fierce competition to match this demand. Our company JAYANT  SNACKS AND BEVERAGES PVT. LTD. is a leading manufacturer and exporter of ready to fry Papad Snacks. It was founded in the year 1987 in the city of Rajkot in the western state of India. The company popularly known as “JEPPY” and “WOW” has 30 + years of extensive experience in the field of Snack Papad production. Today JEPPY is a prime leader in the Snacks Papad industry in India.
                    </Box>
                    <Button sx={{
                        border:"1px solid #000",
                        borderRadius:"50px",
                        // padding: "px",
                        color: "#000",
                        py:1,
                        px:3,
                        mt:3,
                        fontSize:"15px",
                        fontWeight: 600,
                    }}>
                        Read More
                    </Button>
                </Box>
                <Box sx={{
                    display: {xs:"flex",lg:'unset'},
                    justifyContent:{xs:"center",lg:"unset"},
                }}>
                    <img src={Img1} alt="Description" style={{ width: '600px', height: '600px' }} />
                </Box>

            </Box>
        </Box>
    );
}

export default AboutUs;