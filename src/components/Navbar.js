import React from 'react';
import logo from '../logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <AppBar sx={{ position: "sticky", backgroundColor: "#fff", border: "1px solid lightgrey", boxShadow: "none"}}>
                <Toolbar sx={{justifyContent: "space-evenly", my: "8px"}}>
                    <Box>
                        <Link to="/">
                            <img src={logo} width={190} />
                        </Link>
                    </Box>
                    <Box sx={{display: "flex"}}>
                        <Box sx={{ mr:"30px" }}>
                        <Link className='nav-link'>Get started</Link>
                        </Box>
                        <Box sx={{ mr:"30px" }}>
                        <Link className='nav-link'>Documentation</Link>
                        </Box>
                        <Box sx={{ mr:"30px" }}>
                        <Link className='nav-link'>Pricing</Link>
                        </Box>
                    </Box>
                    <Box>
                        <Button sx={{ mr:"15px", border: "1.5px solid #1a73e8"}}>Login</Button>
                        <Button variant='contained'>Get Api Key</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
};