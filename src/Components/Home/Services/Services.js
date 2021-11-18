import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const Services = () => {
    const [products, setProducts] = useState([]);

    fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
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

                </Box>
            </Container >
        </Box >
    );
};

export default Services;