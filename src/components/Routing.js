import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Standings from './Standings/Standings.js';
import PremierLeague from './Standings/PremierLeague.js';

const Routing = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home/>}></Route>
            <Route exact path = '/Standings/Standings' element = {<Standings/>}></Route>
            <Route exact path = '/Standings/PremierLeague' element = {<PremierLeague/>}></Route>
        </Routes>
    )
}
export default Routing;