import { Container, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import './banner3.css'
const Banner3 = () => {
    return (
        <Box sx={{ mt: 4 }} className="banner3">
            <Container>
                <Grid container spacing={2}>
                    <Grid md={8} xs={12}>
                        <Box>
                            <Typography sx={{ mt: 4, ml: 2 }} variant="h5" style={{ color: 'white' }} >WHAT WE DO</Typography>
                            <Typography sx={{ ml: 2 }} style={{ color: 'white' }} >Why Choose Us</Typography>
                            <Box sx={{ mt: 10, ml: 2 }}>
                                <Box>
                                    <Typography variant="h5" style={{ color: 'white' }}>Quick Response</Typography>
                                    <Typography style={{ color: 'white' }}>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service response time is one hour</Typography>
                                </Box>
                            </Box>
                            <hr />
                            <Box>
                                <Box>
                                    <Typography variant="h5" sx={{ mt: 4, ml: 2 }} style={{ color: 'white' }}>Very Fast Services</Typography>
                                    <Typography sx={{ ml: 2 }} style={{ color: 'white' }}>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service response time is one hour</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid md={4} xs={12}>
                        <Box>
                            <img sx={{ height: '60%', width: '80%', ml: 4 }} src='https://santhemes.com/tidytheme/fizxila/images/why_chose.jpg' alt="" />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner3;