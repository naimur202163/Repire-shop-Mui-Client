import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
const Logoes = [
    {
        img: "https://santhemes.com/tidytheme/fizxila/images/client-2.png"
    },
    {
        img: "https://santhemes.com/tidytheme/fizxila/images/client-4.png"
    },
    {
        img: "https://santhemes.com/tidytheme/fizxila/images/client-1.png"
    },
    {
        img: "https://santhemes.com/tidytheme/fizxila/images/client-3.png"
    }
]

const Logos = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Grid container spacing={2}>

                {
                    Logoes.map(items =>
                        <Grid md={3} xs={12}>
                            <Typography sx={{ textAlign: "center" }}>
                                <img src={items.img} />
                            </Typography>
                        </Grid>
                    )
                }


            </Grid>
        </Box>
    );
};

export default Logos;