import React from 'react';
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DetailedNews() {

    const location = useLocation();
    let detailedNews = location.state;

    return (
        <>
            <Navbar />

            <Box my={5}>
                <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <img height="450px" src={detailedNews.urlToImage} alt={detailedNews.title} />
                    <Grid item lg={6} md={12} m={1}>
                        <Typography variant='caption' style={{ textTransform: 'capitalize' }}>Source: {detailedNews.source.name}</Typography>
                        <Typography variant='h4'>{detailedNews.title}</Typography>
                        <br />
                        <Typography variant='h6'>{detailedNews.content}</Typography>
                        <br />
                        <Typography variant='body2'>{detailedNews.description}</Typography>
                        <br />
                        <Typography variant='caption' style={{ textTransform: 'capitalize' }}>Author: {detailedNews.author}</Typography>
                    </Grid>
                <Container sx={{ textAlign: "right" }}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button variant="contained">Go Back</Button>
                    </Link>
                </Container>
                </Grid>

            </Box>

        </>
    )
};