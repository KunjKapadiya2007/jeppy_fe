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
                        fontWeight: 'bold',
                        mb: 3,
                        color: '#000',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        color: '#333',
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                    }}
                >
                    {subtext}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#e53935',
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        borderRadius: '30px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#d32f2f',
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
