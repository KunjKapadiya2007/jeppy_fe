import React from 'react';
import { Box, Typography } from "@mui/material";

function Snackingvision() {

    const sectionTitle = "EVERYTHING YOU NEED";
    const mainHeading = "We turn your snacking vision into reality";
    const description = "At Fleppy, our process is built to deliver — from idea to final pack. Whether it’s standard shapes or custom blends, we combine smart sourcing, cutting-edge manufacturing, and intelligent packaging to create snack solutions that are scalable, safe, and snack-worthy.";

    return (
        <>
            <Box sx={{
                backgroundColor: "rgba(242, 138, 30, 1)",
                py: 8,
                color: "white",
                display: 'flex',
                flexDirection: 'column',  // Stack elements vertically
                alignItems: 'center',     // Center content horizontally
                justifyContent: 'center', // Center content vertically
                         // Full viewport height to enable vertical centering
            }}>
                <Box sx={{ maxWidth: 'md', textAlign: 'center', px:{xs:3, md:0, }}}>

                    <Typography
                        variant="subtitle1"
                        style={{
                            fontWeight: 300,
                            fontSize: { md: "24px", sm: "20px", xs: "16px" },
                            lineHeight: '34px',
                            letterSpacing: '-2%',
                        }}
                    >
                        {sectionTitle}
                    </Typography>

                    <Typography
                        variant="h5"
                        style={{
                            fontWeight: 700,
                            fontSize:   {md: "55px", sm: "39px", xs: "28px"},
                            lineHeight: {md: "65px", sm: "49px", xs: "37px"},
                            letterSpacing: '0%',
                        }}
                    >
                        {mainHeading}
                    </Typography>

                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: 500,
                            fontSize: { md: "24px", sm: "20px", xs: "16px" },
                            lineHeight: '34px',
                            letterSpacing: '-2%',
                        }}
                    >
                        {description}
                    </Typography>

                </Box>
            </Box>
        </>
    );
}

export default Snackingvision;
