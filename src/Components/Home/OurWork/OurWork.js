import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import './Ourwork.css'
const works = [
    {
        img: 'https://santhemes.com/tidytheme/fizxila/images/process_1.jpg',
        name: 'Call Up',
        text: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
    {
        img: 'https://santhemes.com/tidytheme/fizxila/images/process_3.jpg',
        name: 'Form Fill up',
        text: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
    {
        img: 'https://santhemes.com/tidytheme/fizxila/images/process_4.jpg',
        name: 'Diagnostic',
        text: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
    {
        img: 'https://santhemes.com/tidytheme/fizxila/images/process_2.jpg',
        name: 'Repair & Solve',
        text: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    }
]

const OurWork = () => {
    return (
        <Box>
            <Container>
                <Typography sx={{ textAlign: 'center' }} variant="h5">How Does We Work</Typography>


                <Grid container spacing={2}>


                    {
                        works?.map(itme =>
                            <Grid md={3} xs={12}>
                                <Box>
                                    <div className="img_proces">
                                        <img src={itme.img} alt="" />
                                    </div>
                                </Box>
                            </Grid>
                        )
                    }


                </Grid>

            </Container>
        </Box >
    )

}
export default OurWork;