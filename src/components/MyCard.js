import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Tooltip, Typography, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function MyCard(props) {
    let { src, alt, author, content, description, title, key, onClick } = props;
    
    return (
        <>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12} mx={1} my={2}
                key={key}
            >
                <Card
                    sx={{ maxWidth: 500 }}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <img src={src} width="auto" height="180px" alt={alt} />
                    </Box>

                    <CardContent>
                        <Tooltip title={title}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                                <Typography
                                    sx={{ height: 100, overflow: "hidden" }}
                                    variant="h6"
                                >
                                    {title}
                                </Typography>

                                <FavoriteBorderIcon />
                            </Box>
                        </Tooltip>

                        <Typography gutterBottom variant="subtitle1" color={"text.secondary"} component="div">
                            {description}
                        </Typography>

                        <Button variant="contained" mt={2} onClick={onClick}>Read More</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
};