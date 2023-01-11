import '../styles/Standings.scss';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.js';
import Search from './Search.js';

import StandingsOverall from '../images/StandingsOverall.png';

function Standings() {
    return (
        <div className = "Standings">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <Navigation/>
                <Search/>

                <div id = "standingsOverall">
                    <img src = {StandingsOverall}/>
                </div>
        </div>
    )
}

export default Standings;