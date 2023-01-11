import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Standings from './Standings.js';

const Routing = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home/>}></Route>
            <Route exact path = '/Standings' element = {<Standings/>}></Route>
        </Routes>
    )
}
export default Routing;