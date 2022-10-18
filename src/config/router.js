import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../screens/home';
import DetailedNews from '../screens/newsdetails';
import NotFound from '../screens/notfound';


export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="DetailedNews" element={<DetailedNews />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
