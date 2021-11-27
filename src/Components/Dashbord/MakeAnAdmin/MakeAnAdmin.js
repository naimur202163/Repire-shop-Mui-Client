import React, { useState } from 'react';
import { TextField, Alert, Container, Box } from '@mui/material';
import { Button } from '@mui/material';
import useAuth from './../../../hooks/useAuth';

const MakeAnAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <Box>

            <Container sx={{ ml: 10 }}>
                <h2 sx={{ textAlign: 'center' }} variant="h5">Make an Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button type="submit" variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </Container>


        </Box>
    );
};

export default MakeAnAdmin;