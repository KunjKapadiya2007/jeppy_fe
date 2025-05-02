import React from 'react';
import {Box, Typography, Button, useTheme} from '@mui/material';
import img from '../../assets/home/heroSection/0b644f6836da58b9315ff1f2cf1a46e43de00d6f.png';

function HeroSection() {

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: "unset"},
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 6,
                py: 8,
                background: {
                    sm: `linear-gradient(to right, ${theme.palette.yellow} 60%, ${theme.palette.saffron} 40%)`,
                    xs: `linear-gradient(to bottom , ${theme.palette.yellow} 60%, ${theme.palette.saffron} 40%)`
                },
                height: '100vh',
            }}
        >

            <Box sx={{flex: 1 , display: 'flex', alignItems: {xs:'center' , sm:"unset"} , flexDirection:"column"}}>
                <Typography variant="h3"
                            sx={{
                                fontWeight: 800,
                                fontSize: {md: "64px", sm: "48px", xs: "32px"},
                                color: "#172600",
                                textAlign: {xs:"center" , sm:"unset"},
                                mt:{xs:4 , sm:"unset"}
                            }}>
                    Crave the Crunch.
                </Typography>
                <Typography variant="body1" sx={{
                    fontSize: {md: "24px", sm: "20px", xs: "16px"},
                    color: "#000",
                    lineHeight: '32px',
                    py: {sm:4 , xs:2},
                    textAlign: {xs:"center" , sm:"unset"},
                }}>
                    From desk to travel, always ready to crunch.
                </Typography>
                <Box sx={{display: {xs: "flex", sm: "unset"}, justifyContent: "center", alignItems: "center"}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#E82B09',
                            color: '#fff',
                            p: {sm:"22px 32px" , xs:"15px 22px"},
                            fontWeight: 600,
                            fontSize: {md: "24px", sm: "20px", xs: "16px"},
                            textTransform: 'none',
                            borderRadius: '50px',
                            '&:hover': {
                                backgroundColor: '#c32e0f',
                            },
                        }}
                    >
                        Explore Snacks
                    </Button>
                </Box>
            </Box>

            <Box sx={{flex: 1, display: 'flex', justifyContent: 'start'}}>
                <Box
                    component="img"
                    src={img}
                    alt="Crunchy Snacks"
                    sx={{
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: {sm:'cover' , xs:"contain"},
                    }}
                />
            </Box>
        </Box>
    );
}

export default HeroSection;
