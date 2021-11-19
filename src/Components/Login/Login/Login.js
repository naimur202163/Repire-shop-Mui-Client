import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = (e) => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[filed] = value;
        setLoginData(newLoginData)
        console.log(filed, value)
    }
    const handleLoginSubmit = (e) => {

        alert("he")
        e.preventDefault()
    }
    return (
        <Box>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Typography sx={{ ml: '34%' }} variant="body1" gutterBottom>Login</Typography>
                        <form sx={{ m: 8 }} onSubmit={handleLoginSubmit}>
                            <TextField
                                name="email"
                                sx={{ width: '75%', m: 1 }}
                                onChange={handleOnChange}
                                id="standard-basic"
                                type="text"
                                label="User Name"
                                variant="standard" />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name='password'
                                onChange={handleOnChange}
                                id="standard-basic"
                                label="User Password"
                                variant="standard"
                                type="password"
                            />
                            <Button
                                sx={{ width: '75%', m: 1 }}
                                variant="contained"
                                type="submit"
                            >Login</Button>

                        </form>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box>
                            <img style={{ width: '100%' }} src='https://static.vecteezy.com/system/resources/thumbnails/001/991/652/small_2x/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg' alt='' />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Login;