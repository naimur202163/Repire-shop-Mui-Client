import React from 'react';
import './Footer.css'
import { Box, Container, Grid, Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Footer = () => {
    return (
        <Box className="footer">
            <Container>
                <Grid container spacing={2}>
                    <Grid md={3} xs={12}>
                        <Box sx={{ mt: 2 }}>
                            <Box>
                                <img src='https://santhemes.com/tidytheme/fizxila/images/footer_logo.png' />
                            </Box>




                        </Box>
                        <Box>
                            <p>Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab a et dolore magna aliqua</p>
                        </Box>
                        <Box sx={{ m: 1, p: 2 }}>
                            <FacebookRoundedIcon className="ichon-hover" sx={{ m: 1 }} />
                            <InstagramIcon className="ichon-hover" sx={{ m: 1 }} />
                            <WhatsAppIcon className="ichon-hover" sx={{ m: 1 }} />
                            <GoogleIcon className="ichon-hover" sx={{ m: 1 }} />
                            <YouTubeIcon className="ichon-hover" sx={{ m: 1 }} />
                        </Box>

                    </Grid>
                    <Grid md={3} xs={12}>
                        <Typography sx={{ textAlign: 'center' }} variant="h5">Quick Link</Typography>
                        <Box>
                            <ul>
                                <list style={{ color: "#fff" }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <KeyboardArrowRightIcon className="arrow" sx={{ mt: 2 }} /> <p > Help and Support</p>

                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <KeyboardArrowRightIcon className="arrow" sx={{ mt: 2 }} /> <p > Return & Cancellation</p>

                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <KeyboardArrowRightIcon className="arrow" sx={{ mt: 2 }} /> <p > Delevery Schedule</p>

                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <KeyboardArrowRightIcon className="arrow" sx={{ mt: 2 }} /> <p > Online Special service</p>

                                    </Box>
                                </list>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid md={3} xs={12}>
                        <Box>
                            <Typography variant="h5">Latest Articles</Typography>
                            <Box>
                                <Box sx={{ display: 'flex', }}>
                                    <Box sx={{ mt: 1 }}>
                                        <img style={{ width: '60%', height: "80%" }} src="https://santhemes.com/tidytheme/fizxila/images/blog1.jpg" alt="" />
                                    </Box>
                                    <Box>
                                        <p>Hacker request for wire to</p>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', }}>
                                    <Box sx={{ mt: 1 }}>
                                        <img style={{ width: '60%', height: "80%" }} src="https://santhemes.com/tidytheme/fizxila/images/blog2.jpg" alt="" />
                                    </Box>
                                    <Box>
                                        <p>Hacker request for wire to</p>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid md={3} xs={12}>
                        <Box>
                            <Typography sx={{ textAlign: 'center' }} variant="h5">Newsletter</Typography>
                            <Typography variant="subtitle1" sx={{ mt: 6, ml: 2, textAlign: 'center' }}>Subscribe our newsletter
                                <br />
                                to get more update & join to Fizxila
                                to get more update & join to Fizxila
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;