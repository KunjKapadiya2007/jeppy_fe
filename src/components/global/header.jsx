import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import img from '../../assets/images/ourprocess/header/header.jpg';
const Header = () => {
    const heading = 'From Idea to Crunch, We Do It Right.';
    const subtext = 'From sourcing to final packaging, Fleppy’s process is designed to deliver consistent, high-quality snacks you can trust.';
    const buttonText = "Let's Connect";

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                zIndex: 1,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(254, 195, 85, 0.7)', // adjust for desired tint
                    zIndex: 0,
                }
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: '#000',
                        fontSize: {md: "64px", sm: "48px", xs: "36px"},
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        color: '#333',
                        fontSize: {md: "24px", sm: "20px", xs: "16px"},
                    }}
                >
                    {subtext}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#E82B09',
                        color: '#fff',
                        p: "22px 32px",
                        fontWeight: 600,
                        fontSize: {md: "24px", sm: "20px", xs: "16px"},
                        textTransform: 'none',
                        borderRadius: '50px',
                        '&:hover': {
                            backgroundColor: '#c32e0f',
                        },
                    }}
                >
                    {buttonText}
                </Button>
            </Container>
        </Box>
    );
};

export default Header;
