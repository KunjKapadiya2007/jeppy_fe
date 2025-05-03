import React from 'react';
import {Box, Typography, List, ListItem, ListItemText, Grid} from '@mui/material';
import imgstep1 from "../../assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png";

function Ourprocessstep1() {
    const data = [
        {
            steps: "STEP 1",
            title: "Raw Material Procurement & Quality Testing",
            points: [
                "Raw materials such as potato, lentil, soya, rice, corn, and other vegetables are sourced from reputed suppliers.",
                {
                    text: "Before use, materials undergo strict quality tests:",
                    subpoints: [
                        "Moisture test",
                        "Density check",
                        "Ash content",
                        "pH level",
                        "Color & viscosity analysis"
                    ]
                },
                "Only materials passing these tests are used in production."
            ],
            image: imgstep1,
        }
    ];

    return (
        <Box sx={{ margin: '0 auto'}}>
            {data.map((item, index) => (
                <Box sx={{
                    display: 'flex',
                    py:8,
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                }}>
                    <Box key={index} sx={{
                        pl: { xs: 2, sm: 4, md: 6, lg: 6 },
                        py: { xs: 1, sm: 2, md: 3, lg: 4 },
                    }}
                    >
                        <Typography variant="h5" sx={{
                            fontSize: { md: "24px", sm: "20px", xs: "16px" },
                            lineHeight: '24px',
                            color: "rgba(242, 138, 30, 1)",
                            fontWeight: 300,
                            mr: 2,
                            // minWidth: '80px' // Ensures consistent spacing for step number
                        }}>
                            {item.steps}
                        </Typography>
                        <Box sx={{flexGrow: 1}}>
                            <Box sx={{display: 'flex'}}>
                                <Box sx={{flex: 1}}>
                                    <Typography variant="h6" sx={{
                                        mb: 2,
                                        fontWeight: '700',
                                        fontSize: { md: "40px", sm: "36px", xs: "32px" },
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <List dense sx={{
                                        listStyleType: 'disc',
                                        pl: 2 ,
                                        fontWeight: 500,
                                        fontSize: { md: "24px", sm: "20px", xs: "16px" },

                                    }}>
                                        {item.points.map((point, pointIndex) => (
                                            <ListItem key={pointIndex} sx={{
                                                display: 'list-item',
                                            }}>
                                                {typeof point === 'string' ? (
                                                    <ListItemText primary={point}/>
                                                ) : (
                                                    <>
                                                        <ListItemText primary={point.text}/>
                                                        <List dense sx={{
                                                            listStyleType: 'disc',
                                                        }}>
                                                            {point.subpoints.map((subpoint, subIndex) => (
                                                                <ListItem key={subIndex} sx={{
                                                                    display: 'list-item',
                                                                    p: 0,
                                                                    pl: 1
                                                                }}>
                                                                    <ListItemText primary={subpoint}/>
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </>
                                                )}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box >
                        <img
                            src={item.image}
                            alt="Raw Material Procurement"
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

export default Ourprocessstep1;