import '../../styles/Standings.scss';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation.js';
import Search from '../Search.js';

import England from '../../images/England.png';
import PremierLeague from '../../images/PremierLeague.png';
import ChampionsLeague from '../../images/ChampionsLeague.png';
import Spain from '../../images/Spain.png';
import LaLiga from '../../images/LaLiga.png';
import France from '../../images/France.png';
import Ligue1 from '../../images/Ligue1.png';
import Italy from '../../images/Italy.png';
import SerieA from '../../images/SerieA.png';
import Germany from '../../images/Germany.png';
import Bundesliga from '../../images/Bundesliga.png';
import Poland from '../../images/Poland.png';
import Ekstraklasa from '../../images/Ekstraklasa.png';
import Europe from '../../images/Europe.png';


import StandingsOverall from '../../images/StandingsOverall.png';

function Standings() {
    return (
        <div className = "Standings">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
                <Navigation/>
                <Search/>

                <div id = "standingsOverall">
                    <img src = {StandingsOverall}/>
                    <div id = "leagues">
                        <li>
                            <Link to = "/Standings/PremierLeague">
                                <div id = "premierLeague" className = "leagues">
                                    <img src = {England}/>
                                    <img src = {PremierLeague}/>
                                    <span>Premier League</span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to = "/Standings/ChampionsLeague">
                                <div id = "championsLeague" className = "leagues">
                                    <img src = {Europe}/>
                                    <img src = {ChampionsLeague}/>
                                    <span>Champions League</span>
                                </div>
                            </Link>
                        </li>        

                        <li>
                            <Link to = "Standings/LaLiga">
                                <div id = "laLiga" className = "leagues">
                                    <img src = {Spain}/>
                                    <img src = {LaLiga}/>
                                    <span>La Liga</span>
                                </div>
                            </Link>
                        </li>        

                        <li>
                            <Link to = "/Standings/Ligue1">
                                <div id = "ligue1" className = "leagues">
                                    <img src = {France}/>
                                    <img src = {Ligue1}/>
                                    <span>Ligue 1</span>
                                </div>
                            </Link>
                        </li>        

                        <li>
                            <Link to = "/Standings/SerieA">
                                <div id = "serieA" className = "leagues">
                                    <img src = {Italy}/>
                                    <img src = {SerieA}/>
                                    <span>Serie A</span>
                                </div>
                            </Link>
                        </li>        

                        <li>
                            <Link to = "/Standings/Bundesliga">
                                <div id = "bundesliga" className = "leagues">
                                    <img src = {Germany}/>
                                    <img src = {Bundesliga}/>
                                    <span>Bundesliga</span>
                                </div>
                            </Link>
                        </li>        

                        <li>
                            <Link to = "/Standings/Ekstraklasa">
                                <div id = "esktraklasa" className = "leagues">
                                    <img src = {Poland}/>
                                    <img src = {Ekstraklasa}/>
                                    <span>Ekstraklasa</span>
                                </div>
                            </Link>
                        </li>        

                    </div>
                </div>
        </div>
    )
}

export default Standings;