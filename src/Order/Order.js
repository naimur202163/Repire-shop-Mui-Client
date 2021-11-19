import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import width from '@mui/system';

const Order = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/products`
        fetch(url)
            .then(res => res.json())
            .then(result => setOrders(result))
    }, []);

    const order = orders.find(items => items._id === orderId);
    console.log(order)


    return (
        <Box sx={{ my: 3 }}>
            <Container>
                <Grid container spacing={0}>
                    <Grid item md={2} xs={12}>
                        Hi
                    </Grid>
                    <Grid md={10} item xs={12}>
                        <Box >
                            <img style={{ width: "100%" }} src={order?.img2} alt="" />
                            <Typography sx={{ my: 3 }} variant="h4">{order?.name}</Typography>
                            <Typography sx={{ my: 3 }} variant="subtitle1">{order?.discription1}</Typography>
                        </Box>
                        <Box>
                            <Grid container spacing={1}>
                                <Grid md={6} xs={12}>
                                    <Typography variant="h4" >What We Do</Typography>
                                    <Typography sx={{ my: 4 }} variant="subtitle1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</Typography>
                                    <Typography variant="subtitle1" sx={{ my: 1 }}>It is a long established fact that a reader will be distracted by the readable content of a page when lookingnormal</Typography>
                                    <Typography variant="subtitle1" sx={{ my: 3 }}>
                                        -Established fact that a reader will be distracted
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ my: 2 }}>
                                        -Will be distracted by the readable content
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ my: 3 }}>
                                        -The point of using Lorem Ipsum is that’s true
                                    </Typography>
                                    <Typography sx={{ my: 1 }} variant="h5"><Button variant="contained">parches Now</Button></Typography>
                                </Grid>
                                <Grid md={6} xs={12}>
                                    <img sx={{ ms: 2 }} style={{ width: "100%", height: "88%" }} src="https://template.hasthemes.com/elecron/elecron/assets/images/service/service-details02.jpg" alt="" />
                                </Grid>

                            </Grid>



                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Order;