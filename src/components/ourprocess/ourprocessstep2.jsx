import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import imgstep2 from "../../assets/images/ourprocess/ManufacturingProcessSteps/CoreProductionProcess.png";

function Ourprocessstep2() {
    const data = [
        {
            steps: "STEP 2",
            title: "Core Production Process",
            points: [
                "Weighing: Measures raw ingredients precisely.",
                "Sieving: Removes impurities for purity.",
                "Mixing: Blends ingredients evenly.",
                "Moisturizing: Adds moisture to form dough.",
                "Cooking: Cooks the mixture for texture.",
                "Forming: Shapes snacks (2D, 3D, or sheeted).",
                "Cutting: Cuts into required sizes.",
                "Drying: Removes moisture for storage/frying.",
            ],
            image: imgstep2,
        }
    ];

    return (
        <Box sx={{ margin: '0 auto' }}>
            {data.map((item, index) => (
                <Box key={index} sx={{
                    display: 'flex',
                    py: 8,
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                }}>
                    <Box>
                        <img
                            src={item.image}
                            alt={`${item.title} illustration`}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Box>

                    <Box sx={{
                        py: { xs: 2, sm: 3, md: 4, lg: 4 },
                    }}>
                        <Typography variant="h5" sx={{
                            fontSize: { md: "24px", sm: "20px", xs: "16px" },
                            lineHeight: '24px',
                            color: "rgba(242, 138, 30, 1)",
                            fontWeight: 300,
                            mr: 2,
                        }}>
                            {item.steps}
                        </Typography>

                        <Typography variant="h6" sx={{
                            mb: 2,
                            fontWeight: 700,
                            fontSize: { md: "40px", sm: "36px", xs: "32px" },
                        }}>
                            {item.title}
                        </Typography>

                        <List dense sx={{
                            listStyleType: 'disc',
                            pl: 2,
                            fontWeight: 500,
                            fontSize: { md: "24px", sm: "20px", xs: "16px" },
                        }}>
                            {item.points.map((point, pointIndex) => (
                                <ListItem key={pointIndex} sx={{ display: 'list-item' }}>
                                    <ListItemText primary={point} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Ourprocessstep2;
