import React from 'react';
import {Box, Typography, Button, Container, Stack} from "@mui/material";
import Img1 from "../../assets/images/home/Milestone/f6132242b4a9d1dc06825a76f30df44905f68c64.png";

function Milestone() {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "flex-start",
                    py: { xs: 4, sm: 5, md: 6 },
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                {/* 30 Years Circle */}
                <Box
                    sx={{
                        width: { xs: 180, md: 220 },
                        height: { xs: 180, md: 220 },
                        borderRadius: "50%",
                        bgcolor: "rgba(255, 226, 194, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: { xs: 4, md: 0 }
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: 150, md: 180 },
                            height: { xs: 150, md: 180 },
                            borderRadius: "50%",
                            bgcolor: "#F7941D",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white"
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "60px", md: "90px" },
                                fontWeight: 700,
                                lineHeight: 1
                            }}
                        >
                            30
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: "20px", md: "24px" },
                                fontWeight: 500,
                                letterSpacing: "1px"
                            }}
                        >
                            YEARS
                        </Typography>
                    </Box>
                </Box>

                {/* Statistics Section */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: { xs: "100%", md: "65%" },
                        ml: { md: 10 },
                        gap: { xs: 2, sm: 4 }
                    }}
                >
                    {/* 300+ Shapes */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "32px", md: "40px" },
                                fontWeight: 700
                            }}
                        >
                            300+
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: 500,
                                textAlign: "center"
                            }}
                        >
                            SHAPES
                        </Typography>
                    </Box>

                    {/* 200 MT/DAY */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "32px", md: "40px" },
                                fontWeight: 700
                            }}
                        >
                            200
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: 500,
                                textAlign: "center"
                            }}
                        >
                            MT/DAY
                            <br />
                            PRODUCTION
                        </Typography>
                    </Box>

                    {/* 150+ R&D */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "32px", md: "40px" },
                                fontWeight: 700
                            }}
                        >
                            150+
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: 500,
                                textAlign: "center"
                            }}
                        >
                            R&D BATCHES
                            <br />
                            PER YEAR
                        </Typography>
                    </Box>

                    {/* 1000s OF */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: "32px", md: "40px" },
                                fontWeight: 700
                            }}
                        >
                            1000s
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: 500,
                                textAlign: "center"
                            }}
                        >
                            OF
                            <br />
                            FORMULATIONS
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Wafer Image, Line and Read More Button */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: { xs: 2, md: 0 },
                    mb: { xs: 4, md: 6 },
                    px: { xs: 2, sm: 3, md: 4 },
                    maxWidth: "800px",
                    mx: "auto"
                }}
            >
                {/* Wafer Image */}
                <Box
                    component="img"
                    src={Img1}
                    alt="Wafers"
                    sx={{
                        width: { xs: 70, md: 90 },
                        height: "auto",
                        objectFit: "contain"
                    }}
                />

                {/* Line */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ width: '100%', my: 3 }}
                >
                    {/* Divider Line */}
                    <Box
                        sx={{
                            height: '2px',
                            bgcolor: "#000",
                            flexGrow: 1,
                            mx: { xs: 2, md: 3 }
                        }}
                    />

                    {/* Read More Button */}
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#000",
                            color: "#fff",
                            borderRadius: 28,
                            py: { xs: 0.75, md: 1 },
                            px: { xs: 3, md: 4 },
                            "&:hover": {
                                bgcolor: "#333"
                            },
                            textTransform: "none",
                            fontSize: { xs: 14, md: 16 },
                            fontWeight: 600,
                            minWidth: "140px"
                        }}
                    >
                        Read More
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default Milestone;