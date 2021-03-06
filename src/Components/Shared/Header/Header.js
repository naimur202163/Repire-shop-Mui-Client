import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src="https://santhemes.com/tidytheme/fizxila/images/footer_logo.png" alt="" />
                    </Typography>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/userorder">
                        <Button color="inherit">Orders</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashbord">
                        <Button color="inherit">Dashbord</Button>

                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                        <Button color="inherit">About</Button>

                    </NavLink>

                    {
                        user?.email ?
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button onClick={logout} color="inherit">LogOut</Button>

                            </NavLink>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>

                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Header;