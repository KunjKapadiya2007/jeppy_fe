import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Img1 from "../../assets/images/home/About/Mask group.png";

function AboutUs() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    return (
        // <Container maxWidth="xl">
            <Box sx={{
                padding:"90px 0"
            }}>
                {/* Section Title */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "28px", sm: "32px", md: "36px" },
                        fontWeight: 700,
                        textAlign: "center",
                        mb: { xs: 5, sm: 7, md: 12 }
                    }}
                >
                    About Us
                </Typography>

                {/* Content Container */}
                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: 4, md: 6 },
                    ml: { xs: 0, md: 6 },
                }}>
                    {/* Text Content - Now always first */}
                    <Box sx={{
                        order: 1,
                        width: { xs: "100%", md: "50%" },
                        px: { xs: 2, sm: 3, md: 0 }
                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "32px", sm: "40px", md: "48px" },
                                fontWeight: 700,
                                lineHeight: { xs: "110%", md: "100%" },
                                textAlign: { xs: "center", md: "left" },
                                mb: { xs: 3, md: 4 }
                            }}
                        >
                            The Story Behind <br />
                            the Crunch
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "16px", sm: "18px", md: "20px" , lg: "24px" },
                                fontWeight: 500,
                                lineHeight: { xs: "28px", md: "34px" },
                                mb: 4,
                                textAlign: { xs: "center", md: "justify" }
                            }}
                        >
                            The demand for snacks is rising around the world, snack producing companies are in fierce competition to match this demand. Our company JAYANT SNACKS AND BEVERAGES PVT. LTD. is a leading manufacturer and exporter of ready to fry Papad Snacks. It was founded in the year 1987 in the city of Rajkot in the western state of India. The company popularly known as "JEPPY" and "WOW" has 30 + years of extensive experience in the field of Snack Papad production. Today JEPPY is a prime leader in the Snacks Papad industry in India.
                        </Typography>

                        <Box sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" }
                        }}>
                            <Button
                                sx={{
                                    border: "1px solid #000",
                                    borderRadius: "50px",
                                    color: "#000",
                                    py: { xs: 0.75, md: 1 },
                                    px: { xs: 2.5, md: 3 },
                                    fontSize: { xs: "14px", md: "15px" },
                                    fontWeight: 600,
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                                    }
                                }}
                            >
                                Read More
                            </Button>
                        </Box>
                    </Box>

                    {/* Image - Now always second */}
                    <Box sx={{
                        order: 2,
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Box
                            component="img"
                            src={Img1}
                            alt="About Us Company Image"
                            sx={{
                                width: { xs: "280px", sm: "400px", md: "100%", lg: "100%" },
                                height: { xs: "280px", sm: "400px", md: "100%", lg: "100%" },
                                maxWidth: "100%",
                                objectFit: "contain"
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        // </Container>
    );
}

export default AboutUs;