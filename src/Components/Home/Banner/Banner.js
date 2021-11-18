import React from 'react';
import './Banner.css'
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { textAlign } from '@mui/system';
const Banner = () => {
    return (

        <Box container >
            <Grid sx={{ mt: 5 }} container spacing={2}>
                <Grid md={6} xs={12}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', mt: 4 }} variant="h4">Repair Your Laptop</Typography>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', mt: 3 }} variant="h4">Iphone & Computer.</Typography>
                    <Typography sx={{ textAlign: 'center', mt: 2 }} variant="subtitle1">As quas equidem noluisse et, ex pro semper fierent opore at epic<br /> urei ullam corper usu eohs et voluptaria rationibus yo</Typography>
                    <Typography sx={{ textAlign: 'center', mt: 1 }}>
                        <Button  >Contact Us</Button>
                    </Typography>
                </Grid>
                <Grid md={6} item xs={12} sx={{ alignItems: 'ceneter' }}>
                    <img sx={{ mt: 4 }} style={{ width: "100%", justifyContent: "center" }} src="https://template.hasthemes.com/elecron/elecron/assets/images/about/about-01.png" alt='' />
                </Grid>

            </Grid>
        </Box >
    );
};

export default Banner;