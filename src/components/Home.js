import '../styles/Home.scss';
import {Link} from 'react-router-dom';
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
import CartVector from '../images/CartVector.png';
import NotificationVector from '../images/NotificationVector.png';
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

            <div id = "searching">
                <input type = "text" id = "searchInput" placeholder = "Type to search..."></input>
                <img src = {CartVector} id = "cartVector"/>
                <img src = {NotificationVector} id = "notificationVector"/>
                <div id = "account"></div>
            </div>

            <div id = "footballMatch">
                <img src = {FootballBall}/>
                <ul>
                    <li>Latest Match</li>
                    <li>Coming Match</li>
                    <li>Live Games</li>
                </ul>
                <hr id = "footballMatchHR"></hr>
                <hr id = "underlineFootballMatchHR"></hr>
            </div>

            <div id = "firstScore" className = "latestScore">
                <img src = {Argentina}/>
                <span>Argentina</span>
                <div className = "latestMatchScore">
                    <span>1-2</span>
                </div>
                <span>Italy</span>
                <img src = {Italy}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span>18 December 2022</span>
                <img src = {InfoVectorMatch}/>
                <img src = {StatsVectorMatch}/>
            </div>

            <div id = "secondScore" className = "latestScore">
                <img src = {Portugal}/>
                <span>Portugal</span>
                <div className = "latestMatchScore">
                    <span>2-3</span>
                </div>
                <span>Germany</span>
                <img src = {Germany}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span>18 December 2022</span>
                <img src = {InfoVectorMatch}/>
                <img src = {StatsVectorMatch}/>
            </div>

            <div id = "thirdScore" className = "latestScore">
                <img src = {Ghana}/>
                <span>Ghana</span>
                <div className = "latestMatchScore">
                    <span>1-3</span>
                </div>
                <span>Brazil</span>
                <img src = {Brazil}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span>17 December 2022</span>
                <img src = {InfoVectorMatch }/>
                <img src = {StatsVectorMatch}/>
            </div>

            <div id = "fourthScore" className = "latestScore">
                <img src = {Uruguay}/>
                <span>Uruguay</span>
                <div className = "latestMatchScore">
                    <span>2-2</span>
                </div>
                <span>Poland</span>
                <img src = {Poland}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span>17 December 2022</span>
                <img src = {InfoVectorMatch}/>
                <img src = {StatsVectorMatch}/>
            </div>

            <div id = "fifthScore" className = "latestScore">
                <img src = {Spain}/>
                <span>Spain</span>
                <div className = "latestMatchScore">
                    <span>3-3</span>
                </div>
                <span>Czech</span>
                <img src = {Czech}/>
                <div className = "fullTime">
                    <span>Full - Time</span>
                </div>
                <span>16 December 2022</span>
                <img src = {InfoVectorMatch}/>
                <img src = {StatsVectorMatch}/>
            </div>


        </div>
    )
}
export default Home;