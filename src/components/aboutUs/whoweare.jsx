import React from 'react';
import {Box, Typography, Grid, Container} from '@mui/material';
import palletimg from "../../assets/images/aboutus/pallets.jpg";

const WhoWeAre = () => {
    return (<>
        <Box sx={{
            position: 'relative',
        }}>
            <Box sx={{
                backgroundColor: 'rgba(242, 138, 30, 1)',
            }}>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: {md: "36px", sm: "32px", xs: "28px"},
                    textAlign: 'center',
                    color: 'white',
                    py:7
                }}>Who we are</Typography>
                <Container maxWidth="xl" sx={{ py: {
                        xs: 0,
                        sm: 3,
                        md: 4,
                        lg: 5,
                        xl: 5,
                    },}}>
                    <Grid container spacing={5}>
                        <Grid item size={{xs: 12, lg: 6}}>
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: {xs: '16px', sm: '20px', md: '24px'},
                                    lineHeight: 1.7,
                                    color: 'white',

                                }}
                            >
                                At Jayant Snacks and Beverages Pvt. Ltd., we’ve been shaping the future of Papad
                                Snacks since 1987. Popularly known by our brands JEPPY and WOW, we are a leading
                                manufacturer and exporter of ready-to-fry and air-roast Papad Snacks, headquartered in
                                Rajkot, India.
                            </Typography>
                        </Grid>

                        <Grid item size={{xs: 12, lg: 6}}>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    fontSize: {xs: '32px', sm: '36px', md: '40px'},
                                    textAlign: {xs: 'center', lg: 'right'},
                                    color: 'white',
                                    mt: {
                                        md: 0,
                                        lg: 10,
                                        xl: 10,
                                    },
                                }}
                            >
                                Established in 1987
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'block',
                        lg: 'none', // Hide on large screens and above
                        xl: 'none',
                    },
                }}
            >
                <Box
                    component="img"
                    src={palletimg}
                    alt="Pallets"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
            </Box>

            <Box>
                <Container maxWidth="xl" sx={{ py: {
                        xs: 3,
                        sm: 3,
                        md: 4,
                        lg: 5,
                        xl: 5,
                    },}}>
                    <Grid container spacing={5}>
                        <Grid item size={{xs: 12, md: 6}}>
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: {xs: '16px', sm: '20px', md: '24px'},
                                marginBottom: '24px',


                            }}>With 30+ years of expertise, we’ve mastered the art of creating delicious and innovative
                                snacks from cereals, lentils, vegetables, and multigrain flours. Our portfolio includes
                                2D, 3D, laminated, and punched shapes loved by customers across the globe.</Typography>
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: {xs: '16px', sm: '20px', md: '24px'},
                            }}>Backed by a strong R&D culture, we conduct research on 100–150 new products annually,
                                developing over 300 unique shapes and thousands of formulations to date.</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
        <Box>
            {/*<Box*/}
            {/*    component="img"*/}
            {/*    src={palletimg}*/}
            {/*    alt="Pallets"*/}
            {/*    sx={{*/}
            {/*        width: '841px',*/}
            {/*        height: '561px',*/}
            {/*        objectFit: 'cover',*/}
            {/*        position: 'absolute',*/}
            {/*        top: 355,*/}
            {/*        right: 0,*/}
            {/*    }}*/}
            {/*/>*/}
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block', // Hide on large screens and above
                        xl: 'block',
                    },
                }}>
                <Box
                    component="img"
                    src={palletimg}
                    alt="Pallets"
                    sx={{
                        width: {
                            xs: '100%',       // Full width on extra-small screens
                            sm: '100%',
                            md: '600px',
                            lg: '650px',
                            xl: '841px',
                        },
                        height: {
                            height: '561px'
                        },
                        objectFit: 'cover',
                        position: 'absolute',
                        top: {
                            xs: 200,
                            sm: 250,
                            md: 300,
                            lg: 330,
                            xl: 355,
                        },
                        right: {
                            xs: 0,
                            md: 0,
                        },
                        py: {
                            xs: 4,
                            sm: 6,
                            md: 8,
                        },
                    }}
                />
            </Box>

        </Box>
    </>);
};

export default WhoWeAre;
