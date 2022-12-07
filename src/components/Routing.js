import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';

const Routing = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home/>}></Route>
        </Routes>
    )
}
export default Routing;