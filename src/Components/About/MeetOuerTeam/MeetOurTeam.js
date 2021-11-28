import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './MeetOurTeam.css';


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
                <Box>
                    <Box>
                        <Typography sx={{ textAlign: 'center', my: 10, mt: 2 }} variant="h4">Meet Our Team</Typography>
                        <Typography sx={{ textAlign: 'center', mt: 2 }} variant="subtitle1">Service features tended no do thoughts me on dissuade scarcely
                            <br />
                            own are pretty spring suffer
                            <br />old denote his proposal speedily amr striking am now.</Typography>
                    </Box>
                    <Box></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MeetOurTeam;