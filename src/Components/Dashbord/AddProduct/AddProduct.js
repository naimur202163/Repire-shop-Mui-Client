import React, { useState } from 'react';
import { Button, Input, TextField, Container, Typography } from '@mui/material';
const AddProduct = () => {
    const [name, setName] = useState('');
    const [discription, setdiscription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('discription', discription);
        formData.append('image', image);

        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <Container sx={{ alignContent: 'center' }}>
                <Typography sx={{ textAlign: 'center' }} variant="h4">Add A Docotor</Typography>
                <form sx={{ ml: 10 }} onSubmit={handleSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Name"
                        required
                        onChange={e => setName(e.target.value)}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '50%' }}
                        label="discription"
                        type="text"
                        required
                        onChange={e => setdiscription(e.target.value)}
                        variant="standard" />
                    <br />
                    <Input
                        accept="image/*"
                        type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <br />
                    <Button variant="contained" type="submit">
                        Add Doctor
                    </Button>
                </form>
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </Container>


        </div >
    );
};

export default AddProduct;