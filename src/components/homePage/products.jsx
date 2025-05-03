import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Container,
} from '@mui/material';

import Img1 from '../../assets/images/home/Product/Gluten-Free-Group-Pics.png';
import Img2 from '../../assets/images/home/Product/3D-Group-Pic.png';
import Img3 from '../../assets/images/home/Product/Group-2D-Pic.png';
import Img4 from '../../assets/images/home/Product/Micro-Pellets-Group-Pics.png';
import Img5 from '../../assets/images/home/Product/Potato-Group-Pics.png';
import Img6 from '../../assets/images/home/Product/Protein-Group.png';
import Img7 from '../../assets/images/home/Product/Sheeted-Group-Pic.png';
import Img8 from '../../assets/images/home/Product/Veggi-Group-Pic.png';

const categories = ['All', 'Cereal Based', 'Potato', 'Vegetable', 'High-Protein', 'Gluten Free'];

const products = [
    { id: 1, name: '2D Papad Snacks', category: 'All', image: Img3 },
    { id: 2, name: '2D Papad Snacks', category: 'Cereal Based', image: Img2 },
    { id: 3, name: '2D Papad Snacks', category: 'Vegetable', image: Img8 },
    { id: 4, name: '2D Papad Snacks', category: 'High-Protein', image: Img6 },
    { id: 5, name: '2D Papad Snacks', category: 'Potato', image: Img5 },
    { id: 6, name: '2D Papad Snacks', category: 'Cereal Based', image: Img7 },
    { id: 7, name: '2D Papad Snacks', category: 'Gluten Free', image: Img1 },
    { id: 8, name: '2D Papad Snacks', category: 'Vegetable', image: Img4 },
];

function Products() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts =
        activeCategory === 'All'
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <Container maxWidth="xl">
            <Box sx={{ py: { xs: 4, md: 5 } }}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    textAlign="center"
                    mb={{ xs: 3, md: 4 }}
                    sx={{
                        fontSize: { xs: '1.5rem', md: '1.8rem' }
                    }}
                >
                    Our Products
                </Typography>

                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={{ xs: 1, sm: 2, md: 3 }}
                    mb={{ xs: 4, md: 5 }}
                    sx={{
                        overflowX: { xs: 'auto', md: 'visible' },
                        pb: { xs: 1, md: 0 }
                    }}
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            sx={{
                                color: activeCategory === category ? '#F97316' : 'black',
                                textTransform: 'none',
                                fontWeight: activeCategory === category ? 600 : 400,
                                borderBottom: activeCategory === category ? '2px solid #F97316' : 'none',
                                borderRadius: 0,
                                px: { xs: 1.5, md: 2 },
                                whiteSpace: 'nowrap',
                                minWidth: 'auto',
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                <Grid
                    container
                    justifyContent="center"
                    spacing={{ xs: 3, sm: 7, md: 10 }
                }
                    // alignItems="stretch"
                >
                    {filteredProducts.map((product) => (
                        <Grid
                            item
                            xs={6}
                            sm={6}
                            md={4}
                            lg={3}
                            key={product.id}
                            sx={{ display: 'flex' }}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    height: '330px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(240, 240, 240, 1)',
                                    p: { xs: 1.5, md: 2 },
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                                    },
                                    borderRadius: '8px',
                                }}
                            >
                                <CardContent sx={{ p:0,display:'flex', justifyContent:'start' }}>
                                    <Typography
                                        fontWeight={600}
                                        sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                                    >
                                        {product.name}
                                    </Typography>
                                </CardContent>
                                <Box sx={{ flexGrow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                        sx={{
                                            height: { xs: '120px', sm: '140px', md: '160px' },
                                            objectFit: 'contain',
                                            mb: 2,
                                            pt: 1,
                                        }}
                                    />
                                </Box>
                                <Box sx={{ pt: 1, pb: 1,display:'flex', justifyContent:'start' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: '#F97316',
                                            textTransform: 'none',
                                            '&:hover': {
                                                bgcolor: '#E65100',
                                            },
                                            px: { xs: 2, md: 4 },
                                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                                        }}
                                    >
                                        View
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Products;