import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import MyCard from './MyCard';

export default function Data() {
    let [data, setData] = useState([]);
    let navigate = useNavigate();

    let getData = () => {
        axios.get("https://newsapi.org/v2/everything?q=keyword&apiKey=5197654bf28b4eebbf3c0eb543aa6827")
            .then((resolved) => {
                console.log(resolved.data.articles);
                setData(resolved.data.articles)
            }).catch((error) => {
                console.error(error.message);
            })
    }

    let goToDetails = (e) => {
        navigate(`/DetailedNews`, {
            state: e
        }
        )
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Grid container sx={{ justifyContent: "center", alignItems: "flex-start", my: 10, p: 2, pb: 5 }}>
                {data.map((e, i) => {
                    return (
                        <>
                            <MyCard key={e.id} src={e.urlToImage} alt={e.title} title={e.title} description={e.description} onClick={() => goToDetails(e)} />
                        </>
                    )
                })}
            </Grid>
        </>
    )
}