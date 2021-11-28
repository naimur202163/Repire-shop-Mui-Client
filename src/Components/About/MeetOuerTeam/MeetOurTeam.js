import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import './MeetOurTeam.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Footer from '../../Shared/Footer/Footer';


const Teams = [
    {
        name: "Ben Stcoks",
        test: 'Engineer',
        img: "https://santhemes.com/tidytheme/fizxila/images/team1.jpg"
    },
    {
        name: "Adam Crew",
        test: 'Engineer',
        img: "https://santhemes.com/tidytheme/fizxila/images/team2.jpg"
    },
    {
        name: "Moris Jon",
        test: 'Manager',
        img: "https://santhemes.com/tidytheme/fizxila/images/team3.jpg"
    },
]
const MeetOurTeam = () => {
    return (
        <Box className="bg-images">
            <Container>
                <Box >
                    <Box>
                        <Typography sx={{ textAlign: 'center', my: 10, mt: 2 }} variant="h4">Meet Our Team</Typography>
                        <Typography sx={{ textAlign: 'center', mt: 2 }} variant="subtitle1">Service features tended no do thoughts me on dissuade scarcely
                            <br />
                            own are pretty spring suffer
                            <br />old denote his proposal speedily amr striking am now.</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>

                            {
                                Teams.map(n =>
                                    <Grid md={4} xs={12}>
                                        <Typography >
                                            <Card sx={{ maxWidth: '90%', my: 10, ml: 6 }}>
                                                <CardMedia
                                                    component="img"
                                                    alt="green iguana"
                                                    height="90%"
                                                    image={n.img}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {n.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {n.test}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">Share</Button>
                                                </CardActions>

                                            </Card>
                                        </Typography>

                                    </Grid>
                                )

                            }
                        </Grid>

                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default MeetOurTeam;