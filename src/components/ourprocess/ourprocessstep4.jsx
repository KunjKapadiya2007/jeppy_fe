import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import imgstep4 from "../../assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png";
import image1 from "../../assets/images/ourprocess/ManufacturingProcessSteps/createdby1.png";
import image2 from "../../assets/images/ourprocess/ManufacturingProcessSteps/createdby2.png";
import image3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/createdby3.png";

function Ourprocessstep4() {
    const data = {
        step: "STEP 4",
        title: "Quality Control",
        description: [
            "Multiple checks are conducted at each production stage.",
            "Latest instruments are used to ensure snacks meet quality benchmarks."
        ],
        certifiedBy: [
            { image: image1,},
            { image: image2,},
            { image: image3,},
        ],
        image: imgstep4,
    };

    return (
        <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 8 } }}>
            <Grid container spacing={4}>
                {/* Left column: Step & Title */}
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h5" sx={{
                            fontSize: { md: "24px", sm: "20px", xs: "16px" },
                            color: "rgba(242, 138, 30, 1)",
                            fontWeight: 300,
                            mb: 1,
                        }}>
                            {data.step}
                        </Typography>

                        <Typography variant="h4" sx={{
                            fontWeight: 700,
                            fontSize: { md: "40px", sm: "36px", xs: "28px" },
                            mb: 2,
                        }}>
                            {data.title}
                        </Typography>
                    </Box>
                </Grid>

                {/* Right column: Description and Certifications */}
                <Grid item xs={12} md={6}>
                    <Box>
                        {data.description.map((line, idx) => (
                            <Typography key={idx} sx={{
                                fontSize: { md: "20px", sm: "18px", xs: "16px" },
                                mb: 1,
                            }}>
                                {line}
                            </Typography>
                        ))}

                        <Typography sx={{ mt: 3, fontWeight: 600 }}>
                            Certified by:
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            mt: 1,
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }}>
                            {data.certifiedBy.map((cert, idx) => (
                                <Box key={idx} sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: 60,
                                }}>
                                    <img
                                        src={cert.image}
                                        alt={cert.label}
                                        style={{ width: 40, height: 40, objectFit: 'contain' }}
                                    />

                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Bottom: Full-width image */}
                <Grid item xs={12}>
                    <Box>
                        <img
                            src={data.image}
                            alt="Quality Control Process"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Ourprocessstep4;
