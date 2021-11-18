import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
const Banner2 = () => {
    return (
        <Box>
            <Container>
                <hr />

                <Grid container spacing={2} >
                    <Grid md={6} item xs={12}>
                        <img sx={{ mt: 4 }} style={{ width: "100%", justifyContent: "center" }} src="https://santhemes.com/tidytheme/fizxila/images/about.jpg" alt="" />
                    </Grid>
                    <Grid md={6} xs={12}>
                        <Typography sx={{ mt: 4, ml: 3 }}>WELCOME TO FIZXILA</Typography>
                        <Typography sx={{ ml: 4 }} variant="h4">Fizxila - We're Here To Help</Typography>
                        <Typography sx={{ ml: 4 }} variant="h4">You Repair Service</Typography>
                        <Box sx={{ mt: 5 }}>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    < ArticleIcon sx={{ width: 50, height: 50, mt: 2, ml: 3 }} />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h5">Our Mission</Typography>
                                    <Typography sx={{ mt: 4 }} variant="subtitle1">
                                        It’s soon going to be much easier to get your iPhone fixed. Apple said early thursday that it was expanding its product repair the program. The company plans to give more independentl
                                    </Typography>

                                </Grid>

                            </Grid>
                        </Box>
                        <Box sx={{ mt: 5 }}>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    < ArticleIcon sx={{ width: 50, height: 50, mt: 2, ml: 3 }} />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h5">Professional Team</Typography>
                                    <Typography sx={{ mt: 4 }} variant="subtitle1">
                                        It’s soon going to be much easier to get your iPhone fixed. Apple said early thursday that it was expanding its product repair the program. The company plans to give more independentl
                                    </Typography>

                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box >
    );
};

export default Banner2;