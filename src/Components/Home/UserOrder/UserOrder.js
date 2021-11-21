import React, { useEffect, useState } from 'react';
import { Button, Grid, Container, Box } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Header from './../../Shared/Header/Header';
const UserOrder = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const { user } = useAuth()
    useEffect(() => {
        const url = `http://localhost:5000/userProduct?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => setProducts(result))


    }, [isDelete]);



    // Delet 
    const handleDeleteProduct = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                    alert('Do You want to Delet it')
                } else {
                    setIsDelete(false);
                }
            });
    };





    return (
        <Box>
            <Header />


            <Container>
                <Typography sx={{ textAlign: "center", mt: 4 }} variant="h4">My Orders</Typography>
                <Grid container spacing={1}>

                    {
                        products.map(product =>
                            <Grid md={6} xs={12}>
                                <Card sx={{
                                    maxWidth: '96% '
                                }}>






                                    < Grid container spacing={2} >
                                        <Grid md={4} item xs={4}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="100%"
                                                image={product.img1}
                                            />
                                        </Grid>
                                        <Grid md={8} item xs={8} >
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {product.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.discription1.slice(0, 100)}

                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button onClick={() => handleDeleteProduct(product._id)} size="small">Learn More</Button>
                                            </CardActions>
                                        </Grid>


                                    </Grid>

                                </Card>
                            </Grid>
                        )
                    }



                </Grid>

            </Container >


        </Box >
    );
};

export default UserOrder;