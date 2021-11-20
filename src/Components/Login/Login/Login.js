import React, { useState, } from 'react';
import { Box, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { Button } from '@mui/material';
import useAuth from './../../../hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth()

    const location = useLocation()
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <Box>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Typography sx={{ ml: '34%' }} variant="body1" gutterBottom>Login</Typography>

                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
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