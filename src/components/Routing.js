import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Standings from './Standings/Standings.js';
import PremierLeague from './Standings/PremierLeague.js';
import LaLiga from './Standings/LaLiga.js';
import Ligue1 from './Standings/Ligue1.js';
import SerieA from './Standings/SerieA.js';
import Bundesliga from './Standings/Bundesliga.js';
import Ekstraklasa from './Standings/Ekstraklasa.js';
import ComingMatch from './ComingMatch.js';
import LiveGames from './LiveGames.js';

const Routing = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<Home/>}></Route>
            <Route exact path = '/Standings/Standings' element = {<Standings/>}></Route>
            <Route exact path = '/Standings/PremierLeague' element = {<PremierLeague/>}></Route>
            <Route exact path = '/Standings/LaLiga' element = {<LaLiga/>}></Route>
            <Route exact path = '/Standings/Ligue1' element = {<Ligue1/>}></Route>
            <Route exact path = '/Standings/SerieA' element = {<SerieA/>}></Route>
            <Route exact path = '/Standings/Bundesliga' element = {<Bundesliga/>}></Route>
            <Route exact path = '/Standings/Ekstraklasa' element = {<Ekstraklasa/>}></Route>
            <Route exact path = '/ComingMatch' element = {<ComingMatch/>}></Route>
            <Route exact path = '/LiveGames' element = {<LiveGames/>}></Route>
        </Routes>
    )
}
export default Routing;