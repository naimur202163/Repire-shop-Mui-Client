import { Button, Container, Grid, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import width from '@mui/system';
import Header from './../Components/Shared/Header/Header';
import useAuth from './../hooks/useAuth';
import { useForm } from "react-hook-form";
const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const { orderId } = useParams();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/products`
        fetch(url)
            .then(res => res.json())
            .then(result => setOrders(result))
    }, []);

    const order = orders.find(items => items._id === orderId);
    // console.log(order)
    // Sendeing Data to the Server

    // console.log(itmes)
    // console.log(order, user.email)

    const onSubmit = (data) => {
        const itme1 = order;
        const item = { ...itme1, ...data };
        console.log(item)


        fetch("http://localhost:5000/userProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    }

    return (
        <Box >
            <Header></Header>
            <Container sx={{ my: 3 }}>
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
                                    {/* <Typography sx={{ my: 1 }} variant="h5"><Button onClick={handleProduct} variant="contained">parches Now</Button></Typography> */}
                                </Grid>
                                <Grid md={6} xs={12}>

                                    <Typography sx={{ textAlign: 'center', my: 6 }}>
                                        <form sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)}>

                                            <input style={{ width: "50%", height: '30px' }} type="email" defaultValue={user.email} {...register("email")} />
                                            <br />
                                            <br />
                                            <input placeholder="Enter Your Name " style={{ width: "50%", height: '30px' }} type="name" {...register("name", { required: true })} />
                                            <br />
                                            {errors.exampleRequired && <span>This field is required</span>}
                                            <br />
                                            <input type="number" placeholder="Enter Your Phone Number" style={{ width: "50%", height: '30px' }} type="number" {...register("phone", { required: true })} />
                                            <br />
                                            <br />
                                            <input type="text" placeholder="Enter Your Address" style={{ width: "50%", height: '30px' }} type="text" {...register("phone", { required: true })} />
                                            <br />
                                            <br />

                                            <Button type="submit" variant="contained" style={{ width: "50%" }} >
                                                Pls Submit
                                            </Button>
                                            {/* <button onClick={handeleUser}>H</button> */}
                                        </form>
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

export default Order;