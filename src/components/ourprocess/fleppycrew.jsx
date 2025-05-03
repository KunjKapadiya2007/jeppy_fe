import React from 'react';
import {Box, useTheme} from "@mui/material";
import Img1 from '../../assets/images/ourprocess/ManufacturingProcessSteps/Fleppycrew.jpg'

function FleppyCrew() {
    const theme = useTheme();
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh', // Optional: centers vertically if needed
                    px: 2
                }}
            >
                <Box
                    component="img"
                    src={Img1}
                    alt="Snacks assortment"
                    sx={{
                        width: '100%',
                        maxWidth: '972px',
                        maxHeight: '648px',
                        height: 'auto',
                        objectFit: 'cover',
                        // borderRadius: 2
                    }}
                />
            </Box>
            <Box sx={{
                textAlign: 'center',
                py:5,
                fontSize: {lg:'64px',md:'40px',xs:'28px'},
                color:`${theme.palette.saffron}`,
                fontWeight: '700',
            }}>
                The Fleppy crew is the heart of <br/>
                our promise to you.
            </Box>
        </Box>

    );
}

export default FleppyCrew;