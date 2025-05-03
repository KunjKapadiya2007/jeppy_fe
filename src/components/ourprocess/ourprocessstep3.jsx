import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import imgstep3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png";

function Ourprocessstep3() {
    const data = [
        {
            steps: "STEP 3",
            title: "Hygiene & Automation",
            points: [
                "The entire production line is 100% automated, ensuring:",
                " No human touch",
                " Top-tier hygiene standards",
                " Efficient mass production (up to 75,000 metric tons/year)",
            ],
            image: imgstep3,
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
                    <Box sx={{
                        pl: { xs: 2, sm: 4, md: 6, lg: 6 },
                        py: { xs: 1, sm: 2, md: 3, lg: 4 },
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

                    <Box>
                        <img
                            src={item.image}
                            alt={`${item.title} illustration`}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Ourprocessstep3;
