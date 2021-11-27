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
            <Container sx={{ my: 4 }}>
                <Typography sx={{ textAlign: 'center' }} variant="h4">How Does We Work</Typography>
                <Typography sx={{ textAlign: 'center' }} variant="subtitle2">Service features tended no do thoughts <br />me on dissuade scarcely own are pretty spring suffer old denote his proposal speedily amr striking am now.</Typography>

                <Container>
                    <Grid container spacing={1}>


                        {
                            works?.map(itme =>

                                <Grid md={3} xs={12}>
                                    <Box sx={{ my: 7 }}>
                                        <Typography sx={{ textAlign: 'center' }}  >
                                            <div sx={{}} className="img_proces">
                                                <img className="img_proces" src={itme.img} alt="" />
                                            </div>
                                        </Typography>

                                        <Typography sx={{ textAlign: 'center' }} variant="subtitle1">
                                            {itme.name}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'center' }} variant="subtitle1">
                                            {itme.text}
                                        </Typography>

                                    </Box>
                                </Grid>


                            )
                        }


                    </Grid>
                </Container>


            </Container>
        </Box >
    )

}
export default OurWork;