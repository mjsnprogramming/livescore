import '../styles/Home.scss';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.js';
import Search from './Search.js';
import React  from 'react';

import FootballBall from '../images/FootballBall.png';
import Argentina from '../images/Argentina.png';
import Italy from '../images/Italy.png';
import InfoVectorMatch from '../images/InfoVectorMatch.png';
import StatsVectorMatch from '../images/StatsVectorMatch.png';
import Portugal from '../images/Portugal.png';
import Germany from '../images/Germany.png';
import Ghana from '../images/Ghana.png';
import Brazil from '../images/Brazil.png';
import Uruguay from '../images/Uruguay.png';
import Poland from '../images/Poland.png';
import Spain from '../images/Spain.png';
import Czech from '../images/Czech.png';



function Home() {
    return (
        <div className = "Home">
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>

            <Navigation/>
            <Search/>

            <div id = "footballMatch">
                <img src = {FootballBall}/>
                <ul>
                    <li><Link to = "/">Latest Match</Link></li>
                    <li><Link to = "/ComingMatch">Coming Match</Link></li>
                    <li><Link to = "/LiveGames">Live Games</Link></li>
                </ul>
                <hr id = "footballMatchHR"></hr>
                <hr id = "underlineFootballMatchHR"></hr>
            </div>

            <div id = "firstScore" className = "latestScore">
                <img src = {Argentina}/>
                <li><Link to = "/Argentina">Argentina</Link></li>
                <div className = "latestMatchScore">
                    <span>1 - 2</span>
                </div>
                <li><Link to = "/Italy">Italy</Link></li>
                <img src = {Italy}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span className = "dateOfGame">18 December 2022</span>
                <img src = {InfoVectorMatch} className = "infoVectorMatch"/>
                <img src = {StatsVectorMatch} className = "statsVectorMatch"/>
                <div className = "latestMatchScoreMobile">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>

            <div id = "secondScore" className = "latestScore">
                <img src = {Portugal}/>
                <li><Link to = "/Portugal">Portugal</Link></li>
                <div className = "latestMatchScore">
                    <span>2 - 3</span>
                </div>
                <li><Link to = "/Germany">Germany</Link></li>
                <img src = {Germany}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span className = "dateOfGame">18 December 2022</span>
                <img src = {InfoVectorMatch} className = "infoVectorMatch"/>
                <img src = {StatsVectorMatch} className = "statsVectorMatch"/>
                <div className = "latestMatchScoreMobile">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>

            <div id = "thirdScore" className = "latestScore">
                <img src = {Ghana}/>
                <li><Link to = "Ghana">Ghana</Link></li>
                <div className = "latestMatchScore">
                    <span>1 - 3</span>
                </div>
                <li><Link to = "Brazil">Brazil</Link></li>
                <img src = {Brazil}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span className = "dateOfGame">17 December 2022</span>
                <img src = {InfoVectorMatch } className = "infoVectorMatch"/>
                <img src = {StatsVectorMatch} className = "statsVectorMatch"/>
                <div className = "latestMatchScoreMobile">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>

            <div id = "fourthScore" className = "latestScore">
                <img src = {Uruguay}/>
                <li><Link to = "Uruguay">Uruguay</Link></li>
                <div className = "latestMatchScore">
                    <span>2 - 2</span>
                </div>
                <li><Link to = "Poland">Poland</Link></li>
                <img src = {Poland}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span className = "dateOfGame">17 December 2022</span>
                <img src = {InfoVectorMatch} className = "infoVectorMatch"/>
                <img src = {StatsVectorMatch} className = "statsVectorMatch"/>
                <div className = "latestMatchScoreMobile">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>

            <div id = "fifthScore" className = "latestScore">
                <img src = {Spain}/>
                <li><Link to = "Spain">Spain</Link></li>
                <div className = "latestMatchScore">
                    <span>3 - 3</span>
                </div>
                <li><Link to = "Czech">Czech</Link></li>
                <img src = {Czech}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span className = "dateOfGame">16 December 2022</span>
                <img src = {InfoVectorMatch} className = "infoVectorMatch"/>
                <img src = {StatsVectorMatch} className = "statsVectorMatch"/>
                <div className = "latestMatchScoreMobile">
                    <span>1</span>
                    <span>2</span>
                </div>
            </div>


        </div>
    )
}
export default Home;