import {Link} from 'react-router-dom';

import '../styles/Navigation.scss';

import MenuVector from '../images/Menu.png';
import FlameVector from '../images/Flame.png';
import CompassVector from '../images/Compass.png';
import CommentVector from '../images/Comment.png';
import FootballVector from '../images/Football.png';
import BasketballVector from '../images/Basketball.png';
import BillardsVector from '../images/Billards.png';
import TableTennisVector from '../images/TableTennis.png';
import CyclingVector from '../images/Cycling.png';
import InfoVector from '../images/Info.png';
import CommentaryVector from '../images/Commentary.png';
import DashboardVector from '../images/Dashboard.png';
import LiveVector from '../images/Live.png';
import StandingsVector from '../images/Standings.png';
import HighlightsVector from '../images/Highlights.png';
import ShopVector from '../images/Shop.png';
import NewsVector from '../images/News.png';
import ChampionsLeague from '../images/ChampionsLeague.png';
import PremierLeague from '../images/PremierLeague.png';
import LaLiga from '../images/LaLiga.png';
import Ligue1 from '../images/Ligue1.png';
import SerieA from '../images/SerieA.png';
import Bundesliga from '../images/Bundesliga.png';
import Ekstraklasa from '../images/Ekstraklasa.png';

function Navigation() {
    return (
        <div className = "Navigation">
        <div id = "navbar">
                <img src = {MenuVector}/>
                <img src = {FlameVector} id = "flameVector"/>
                <img src = {CompassVector} id = "compassVector"/>
                <img src = {CommentVector} id = "commentVector"/>
                <hr id = "betweenVectors"></hr>
                <img src = {FootballVector} id = "footballVector"/>
                <img src = {BasketballVector} id = "basketballVector"/>
                <img src = {BillardsVector} id = "billardsVector"/>
                <img src = {TableTennisVector} id = "tableTennisVector"/>
                <img src = {CyclingVector} id = "cyclingVector"/>
                <img src = {InfoVector} id = "infoVector"/>
                <img src = {CommentaryVector} id = "commentaryVector"/>
            </div>

            <div id = "dashboard">
                <span>MJSN LiveScore</span>
                <span>MENU</span>
                <img src = {DashboardVector} id = "dashboardVector"/>
                <li><Link to = "/" className = "links">Dashboard</Link></li>
                <img src = {LiveVector} id = "liveVector"/>
                <li><Link to = "/Live">Live Football</Link></li>
                <img src = {StandingsVector} id = "standingsVector"/>
                <li><Link to = "/Standings">Standings</Link></li>
                <img src = {HighlightsVector} id = "highlightsVector"/>
                <li><Link to = "/Highlights">Highlights</Link></li>
                <img src = {ShopVector} id = "shopVector"/>
                <li><Link to = "/Shop">Shop</Link></li>
                <img src = {NewsVector} id = "newsVector"/>
                <li><Link to = "/News">News</Link></li>

                <div id = "footballLeague">
                    <span>FOOTBALL LEAGUE</span>
                    <img src = {ChampionsLeague} id = "championsLeague"/>
                    <li><Link to = "/ChampionsLeague">Champions League</Link></li>
                    <img src = {PremierLeague} id = "premierLeague"/>
                    <li><Link to = "/PremierLeague">Premier League</Link></li>
                    <img src = {LaLiga} id = "laLiga"/>
                    <li><Link to = "/LaLiga">La Liga</Link></li>
                    <img src = {Ligue1} id = "ligue1"/>
                    <li><Link to = "/Ligue1">Ligue 1</Link></li>
                    <img src = {SerieA} id = "serieA"/>
                    <li><Link to = "/SerieA">Serie A</Link></li>
                    <img src = {Bundesliga} id = "bundesliga"/>
                    <li><Link to = "/Bundesliga">Bundesliga</Link></li>
                    <img src = {Ekstraklasa} id = "ekstraklasa"/>
                    <li><Link to = "/Ekstraklasa">Ekstraklasa</Link></li> 
                </div>
            </div>
            </div>
    )
}
export default Navigation;