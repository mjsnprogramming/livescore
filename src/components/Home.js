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
            </div>

        </div>
    )
}
export default Home;