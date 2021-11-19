import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Services = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // Geting Data From Server
    return (
        <Box style={{ backgroundColor: '#F6F8FF ' }}>
            <h2>Products{products.length}</h2>
            <Container>
                <Box sx={{ my: 3 }} >
                    <Typography sx={{ textAlign: "center", my: 3 }}>ELECTRONICS SERVICES</Typography>
                    <Typography sx={{ textAlign: "center", mt: 3 }} variant="h4">What We Provide</Typography>
                    <Typography sx={{ textAlign: "center", mt: 2 }} variant="subtitle1">There are many variations of passages of Lorem electronics repair, but the<br /> majority have suffered alteration in azer duskam</Typography>
                </Box>
                <Box>

                    <Grid sx={{ alignContent: 'center', justifyContent: 'center' }} container spacing={2}>
                        {
                            products?.map(product => <Grid md={4} xs={12}>
                                <Card sx={{ maxWidth: '90%', my: 2, ml: 6 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="90%"
                                        image={product.img1}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.discription1.slice(0, 120)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Link style={{ textDecoration: 'none' }} to={`/order/${product._id}`}>
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                            )
                        }

                    </Grid>


                </Box>
            </Container >
        </Box >
    );
};

export default Services;