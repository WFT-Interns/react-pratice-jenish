import { AppBar, Box, CssBaseline, IconButton, Toolbar, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";


const Navbar = () => {
    const navigate = useNavigate();

    const homeNavigate = () => {
        navigate('/')
    }

    const loginNavigate = () => {
        navigate("/Login")
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component='nav'>
                    <Toolbar>
                        <IconButton>
                            <img src="" alt="Logo" />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={homeNavigate}
                            >Home
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={loginNavigate}
                            >Login
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;